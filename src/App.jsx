import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import IntroSection from './components/sections/IntroSection';
import ProblemSolution from './components/sections/ProblemSolution';
import HowItWorks from './components/sections/HowItWorks';
import KeyFeatures from './components/sections/KeyFeatures';
import TeamSection from './components/sections/TeamSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="app-layout">
      {/* 1. Header with VietFuture & Lac Hong University Logos */}
      <Navbar />

      {/* 2. Main Page Sections strictly matching design slides */}
      <main>
        {/* Slide 1: Hero AQUA TECH */}
        <HeroSection />

        {/* Slide 2: GIỚI THIỆU */}
        <IntroSection />

        {/* Slide 3: VẤN ĐỀ HIỆN NAY -> GIẢI PHÁP */}
        <ProblemSolution />

        {/* Slide 4: CÁCH HOẠT ĐỘNG */}
        <HowItWorks />

        {/* Slide 5: TÍNH NĂNG */}
        <KeyFeatures />

        {/* Section: ĐỘI NGŨ */}
        <TeamSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
