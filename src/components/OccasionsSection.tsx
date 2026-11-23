import React from 'react';
import { OCCASIONS } from '../config/templateConfig';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider, SilkDrapeDivider } from './Ornaments';

export const OccasionsSection: React.FC = () => {
  return (
    <>
      <SilkDrapeDivider topTone="ivory" bottomTone="maroon" />

      <section
        id="occasions"
        className="bg-[#3B0808] py-9 sm:py-16 px-4 sm:px-6 text-[#F5EFE0]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <ScrollReveal delayMs={0}>
              <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#C9A227]">
                Weddings &amp; Family Gatherings
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={100}>
              <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#F5EFE0]">
                Occasions
              </h2>
            </ScrollReveal>
            <GoldHairlineDivider className="mt-3.5" />
          </div>

          <div className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-7">
            {OCCASIONS.map((occasion, index) => (
              <ScrollReveal key={occasion.id} delayMs={(index + 1) * 100}>
                <figure className="gold-hover-card group flex h-full flex-col overflow-hidden border border-[#C9A227]/55 bg-[#4A0E0E]/75">
                  <div className="aspect-[16/10] md:aspect-[4/5] w-full overflow-hidden bg-[#2B0606]">
                    <div className="img-zoom-reveal h-full w-full">
                      <img
                        src={occasion.photo.src}
                        alt={occasion.photo.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <figcaption className="p-4 sm:p-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F5EFE0]">
                      {occasion.title}
                    </h3>
                    <p className="mt-1.5 font-editorial text-[17px] sm:text-[18px] text-[#F5EFE0]/92 leading-[1.7]">
                      {occasion.description}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={250}>
            <p className="mt-6 text-center font-editorial italic text-[17px] sm:text-[18px] text-[#C9A227]">
              Also Nikah, engagements, birthdays and corporate events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SilkDrapeDivider flip topTone="maroon" bottomTone="ivory" />
    </>
  );
};
