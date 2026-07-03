import { photos } from "../data/photoManifest.js";
import { SectionTitle } from "./SectionTitle.jsx";

const demoImageWidths = [640, 960];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function demoImageSrcSet(photoId, format) {
  return demoImageWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${photoId}/card-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

export function Activities({ content }) {
  const photoMap = new Map(photos.map((photo) => [photo.id, photo]));

  return (
    <section
      className="section-band activities-band"
      id="activities"
      aria-labelledby="activities-title"
    >
      <div className="section-inner activities-layout">
        <SectionTitle
          id="activities-title"
          kicker={content.kicker}
          title={content.title}
        />

        <div className="demo-showcase" aria-labelledby="demo-showcase-title">
          <h3 id="demo-showcase-title">{content.demoShowcase.title}</h3>
          <p>{content.demoShowcase.body}</p>
          <div className="demo-image-row">
            {content.demoShowcase.images.map((image) => {
              const photo = photoMap.get(image.imageId);

              if (!photo) {
                return null;
              }

              return (
                <picture className="demo-image-picture" key={image.imageId}>
                  <source
                    type="image/avif"
                    srcSet={demoImageSrcSet(photo.id, "avif")}
                    sizes="(max-width: 820px) 86vw, 25vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={demoImageSrcSet(photo.id, "webp")}
                    sizes="(max-width: 820px) 86vw, 25vw"
                  />
                  <img
                    className="demo-image"
                    src={assetUrl(`assets/photos/${photo.id}/card-960.jpg`)}
                    alt={photo.alt || image.label}
                    width="960"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: photo.position }}
                  />
                </picture>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
