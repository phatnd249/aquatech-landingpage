import React from 'react';
import Container from '../layout/Container';
import hardwareStationImg from '../../assets/images/hardware-station.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 40px)',
        paddingBottom: '90px',
        position: 'relative',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Aquatic Waves matching Slide 1 */}
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.75,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C 400 200, 900 60, 1440 260 L 1440 700 L 0 700 Z"
          fill="url(#heroWaveGrad)"
        />
        <defs>
          <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left Hero Card with Chamfered Corner */}
          <div
            style={{
              backgroundColor: '#eaf5fe',
              borderRadius: '40px 12px 40px 40px',
              clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)',
              padding: 'clamp(36px, 5vw, 64px) clamp(30px, 4vw, 54px)',
              boxShadow: '0 12px 36px rgba(56, 189, 248, 0.12)',
            }}
          >
            {/* AQUA TECH Big Stacked Blue Headings */}
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(54px, 7.5vw, 92px)',
                fontWeight: '900',
                lineHeight: '0.9',
                color: 'var(--accent-blue)',
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              <div>AQUA</div>
              <div>TECH</div>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(18px, 2.2vw, 23px)',
                fontWeight: '600',
                color: '#0f172a',
                lineHeight: '1.4',
                marginBottom: '36px',
                maxWidth: '420px',
              }}
            >
              Giải pháp Số hóa &amp; Đo lường Tự động trong Sản xuất Cá giống
            </p>

            {/* Button Giới Thiệu */}
            <a
              href="#gioi-thieu"
              style={{
                display: 'inline-block',
                backgroundColor: '#ffffff',
                color: 'var(--accent-blue)',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                padding: '12px 36px',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 4px 16px rgba(30, 136, 229, 0.2)',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 136, 229, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(30, 136, 229, 0.2)';
              }}
            >
              Giới Thiệu
            </a>
          </div>

          {/* Right Workstation Device Image */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={hardwareStationImg}
              alt="Thiết bị đếm cá giống tự động AquaTech"
              style={{
                width: '100%',
                maxWidth: '560px',
                height: 'auto',
                filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
