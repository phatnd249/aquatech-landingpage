import React from 'react';
import Container from '../layout/Container';
import hardwareStationImg from '../../assets/images/hardware-station.png';
import { featuresData } from '../../data/features';
import { Check, Search, TrendingUp } from 'lucide-react';

export default function KeyFeatures() {
  const { sectionTitle, tiers } = featuresData;

  const getTierIcon = (iconType) => {
    switch (iconType) {
      case 'check':
        return (
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#eaf5fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(56, 189, 248, 0.15)',
            }}
          >
            <Check size={32} color="#1e88e5" strokeWidth={3} />
          </div>
        );
      case 'search':
        return (
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#eaf5fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(56, 189, 248, 0.15)',
            }}
          >
            <Search size={30} color="#1e88e5" strokeWidth={2.5} />
          </div>
        );
      case 'trend':
        return (
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#eaf5fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(56, 189, 248, 0.15)',
            }}
          >
            <TrendingUp size={30} color="#1e88e5" strokeWidth={2.5} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="tinh-nang"
      style={{
        paddingTop: '80px',
        paddingBottom: '110px',
        position: 'relative',
        background: 'linear-gradient(180deg, #f8fbff 0%, #edf6ff 50%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Sweeping Circular Wave on Left matching Slide 5 */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-8%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(186, 230, 253, 0.45) 0%, rgba(224, 242, 254, 0.2) 60%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <Container>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <h2
            className="section-title-large"
            style={{
              fontSize: 'clamp(28px, 5vw, 60px)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {sectionTitle}
          </h2>
        </div>

        {/* 2-Column Layout - Spacious and Balanced */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          {/* Left: Hardware Workstation Photo */}
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
                filter: 'drop-shadow(0 16px 36px rgba(11, 99, 229, 0.12))',
              }}
            />
          </div>

          {/* Right: 3 Tiers */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tiers.map((tier, idx) => (
              <div
                key={tier.id}
                className="tier-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '76px 150px 1fr',
                  alignItems: 'center',
                  gap: '24px',
                  paddingTop: idx === 0 ? '0' : '32px',
                  paddingBottom: idx === tiers.length - 1 ? '0' : '32px',
                  borderBottom:
                    idx === tiers.length - 1 ? 'none' : '1.5px solid #bfdbfe',
                }}
              >
                {/* Icon */}
                <div>{getTierIcon(tier.iconType)}</div>

                {/* Title */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19.5px',
                      fontWeight: '800',
                      color: '#000000',
                      lineHeight: '1.25',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tier.title}
                  </h3>
                </div>

                {/* Bullets List */}
                <div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                    className="tier-bullets"
                  >
                    {tier.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          color: '#334155',
                          lineHeight: '1.55',
                          position: 'relative',
                          paddingLeft: '18px',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '9px',
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: '#0b63e5',
                          }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
