import React from 'react';
import { WHY_NAKREEZAY } from '../config/hallDetails';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider } from './Ornaments';

export const WhyNakreezaySection: React.FC = () => {
  return (
    <section
      id="why-nakreezay"
      className="bg-ivory-parchment border-t border-[#C9A227]/30 py-9 sm:py-16 px-4 sm:px-6 text-[#3B2A26]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <ScrollReveal delayMs={0}>
            <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#B08D2E]">
              Trusted Swat Hospitality
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#4A0E0E]">
              Why Nakreezay
            </h2>
          </ScrollReveal>
          <GoldHairlineDivider className="mt-3.5" />
        </div>

        <div className="mt-7 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {WHY_NAKREEZAY.map((item, index) => (
            <ScrollReveal key={item.id} delayMs={(index + 1) * 100}>
              <article className="gold-hover-card flex h-full flex-col justify-between border border-[#C9A227]/55 bg-[#FFFDF8] p-4 sm:p-6">
                <div>
                  <h3 className="font-heading text-base sm:text-xl font-semibold text-[#4A0E0E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-editorial text-[16px] sm:text-[17px] text-[#3B2A26] leading-[1.65] sm:leading-[1.7]">
                    {item.detail}
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
