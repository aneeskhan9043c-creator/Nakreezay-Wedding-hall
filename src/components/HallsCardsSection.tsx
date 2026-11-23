import React from 'react';
import { HALL_CARDS, HALL_CONFIG } from '../config/templateConfig';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider } from './Ornaments';

export const HallsCardsSection: React.FC = () => {
  return (
    <section
      id="halls"
      className="bg-[#FAF6EC] py-9 sm:py-16 px-4 sm:px-6 text-[#3B2A26]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <ScrollReveal delayMs={0}>
            <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#B08D2E]">
              {HALL_CONFIG.hallsSummary}
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#4A0E0E]">
              The Halls
            </h2>
          </ScrollReveal>
          <GoldHairlineDivider className="mt-3.5" />
        </div>

        <div className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {HALL_CARDS.map((hall, index) => (
            <ScrollReveal key={hall.id} delayMs={(index + 1) * 100}>
              <article className="gold-hover-card group flex h-full flex-col overflow-hidden border border-[#C9A227]/55 bg-[#FFFDF8] shadow-[0_10px_28px_rgba(74,14,14,0.06)]">
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#4A0E0E]/10">
                  <div className="img-zoom-reveal h-full w-full">
                    <img
                      src={hall.photo.src}
                      alt={hall.photo.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#4A0E0E]">
                    {hall.name}
                  </h3>
                  <p className="mt-2 font-editorial text-[17px] sm:text-[18px] text-[#3B2A26] leading-[1.7]">
                    {hall.characterLine}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
