import React, { useEffect, useState } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HallsCardsSection } from './components/HallsCardsSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OccasionsSection } from './components/OccasionsSection';
import { GoldRibbonStrip } from './components/Ornaments';
import { VisitBookSection } from './components/VisitBookSection';
import { WhyNakreezaySection } from './components/WhyNakreezaySection';

function shouldAutostart(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('autostart') === '1';
}

export default function App() {
  const [isOpened, setIsOpened] = useState<boolean>(shouldAutostart);
  const [contentVisible, setContentVisible] = useState<boolean>(shouldAutostart);

  useEffect(() => {
    if (isOpened && !contentVisible) {
      const id = window.requestAnimationFrame(() => setContentVisible(true));
      return () => window.cancelAnimationFrame(id);
    }
  }, [isOpened, contentVisible]);

  if (!isOpened) {
    return <EnvelopeIntro onOpenComplete={() => setIsOpened(true)} />;
  }

  return (
    <div
      data-testid="wedding-hall-app"
      className={`min-h-screen bg-[#F5EFE0] text-[#2D0808] transition-opacity duration-700 ${
        contentVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* Gold Infinite Marquee Ribbon */}
        <GoldRibbonStrip />

        {/* 2. The Halls */}
        <HallsCardsSection />

        {/* 3. Occasions */}
        <OccasionsSection />

        {/* 4. Gallery ("Evenings at Nakreezay" — 9 photos) */}
        <GallerySection />

        {/* 5. Why Nakreezay */}
        <WhyNakreezaySection />

        {/* 6. FAQ (5 questions) */}
        <FaqSection />

        {/* 7. Visit & Book */}
        <VisitBookSection />
      </main>

      <Footer />
    </div>
  );
}
