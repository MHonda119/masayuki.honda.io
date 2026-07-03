import { photos } from "../data/photoManifest.js";
import { SectionTitle } from "./SectionTitle.jsx";

const educationImageWidths = [640, 960];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function educationImageSrcSet(photoId, format) {
  return educationImageWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${photoId}/card-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

export function Education({ content }) {
  const photoMap = new Map(photos.map((photo) => [photo.id, photo]));

  return (
    <section
      className="section-band education-band"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section-inner education-layout">
        <SectionTitle
          id="education-title"
          kicker={content.kicker}
          title={content.title}
        />

        <div className="activity-list">
          {content.items.map((item) => {
            const photo = item.imageId ? photoMap.get(item.imageId) : null;

            return (
              <article key={item.title}>
                {photo ? (
                  <picture className="education-image-picture">
                    <source
                      type="image/avif"
                      srcSet={educationImageSrcSet(photo.id, "avif")}
                      sizes="(max-width: 820px) 100vw, 50vw"
                    />
                    <source
                      type="image/webp"
                      srcSet={educationImageSrcSet(photo.id, "webp")}
                      sizes="(max-width: 820px) 100vw, 50vw"
                    />
                    <img
                      className="education-image"
                      src={assetUrl(`assets/photos/${photo.id}/card-960.jpg`)}
                      alt={photo.alt}
                      width="960"
                      height="720"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: photo.position }}
                    />
                  </picture>
                ) : null}
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
