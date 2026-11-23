import React, { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { HALL_CONFIG } from '../config/templateConfig';

const NAV_LINKS = [
  { href: '#halls', label: 'The Halls' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faqs', label: 'FAQs' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#C9A227]/35 backdrop-blur-sm transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[#3B0808]/98 shadow-[0_8px_24px_rgba(43,6,6,0.35)]'
          : 'bg-[#3B0808]/95'
      }`}
    >
      <div
        className={`mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 transition-transform duration-300 ${
          isScrolled ? 'scale-[0.97]' : 'scale-100'
        }`}
      >
        <a
          href="#hero"
          className="font-script text-3xl sm:text-[34px] text-[#C9A227] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity leading-none"
        >
          {HALL_CONFIG.hallName}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 font-heading text-[13px] font-medium uppercase tracking-[0.16em] text-[#F5EFE0]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#C9A227] border-b border-transparent hover:border-[#C9A227] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={HALL_CONFIG.phoneHref}
            className="gold-hover-btn btn-primary-shimmer hidden sm:inline-flex min-h-[42px] items-center justify-center gap-2 border border-[#C9A227] bg-[#C9A227] px-5 py-2 font-heading text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E] whitespace-nowrap shrink-0"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Call to Book</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center border border-[#C9A227]/60 text-[#C9A227] hover:border-[#C9A227] active:scale-[0.97] transition-transform cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#C9A227]/25 bg-[#330707] px-4 py-4"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center border-b border-[#C9A227]/15 px-2 font-heading text-[13px] uppercase tracking-[0.16em] text-[#F5EFE0] hover:text-[#C9A227]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <a
                href={HALL_CONFIG.phoneHref}
                onClick={() => setMobileMenuOpen(false)}
                className="gold-hover-btn btn-primary-shimmer inline-flex min-h-[46px] items-center justify-center border border-[#C9A227] bg-[#C9A227] px-3 py-2 font-heading text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4A0E0E]"
              >
                Call to Book
              </a>
              <a
                href="#visit-book"
                onClick={() => setMobileMenuOpen(false)}
                className="gold-hover-btn inline-flex min-h-[46px] items-center justify-center border border-[#C9A227] bg-transparent px-3 py-2 font-heading text-[13px] font-semibold uppercase tracking-[0.15em] text-[#C9A227]"
              >
                Check My Date
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
