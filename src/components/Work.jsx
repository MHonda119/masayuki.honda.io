import { useEffect, useMemo, useState } from "react";
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
  const [expandedProjectTitle, setExpandedProjectTitle] = useState(null);

  useEffect(() => {
    setExpandedProjectTitle(null);
  }, [content]);

  function toggleProject(projectTitle) {
    const updateExpandedProject = () => {
      setExpandedProjectTitle((currentTitle) =>
        currentTitle === projectTitle ? null : projectTitle
      );
    };

    if (document.startViewTransition) {
      document.startViewTransition(updateExpandedProject);
      return;
    }

    updateExpandedProject();
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
              <span className="keyword-label" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <p className="work-summary">{content.summary}</p>

        <div className="project-grid">
          {content.projects.map((project) => {
            const hasImage = Boolean(
              project.imageId && projectPhotos.has(project.imageId)
            );
            const photo = hasImage ? projectPhotos.get(project.imageId) : null;
            const isExpanded = expandedProjectTitle === project.title;
            const previewId = `project-image-preview-${project.imageId}`;

            if (expandedProjectTitle && !isExpanded) {
              return null;
            }

            return (
              <article
                className={`project-card${
                  hasImage ? " project-card-interactive" : ""
                }${isExpanded ? " project-card-active" : ""}`}
                key={project.title}
              >
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                {hasImage ? (
                  <>
                    <button
                      className="project-card-toggle"
                      type="button"
                      aria-controls={previewId}
                      aria-expanded={isExpanded}
                      onClick={() => toggleProject(project.title)}
                    >
                      <span>{content.projectPreviewLabel}</span>
                      <span
                        className="project-card-toggle-icon"
                        aria-hidden="true"
                      >
                        {isExpanded ? "-" : "+"}
                      </span>
                    </button>
                    {isExpanded ? (
                      <div
                        className="project-image-panel"
                        id={previewId}
                        aria-live="polite"
                      >
                        {project.imageComment ? (
                          <ProjectImageComment>
                            {project.imageComment}
                          </ProjectImageComment>
                        ) : null}
                        <picture className="project-image-picture">
                          <source
                            type="image/avif"
                            srcSet={projectImageSrcSet(photo.id, "avif")}
                            sizes="(max-width: 820px) 100vw, 1120px"
                          />
                          <source
                            type="image/webp"
                            srcSet={projectImageSrcSet(photo.id, "webp")}
                            sizes="(max-width: 820px) 100vw, 1120px"
                          />
                          <img
                            className="project-image"
                            src={assetUrl(
                              `assets/photos/${photo.id}/project-1600.jpg`
                            )}
                            alt={photo.alt}
                            width="1600"
                            height="900"
                            loading="lazy"
                            decoding="async"
                            style={{ objectPosition: photo.position }}
                          />
                        </picture>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
