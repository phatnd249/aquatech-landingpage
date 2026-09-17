import React, { useState } from 'react';
import Container from '../layout/Container';
import Modal from '../ui/Modal';
import { howItWorksData } from '../../data/howItWorks';
import step1Img from '../../assets/images/step1-upload.webp';
import step2Img from '../../assets/images/step2-analysis.webp';
import step3Img from '../../assets/images/step3-summary.webp';
import step4Img from '../../assets/images/step4-history.webp';
import { Play } from 'lucide-react';

export default function HowItWorks() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { sectionTitle, steps, ctaText } = howItWorksData;

  const stepImages = {
    'step1-upload': step1Img,
    'step2-analysis': step2Img,
    'step3-summary': step3Img,
    'step4-history': step4Img,
  };

  return (
    <section
      id="cach-hoat-dong"
      style={{
        paddingTop: '80px',
        paddingBottom: '110px',
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Aquatic Waves matching Slide 4 */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.65,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 C 350 240, 750 40, 1100 180 C 1260 240, 1380 180, 1440 140 L 1440 600 L 0 600 Z"
          fill="url(#waveGradWorks)"
        />
        <defs>
          <linearGradient id="waveGradWorks" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <h2
            className="section-title-large"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {sectionTitle}
          </h2>
        </div>

        {/* 4 Process Cards - Strictly 4 Columns on Same Row on Desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '54px',
          }}
          className="how-it-works-grid"
        >
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '26px',
                padding: '26px 16px 22px 16px',
                boxShadow: 'var(--shadow-card)',
                border: '1.5px solid #dbeafe',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                minHeight: '490px',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = '#dbeafe';
              }}
            >
              {/* Top Blue Pill Badge */}
              <div
                style={{
                  backgroundColor: 'var(--accent-blue)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: '800',
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 14px rgba(11, 99, 229, 0.25)',
                  marginBottom: '18px',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.badgeTitle}
              </div>

              {/* Step Image - 190px Viewport so images are clear and fit in 1 row */}
              <div
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 14px rgba(11, 99, 229, 0.06)',
                }}
              >
                <img
                  src={stepImages[step.imageKey]}
                  alt={step.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.04))',
                  }}
                />
              </div>

              {/* Caption */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14.5px',
                  fontStyle: 'italic',
                  fontWeight: '500',
                  color: '#1e293b',
                  lineHeight: '1.45',
                  marginBottom: '14px',
                  padding: '0 4px',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '44px',
                }}
              >
                {step.caption}
              </p>

              {/* Large Step Number at Bottom */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#93c5fd',
                  lineHeight: '1',
                }}
              >
                {step.stepNumber}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button: XEM VIDEO DEMO */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--accent-blue)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: '800',
              padding: '14px 44px',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 8px 25px rgba(30, 136, 229, 0.35)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(30, 136, 229, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 136, 229, 0.35)';
            }}
          >
            <Play size={20} fill="#ffffff" />
            <span>{ctaText}</span>
          </button>
        </div>
      </Container>

      {/* Video Demo Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Video Demo Quy Trình Nhận Diện & Đếm Cá Giống AI — AquaTech"
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '720px',
              aspectRatio: '16/9',
              backgroundColor: '#0f172a',
              borderRadius: '18px',
              margin: '0 auto 20px auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              padding: '24px',
              border: '2px dashed #38bdf8',
            }}
          >
            <Play size={48} color="#00f2fe" style={{ marginBottom: '16px' }} />
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              Video Thử Nghiệm Thực Địa Tại Trại Giống
            </h4>
            <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '480px' }}>
              Đo lường trực tiếp tốc độ nhận diện 1.250 cá giống trong vòng 1.2 giây với độ chính xác 98.6%.
            </p>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Video được ghi hình trực tiếp tại cơ sở thực nghiệm dự thi VietFuture 2026.
          </p>
        </div>
      </Modal>

      <style>{`
        @media (min-width: 960px) {
          .how-it-works-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
