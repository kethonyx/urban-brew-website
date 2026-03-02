import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery-interior.jpg",
    alt: "Cozy interior of Urban Brew with wooden tables and warm lighting"
  },
  {
    src: "/images/gallery-barista.jpg",
    alt: "Barista preparing pour-over coffee behind the bar"
  },
  {
    src: "/images/gallery-brunch.jpg",
    alt: "Brunch spread with avocado toast and coffee on a wooden table"
  },
  {
    src: "/images/gallery-detail.jpg",
    alt: "Close-up of latte art in a ceramic cup"
  }
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding"
      aria-labelledby="gallery-heading"
    >
      <div className="container-default space-y-6">
        <div className="space-y-3">
          <p className="pill w-fit">Gallery</p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
          >
            A warm, minimal space for everyday rituals.
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Designed with natural materials, tactile textures, and soft light to make every visit
            feel unhurried.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {galleryImages.map((image) => (
            <article
              key={image.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200 shadow-soft dark:bg-black"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 250px, (min-width: 768px) 25vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

