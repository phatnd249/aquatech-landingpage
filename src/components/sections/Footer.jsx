import React from 'react';
import Container from '../layout/Container';
import vietfutureLogo from '../../assets/images/vietfuture-logo.png';
import lachongLogo from '../../assets/images/lachong-logo.png';

export default function Footer() {
  return (
    <footer id="lien-he" style={{ position: 'relative' }}>
      {/* Upper Slide Section: Logos, Huge AQUATECH, Italic Subtitle */}
      <div
        style={{
          background: 'linear-gradient(180deg, #f8fbff 0%, #ebf5fe 100%)',
          paddingTop: '70px',
          paddingBottom: '80px',
          textAlign: 'center',
          borderTop: '1px solid rgba(224, 242, 254, 0.9)',
        }}
      >
        <Container>
          {/* Centered Logos: VietFuture & Lac Hong University - Optimized size to prevent blurriness */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <img
              src={vietfutureLogo}
              alt="VietFuture 2026 Logo"
              style={{
                height: '46px',
                width: 'auto',
                maxHeight: '48px',
                objectFit: 'contain',
                imageRendering: 'auto',
              }}
            />
            <div
              style={{
                width: '1px',
                height: '32px',
                backgroundColor: 'rgba(148, 163, 184, 0.5)',
              }}
            />
            <img
              src={lachongLogo}
              alt="Lạc Hồng University Logo"
              style={{
                height: '42px',
                width: 'auto',
                maxHeight: '44px',
                objectFit: 'contain',
                imageRendering: 'auto',
              }}
            />
          </div>

          {/* Enormous AQUATECH Title */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(54px, 7.5vw, 92px)',
              fontWeight: '900',
              color: '#0b63e5',
              letterSpacing: '0.01em',
              margin: '0 0 16px 0',
              lineHeight: '1',
              textShadow: '0 4px 20px rgba(11, 99, 229, 0.12)',
            }}
          >
            AQUATECH
          </h2>

          {/* Italic Blue Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(18px, 2.4vw, 27px)',
              fontStyle: 'italic',
              fontWeight: '700',
              color: '#0b63e5',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Giải pháp Số hóa &amp; Đo lường Tự động trong Sản xuất Cá giống
          </p>
        </Container>
      </div>

      {/* Lower Solid Blue Footer Box */}
      <div
        style={{
          backgroundColor: '#0b63e5',
          color: '#ffffff',
          paddingTop: '48px',
          paddingBottom: '32px',
        }}
      >
        <Container>
          {/* 2-Column Info Grid matching Image 2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px 60px',
              paddingBottom: '40px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Left Column: Don vi & Dia chi */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '18px', lineHeight: '1.5' }}>
                <strong style={{ fontWeight: '800' }}>Đơn vị:</strong>{' '}
                <span style={{ fontWeight: '400' }}>Trường Đại học Lạc Hồng</span>
              </div>
              <div style={{ fontSize: '18px', lineHeight: '1.5' }}>
                <strong style={{ fontWeight: '800' }}>Địa chỉ:</strong>{' '}
                <span style={{ fontWeight: '400' }}>
                  10 Huỳnh Văn Nghệ, Bửu Long, Biên Hòa, Đồng Nai
                </span>
              </div>
            </div>

            {/* Right Column: Email & So dien thoai */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '18px', lineHeight: '1.5' }}>
                <strong style={{ fontWeight: '800' }}>Email:</strong>{' '}
                <span style={{ fontWeight: '400' }}>[Bổ sung]</span>
              </div>
              <div style={{ fontSize: '18px', lineHeight: '1.5' }}>
                <strong style={{ fontWeight: '800' }}>Số điện thoại:</strong>{' '}
                <span style={{ fontWeight: '400' }}>[Bổ sung]</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Privacy / Terms */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '24px',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <div>© 2026 AQUATECH. All rights reserved.</div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a
                href="#privacy"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
              >
                Chính sách bảo mật
              </a>
              <span>|</span>
              <a
                href="#terms"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
