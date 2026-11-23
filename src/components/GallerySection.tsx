import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, MessageCircle, X } from 'lucide-react';
import {
  GALLERY_FILTERS,
  GALLERY_PHOTOS,
  GalleryCategory,
  HALL_CONFIG,
} from '../config/templateConfig';
import { buildQuickWhatsAppUrl } from '../utils/booking';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider } from './Ornaments';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const whatsappUrl = buildQuickWhatsAppUrl(
    HALL_CONFIG.hallName,
    HALL_CONFIG.whatsappDigits
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const activeLightboxPhoto =
    lightboxIndex !== null && visiblePhotos[lightboxIndex]
      ? visiblePhotos[lightboxIndex]
      : null;

  return (
    <section
      id="gallery"
      className="bg-[#FAF6EC] py-9 sm:py-16 px-4 sm:px-6 text-[#3B2A26]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <ScrollReveal delayMs={0}>
            <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#B08D2E]">
              Moments Across Both Halls
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#4A0E0E]">
              Evenings at Nakreezay
            </h2>
          </ScrollReveal>
          <GoldHairlineDivider className="mt-3.5" />
        </div>

        {/* Single Horizontally Scrollable Filter Row */}
        <ScrollReveal delayMs={200}>
          <div className="mt-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              className="no-scrollbar flex flex-nowrap items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2"
              role="tablist"
              aria-label="Filter wedding gallery photos"
            >
              {GALLERY_FILTERS.map((category) => {
                const isSelected = selectedCategory === category;
                const count =
                  category === 'All'
                    ? GALLERY_PHOTOS.length
                    : GALLERY_PHOTOS.filter((item) => item.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSelectedCategory(category);
                      setLightboxIndex(null);
                    }}
                    className={`min-h-[42px] whitespace-nowrap shrink-0 border px-4 py-2 font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.94] cursor-pointer ${
                      isSelected
                        ? 'border-[#C9A227] bg-[#C9A227] text-[#4A0E0E] shadow-[0_6px_16px_rgba(201,162,39,0.3)]'
                        : 'border-[#C9A227] bg-transparent text-[#4A0E0E] hover:bg-[#C9A227]/12'
                    }`}
                  >
                    {category}{' '}
                    <span className="tabular-nums opacity-85">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* 9-Photo 4:5 Portrait Grid with smooth filter fade+scale transition */}
        <div className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {visiblePhotos.map((photo, index) => (
            <ScrollReveal key={`${selectedCategory}-${photo.id}`} delayMs={(index % 3) * 100}>
              <figure
                className="gallery-tile-enter group flex flex-col"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="gold-hover-card flex flex-col w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0E0E] bg-[#FFFDF8] border border-[#C9A227]/45 p-2 sm:p-2.5"
                  aria-label={`View photo: ${photo.title}`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#4A0E0E]/10">
                    <div className="img-zoom-reveal h-full w-full">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center border border-[#C9A227]/75 bg-[#3B0808]/80 text-[#F5EFE0] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    >
                      <Expand className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <figcaption className="pt-3 pb-1 px-1 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <p className="font-editorial text-[17px] sm:text-[18px] font-semibold text-[#4A0E0E] leading-snug">
                      {photo.title}
                    </p>
                    <p className="mt-0.5 font-editorial italic text-sm sm:text-base text-[#6B5B52] leading-snug">
                      {photo.caption}
                    </p>
                  </figcaption>
                </button>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delayMs={150}>
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-hover-btn inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#C9A227] bg-transparent px-7 py-3 font-heading text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] hover:bg-[#C9A227]/12 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>See more on WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Animated Lightbox Modal */}
      {activeLightboxPhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B0606]/92 p-4 sm:p-6 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="lightbox-panel relative w-full max-w-4xl border border-[#C9A227]/75 bg-[#3B0808] p-4 sm:p-6 text-[#F5EFE0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#C9A227]/30">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F5EFE0]">
                  {activeLightboxPhoto.title}
                </h3>
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A227] mt-0.5">
                  {activeLightboxPhoto.category} ·{' '}
                  <span className="tabular-nums">
                    {lightboxIndex + 1} / {visiblePhotos.length}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#4A0E0E] transition-colors cursor-pointer"
                aria-label="Close photo lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-4 flex items-center justify-center bg-[#2B0606]">
              <img
                src={activeLightboxPhoto.src}
                alt={activeLightboxPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-editorial italic text-[17px] text-[#F5EFE0]/90 text-center sm:text-left">
                {activeLightboxPhoto.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length
                    )
                  }
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#C9A227] px-3 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#4A0E0E] transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)
                  }
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#C9A227] px-3 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#4A0E0E] transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
