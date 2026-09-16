import React from 'react';
import { FileText, Download, CheckCircle2, Shield } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import TechBadge from '../ui/TechBadge';
import { systemSpecsData } from '../../data/specs';

export default function SystemSpecs() {
  const { sectionTag, title, subtitle, categories } = systemSpecsData;

  return (
    <Section
      id="specs"
      backdropReverse={true}
      backdropVariant="cyan"
    >
      <Container>
        <SectionTitle
          tag={sectionTag}
          title={title}
          subtitle={subtitle}
          gradient="cyan"
        />

        {/* 4 Category Spec Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              glow="none"
              padding="24px"
              style={{
                borderLeft: `4px solid ${cat.color}`,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: cat.color,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {cat.group}
                </h3>
                <TechBadge color={cat.color} variant="outline">
                  Module #{idx + 1}
                </TechBadge>
              </div>

              {/* Spec Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.specs.map((item, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '16px',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: sIdx % 2 === 0 ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        fontWeight: '500',
                        flex: 1,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        textAlign: 'right',
                        flex: 1.2,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Download Technical Whitepaper Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Shield size={20} color="#00f2fe" />
              <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>
                Tài Liệu Toàn Văn &amp; Đặc Tả Kỹ Thuật (VietFuture 2026)
              </h4>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Bao gồm bản vẽ sơ đồ mạch nguyên lý phần cứng, công thức tính toán chỉ số chất lượng nước WQI, tài liệu đặc tả OpenAPI 3.0 và kết quả kiểm nghiệm thực tế 90 ngày.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button
              as="a"
              href="#hero"
              variant="primary"
              size="md"
              icon={Download}
              onClick={() => alert('Bản Whitepaper đầy đủ đang được tải về từ thư mục tài liệu dự án.')}
            >
              Tải Whitepaper (PDF)
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
