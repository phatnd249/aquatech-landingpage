import React from 'react';
import Container from '../layout/Container';
import { teamData } from '../../data/team';

export default function TeamSection() {
  const { sectionTitle, members } = teamData;

  return (
    <section
      id="doi-ngu"
      style={{
        paddingTop: '80px',
        paddingBottom: '130px',
        position: 'relative',
        background: 'linear-gradient(135deg, #f3f8fe 0%, #e2effe 50%, #ebf5fe 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background light reflection / angle highlight matching slide */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '50%',
          height: '130%',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'rotate(-25deg)',
        }}
      />

      <Container>
        {/* Section Title "ĐỘI NGŨ" */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: '900',
              color: '#0b63e5',
              letterSpacing: '-0.02em',
              margin: 0,
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(11, 99, 229, 0.1)',
            }}
          >
            {sectionTitle}
          </h2>
        </div>

        {/* 5 Members Staggered Wave Layout - Evenly Spread & Sized */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(20px, 2.8vw, 36px)',
            maxWidth: '1240px',
            margin: '0 auto',
            paddingBottom: '60px',
          }}
          className="team-grid-container"
        >
          {members.map((member) => (
            <div
              key={member.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                transform: member.offset ? 'translateY(46px)' : 'translateY(0px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="team-card-wrapper"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = member.offset
                  ? 'translateY(36px)'
                  : 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = member.offset
                  ? 'translateY(46px)'
                  : 'translateY(0px)';
              }}
            >
              {/* Photo Frame with Offset Blue Border Layer (as in slide) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4.1',
                  marginBottom: '14px',
                }}
              >
                {/* Back offset blue border card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-6px',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #2563eb',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(239, 246, 255, 0.6)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />

                {/* Front Photo Container with Landscape Placeholder illustration */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(11, 99, 229, 0.12)',
                    overflow: 'hidden',
                    border: '1px solid rgba(219, 234, 254, 0.8)',
                  }}
                >
                  {/* Default Landscape Vector Placeholder matching Slide Image 1 */}
                  <svg
                    viewBox="0 0 180 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id={`skyGrad-${member.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#76b5ff" />
                        <stop offset="45%" stopColor="#a3ceff" />
                        <stop offset="70%" stopColor="#d5e8ff" />
                        <stop offset="100%" stopColor="#eaf4ff" />
                      </linearGradient>
                      <linearGradient id={`hillGrad1-${member.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#557a95" />
                        <stop offset="100%" stopColor="#1e3a5f" />
                      </linearGradient>
                      <linearGradient id={`hillGrad2-${member.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#608d58" />
                        <stop offset="100%" stopColor="#1b4d24" />
                      </linearGradient>
                      <filter id={`cloudShadow-${member.id}`} x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.08" />
                      </filter>
                    </defs>

                    {/* Sky Background */}
                    <rect width="180" height="240" fill={`url(#skyGrad-${member.id})`} />

                    {/* Fluffy White Cloud */}
                    <g filter={`url(#cloudShadow-${member.id})`}>
                      <path
                        d="M62 90 
                           C62 82, 69 76, 78 76 
                           C81 76, 84 77, 87 79 
                           C91 72, 99 68, 107 68 
                           C118 68, 126 75, 128 84 
                           C132 84, 136 88, 136 93 
                           C136 99, 131 104, 125 104 
                           L65 104 
                           C58 104, 53 99, 53 93 
                           C53 88, 57 84, 62 84 Z"
                        fill="#ffffff"
                        opacity="0.95"
                      />
                    </g>

                    {/* Background Horizon Hill */}
                    <path
                      d="M0 160 Q 60 142, 120 152 T 180 155 L 180 240 L 0 240 Z"
                      fill={`url(#hillGrad1-${member.id})`}
                      opacity="0.85"
                    />

                    {/* Foreground Green Hill */}
                    <path
                      d="M0 180 Q 80 165, 180 205 L 180 240 L 0 240 Z"
                      fill={`url(#hillGrad2-${member.id})`}
                    />
                  </svg>
                </div>
              </div>

              {/* Title / Member Label matching Image 1 */}
              <div style={{ width: '100%' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: '800',
                    color: '#0b63e5',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                    textAlign: 'left',
                  }}
                >
                  {member.title}
                </h4>

                {/* Blue Accent Underline matching slide */}
                <div
                  style={{
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #0b63e5 0%, #38bdf8 85%, transparent 100%)',
                    borderRadius: '1px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (min-width: 960px) {
          .team-grid-container {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
