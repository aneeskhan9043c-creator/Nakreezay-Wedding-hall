import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../config/hallDetails';
import { ScrollReveal } from './MotionHelpers';
import { GoldHairlineDivider } from './Ornaments';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="bg-[#FAF6EC] border-t border-[#C9A227]/30 py-9 sm:py-16 px-4 sm:px-6 text-[#3B2A26]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <ScrollReveal delayMs={0}>
            <p className="font-heading text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] text-[#B08D2E]">
              Quick Answers
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <h2 className="mt-1.5 font-heading text-[clamp(26px,6vw,40px)] font-semibold text-[#4A0E0E]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <GoldHairlineDivider className="mt-3.5" />
        </div>

        <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal key={item.id} delayMs={(index + 1) * 100}>
                <div className="border border-[#C9A227]/50 bg-[#FFFDF8] transition-[border-color,box-shadow] duration-200 hover:border-[#C9A227]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => handleToggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      className="flex min-h-[54px] w-full items-center justify-between gap-4 px-5 py-3.5 text-left font-heading text-base sm:text-lg font-semibold text-[#4A0E0E] hover:bg-[#FAF6EC] hover:text-[#7E1F1F] transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#B08D2E] transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${item.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`border-t border-[#C9A227]/25 px-5 py-4 font-editorial text-[17px] sm:text-[18px] text-[#3B2A26] leading-[1.7] transition-[opacity,transform] duration-300 ease-out ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                        }`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
