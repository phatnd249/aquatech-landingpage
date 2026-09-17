import React, { useState, useEffect } from 'react';
import Container from './Container';
import vietfutureLogo from '../../assets/images/vietfuture-logo.png';
import lachongLogo from '../../assets/images/lachong-logo.png';
import { projectData } from '../../data/project';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--navbar-height)',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        transition: 'all var(--transition-normal)',
      }}
    >
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Logos on Left - Sharp at native resolution without pixelation */}
        <a
          href="#hero"
          className="brand-logos"
          style={{
            textDecoration: 'none',
          }}
        >
          <img
            src={vietfutureLogo}
            alt="VietFuture 2026 Logo"
            className="brand-logo"
          />
          <div
            style={{
              width: '1px',
              height: '28px',
              backgroundColor: '#cbd5e1',
              flexShrink: 0,
            }}
          />
          <img
            src={lachongLogo}
            alt="Lạc Hồng University Logo"
            className="brand-logo brand-logo--lh"
          />
        </a>

        {/* Desktop Nav on Right */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {projectData.navLinks.map((link) => {
            if (link.isPill) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '8px 24px',
                    borderRadius: 'var(--radius-full)',
                    border: '1.5px solid var(--accent-blue)',
                    color: 'var(--accent-blue)',
                    fontWeight: '600',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                    boxShadow: '0 2px 8px rgba(30, 136, 229, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-blue)';
                  }}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'var(--accent-blue)',
                  textDecoration: 'none',
                  transition: 'opacity var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Mở menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: '#f8fafc',
            color: 'var(--text-primary)',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
          }}
        >
          {projectData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--accent-blue)',
                padding: '12px 0',
                borderBottom: '1px solid #f1f5f9',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
