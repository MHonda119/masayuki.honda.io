import { useEffect, useMemo, useRef, useState } from "react";
import { photos } from "../data/photoManifest.js";
import { SectionTitle } from "./SectionTitle.jsx";

const projectImageWidths = [1280, 1600];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function projectImageSrcSet(photoId, format) {
  return projectImageWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${photoId}/project-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

function ProjectImageComment({ children }) {
  return <p className="project-image-comment">{children}</p>;
}

export function Work({ content, keywords }) {
  const projectPhotos = useMemo(
    () => new Map(photos.map((photo) => [photo.id, photo])),
    []
  );
  const [activeProject, setActiveProject] = useState(null);
  const projectImagePanelRef = useRef(null);
  const shouldScrollToPanelRef = useRef(false);

  const activePhoto = activeProject?.imageId
    ? projectPhotos.get(activeProject.imageId)
    : null;

  function scrollToProjectImagePanel() {
    window.requestAnimationFrame(() => {
      projectImagePanelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  useEffect(() => {
    shouldScrollToPanelRef.current = false;
    setActiveProject(null);
  }, [content]);

  useEffect(() => {
    if (!activePhoto || !shouldScrollToPanelRef.current) {
      return;
    }

    shouldScrollToPanelRef.current = false;
    scrollToProjectImagePanel();
  }, [activePhoto, activeProject]);

  function activateProject(project, shouldScroll = false) {
    if (project.imageId && projectPhotos.has(project.imageId)) {
      if (shouldScroll && activeProject?.title === project.title) {
        scrollToProjectImagePanel();
        return;
      }

      shouldScrollToPanelRef.current = shouldScroll;
      setActiveProject(project);
    }
  }

  function handleProjectKeyDown(event, project) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateProject(project, true);
    }
  }

  return (
    <section
      className="section-band work-band"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-inner">
        <div className="section-heading wide-heading">
          <div>
            <SectionTitle
              id="work-title"
              kicker={content.kicker}
              title={content.title}
            />
          </div>
          <div className="keyword-list" aria-label="Keywords">
            {keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>

        <div className="responsibility-grid">
          {content.responsibilities.map((responsibility) => (
            <div key={responsibility}>{responsibility}</div>
          ))}
        </div>

        <div className="project-grid">
          {content.projects.map((project) => {
            const hasImage = Boolean(
              project.imageId && projectPhotos.has(project.imageId)
            );
            const isActive = activeProject?.title === project.title;

            return (
              <article
                className={`project-card${
                  hasImage ? " project-card-interactive" : ""
                }${isActive ? " project-card-active" : ""}`}
                key={project.title}
                role={hasImage ? "button" : undefined}
                tabIndex={hasImage ? 0 : undefined}
                aria-controls={hasImage ? "project-image-preview" : undefined}
                aria-expanded={hasImage ? isActive : undefined}
                onClick={() => activateProject(project, true)}
                onFocus={() => activateProject(project)}
                onKeyDown={(event) => handleProjectKeyDown(event, project)}
                onMouseEnter={() => activateProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <span className="project-card-hint">
                  {hasImage
                    ? content.projectPreviewLabel
                    : content.projectNoImageLabel}
                </span>
              </article>
            );
          })}
        </div>

        {activePhoto ? (
          <div
            className="project-image-panel"
            id="project-image-preview"
            ref={projectImagePanelRef}
            aria-live="polite"
          >
            <div className="project-image-heading">
              <span>{activeProject.title}</span>
            </div>
            {activeProject.imageComment ? (
              <ProjectImageComment>
                {activeProject.imageComment}
              </ProjectImageComment>
            ) : null}
            <picture className="project-image-picture">
              <source
                type="image/avif"
                srcSet={projectImageSrcSet(activePhoto.id, "avif")}
                sizes="(max-width: 820px) 100vw, 1120px"
              />
              <source
                type="image/webp"
                srcSet={projectImageSrcSet(activePhoto.id, "webp")}
                sizes="(max-width: 820px) 100vw, 1120px"
              />
              <img
                className="project-image"
                src={assetUrl(
                  `assets/photos/${activePhoto.id}/project-1600.jpg`
                )}
                alt={activePhoto.alt}
                width="1600"
                height="900"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: activePhoto.position }}
              />
            </picture>
          </div>
        ) : null}
      </div>
    </section>
  );
}
