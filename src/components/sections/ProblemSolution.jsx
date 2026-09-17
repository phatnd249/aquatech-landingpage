import React from 'react';
import Container from '../layout/Container';
import { problemSolutionData } from '../../data/problemSolution';
import solFishDetectImg from '../../assets/images/sol-fish-detect.webp';
import solDevicesImg from '../../assets/images/sol-devices.png';
import solTableImg from '../../assets/images/sol-table.webp';
import solHistoryImg from '../../assets/images/sol-history.webp';

export default function ProblemSolution() {
  const { problemsTitle, solutionsTitle, solutionsSubtitle, problems, solutions } =
    problemSolutionData;

  const solImages = {
    'sol-fish-detect': solFishDetectImg,
    'sol-devices': solDevicesImg,
    'sol-table': solTableImg,
    'sol-history': solHistoryImg,
  };

  const getProblemIcon = (iconType) => {
    switch (iconType) {
      case 'cross':
        return (
          <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        );
      case 'search':
        return (
          <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <circle cx="11" cy="11" r="3" />
              <line x1="14" y1="14" x2="17" y2="17" />
              <line x1="8" y1="6" x2="16" y2="6" />
            </svg>
          </div>
        );
      case 'clock':
        return (
          <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 14" />
            </svg>
          </div>
        );
      case 'gear':
        return (
          <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="giai-phap"
      style={{
        paddingTop: '80px',
        paddingBottom: '110px',
        position: 'relative',
        background: 'linear-gradient(180deg, #f8fbff 0%, #edf5fe 50%, #f4f9ff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Aquatic Wave Curves matching slide design */}
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
          d="M-50 150 C 250 80, 450 320, 800 200 C 1150 80, 1350 280, 1500 180 L 1500 600 L -50 600 Z"
          fill="url(#waveGradProblem)"
        />
        <defs>
          <linearGradient id="waveGradProblem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        {/* Main 2-Column Layout with Mathematically Aligned Heights */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'start',
          }}
          className="problem-solution-grid"
        >
          {/* ================= LEFT COLUMN: VẤN ĐỀ HIỆN NAY ================= */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header: VẤN ĐỀ HIỆN NAY (Locked height 115px for perfect alignment with right header) */}
            <div
              style={{
                height: '115px',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4.2vw, 52px)',
                  fontWeight: '900',
                  lineHeight: '1.05',
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                <div>VẤN ĐỀ</div>
                <div>HIỆN NAY</div>
              </h2>
            </div>

            {/* 4 Problem Cards (2x2) - Locked Row Height 210px */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 210px)',
                gap: '20px',
              }}
              className="problem-cards-grid"
            >
              {problems.map((prob) => (
                <div
                  key={prob.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '24px 18px',
                    boxShadow: 'var(--shadow-card)',
                    border: '1.5px solid #dbeafe',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                    e.currentTarget.style.borderColor = '#93c5fd';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = '#dbeafe';
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    {getProblemIcon(prob.iconType)}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'var(--accent-blue)',
                      marginBottom: '8px',
                      lineHeight: '1.3',
                    }}
                  >
                    {prob.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '12.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.45',
                    }}
                  >
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MIDDLE: LARGE BLUE ARROW ================= */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '115px',
              paddingTop: '10px',
            }}
            className="arrow-divider"
          >
            <svg
              width="58"
              height="58"
              viewBox="0 0 24 24"
              fill="#0b63e5"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(11, 99, 229, 0.3))',
              }}
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>

          {/* ================= RIGHT COLUMN: GIẢI PHÁP ================= */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header: GIẢI PHÁP & Subtitle (Locked height 115px for perfect alignment with left header) */}
            <div
              style={{
                height: '115px',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div
                className="chamfered-badge"
                style={{
                  padding: '10px 42px',
                  backgroundColor: '#eaf5fe',
                  marginBottom: '10px',
                  alignSelf: 'flex-start',
                }}
              >
                <h2
                  className="section-title-large"
                  style={{
                    fontSize: 'clamp(28px, 4vw, 50px)',
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  {solutionsTitle}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '17px',
                  fontStyle: 'italic',
                  fontWeight: '700',
                  color: 'var(--accent-blue)',
                  margin: 0,
                }}
              >
                {solutionsSubtitle}
              </p>
            </div>

            {/* 4 Solution Cards (2x2) - Locked Row Height 210px */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 210px)',
                gap: '20px',
              }}
              className="solution-cards-grid"
            >
              {solutions.map((sol) => (
                <div
                  key={sol.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '16px',
                    boxShadow: 'var(--shadow-card)',
                    border: '1.5px solid #dbeafe',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                    e.currentTarget.style.borderColor = '#93c5fd';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = '#dbeafe';
                  }}
                >
                  {/* Image container: Clean white / transparent background with object-fit contain */}
                  <div
                    style={{
                      width: '100%',
                      height: '130px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '10px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: sol.imageKey === 'sol-fish-detect' ? '0' : '6px',
                    }}
                  >
                    <img
                      src={solImages[sol.imageKey]}
                      alt={sol.caption}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: sol.imageKey === 'sol-fish-detect' ? 'cover' : 'contain',
                        borderRadius: sol.imageKey === 'sol-fish-detect' ? '14px' : '0',
                        filter: sol.imageKey !== 'sol-fish-detect' ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.06))' : 'none',
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: 'var(--accent-blue)',
                      lineHeight: '1.4',
                    }}
                  >
                    {sol.caption}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .problem-solution-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .arrow-divider {
            transform: rotate(90deg);
            height: auto !important;
            padding: 10px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
