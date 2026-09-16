import React from 'react';
import Container from '../layout/Container';
import fishDetectionImg from '../../assets/images/fish-detection.png';

export default function IntroSection() {
  return (
    <section
      id="gioi-thieu"
      style={{
        paddingTop: '70px',
        paddingBottom: '100px',
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f4f9fe 50%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Aquatic Waves matching Slide 2 */}
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
          opacity: 0.6,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 C 300 350, 700 150, 1100 280 C 1280 340, 1380 260, 1440 220 L 1440 600 L 0 600 Z"
          fill="url(#waveGradIntro)"
        />
        <defs>
          <linearGradient id="waveGradIntro" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        {/* Chamfered Title Badge "GIỚI THIỆU" */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '54px',
          }}
        >
          <div
            className="chamfered-badge"
            style={{
              padding: '14px 48px',
              backgroundColor: '#eaf5fe',
              boxShadow: '0 4px 20px rgba(11, 99, 229, 0.12)',
            }}
          >
            <h2
              className="section-title-large"
              style={{
                fontSize: 'clamp(38px, 5vw, 64px)',
                letterSpacing: '-0.02em',
                margin: 0,
                textAlign: 'center',
              }}
            >
              GIỚI THIỆU
            </h2>
          </div>
        </div>

        {/* 2-Column Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            alignItems: 'center',
            gap: '54px',
          }}
        >
          {/* Left Text Description */}
          <div>
            <p
              style={{
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                lineHeight: '1.65',
                color: '#0f172a',
                fontWeight: '400',
              }}
            >
              <strong style={{ fontWeight: '800', color: '#000000' }}>
                AQUATECH
              </strong>{' '}
              ứng dụng thị giác máy tính và học sâu để nhận diện, đếm cá giống từ hình ảnh. Hệ thống giúp các cơ sở sản xuất giống giảm thao tác thủ công, rút ngắn thời gian kiểm đếm và quản lý số lượng minh bạch hơn.
            </p>
          </div>

          {/* Right Detection Image Card - Transparent Handling */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '560px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(11, 99, 229, 0.14)',
                border: '1.5px solid #dbeafe',
                backgroundColor: '#ffffff',
              }}
            >
              <img
                src={fishDetectionImg}
                alt="AI nhận diện và đếm cá giống tự động"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '22px',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
