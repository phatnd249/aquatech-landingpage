import React, { useState } from 'react';
import { Monitor, Maximize2, Sparkles, Sliders, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import TechBadge from '../ui/TechBadge';
import Modal from '../ui/Modal';
import dashboardPreviewSvg from '../../assets/screenshots/dashboard-preview.svg';

export default function ShowcaseGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📊 Tổng Quan Thời Gian Thực', badge: 'Live Stream' },
    { id: 'predictive', label: '🤖 Dự Báo Nhu Cầu Oxy AI', badge: 'PyTorch Model' },
    { id: 'automation', label: '⚡ Điều Khiển Thiết Bị Tự Động', badge: 'Closed Loop' },
  ];

  const simulationEvents = [
    { time: '11:24:05', text: 'Kích hoạt bơm oxy 2.2kW (PUMP_01)', status: 'success', badge: 'Auto Action' },
    { time: '11:20:12', text: 'AI Inference: Dự báo DO giảm về 5.2 mg/L trong 3h tới', status: 'info', badge: 'Prediction' },
    { time: '11:15:00', text: 'Đồng bộ 5,200 điểm đo lên TimescaleDB Cloud', status: 'success', badge: 'Sync OK' },
    { time: '11:00:18', text: 'Hiệu chuẩn độ trôi cảm biến pH tự động', status: 'warning', badge: 'Calibrated' },
  ];

  return (
    <Section
      id="showcase"
      backdropReverse={false}
      backdropVariant="cyan"
    >
      <Container>
        <SectionTitle
          tag="GIAO DIỆN THỰC TẾ SẢN PHẨM"
          title="Trực Quan Hóa Bảng Điều Khiển Live Telemetry"
          subtitle="Trải nghiệm giao diện vận hành thực tế thu nhận từ hệ thống cảm biến ao nuôi và thuật toán AI phân tích thời gian thực"
          gradient="cyan"
        />

        {/* View Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: activeTab === t.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-default)',
                backgroundColor: activeTab === t.id ? 'rgba(0, 242, 254, 0.15)' : 'rgba(15, 23, 42, 0.65)',
                color: activeTab === t.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <span>{t.label}</span>
              <TechBadge color={activeTab === t.id ? '#00f2fe' : '#94a3b8'} variant="pill">
                {t.badge}
              </TechBadge>
            </button>
          ))}
        </div>

        {/* Dashboard Display Card */}
        <Card
          glow="cyan"
          padding="16px"
          style={{
            marginBottom: '32px',
            backgroundColor: 'rgba(7, 12, 24, 0.95)',
          }}
        >
          {/* Top Bar with action */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px 14px 16px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Monitor size={18} color="#38bdf8" />
              <span style={{ fontSize: '13.5px', fontWeight: '600', color: 'var(--text-primary)' }}>
                AquaTech Web Console — Trạm Ao Thực Nghiệm #03 (Bến Tre)
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              icon={Maximize2}
              onClick={() => setIsModalOpen(true)}
            >
              Xem Chi Tiết Màn Hình
            </Button>
          </div>

          {/* Screenshot SVG Container */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid var(--border-subtle)',
            }}
            onClick={() => setIsModalOpen(true)}
            title="Nhấp để phóng to toàn màn hình"
          >
            <img
              src={dashboardPreviewSvg}
              alt="AquaTech Dashboard Control Panel"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </Card>

        {/* Live Simulation Events Feed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {simulationEvents.map((evt, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--accent-sky)',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {evt.time}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {evt.text}
                </p>
                <TechBadge
                  color={
                    evt.status === 'success'
                      ? '#10b981'
                      : evt.status === 'warning'
                      ? '#f59e0b'
                      : '#38bdf8'
                  }
                  variant="outline"
                >
                  {evt.badge}
                </TechBadge>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal Lightbox */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bảng Điều Khiển Giám Sát Thời Gian Thực — AquaTech OS"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={dashboardPreviewSvg}
            alt="AquaTech Dashboard High Resolution"
            style={{
              width: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
            }}
          />
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Giao diện thu thập 4 thông số: pH, DO, Nhiệt độ nước, Chỉ số rủi ro AI cùng đồ thị dự báo 12h và nhật ký rơ-le kích hoạt thiết bị.
          </p>
        </div>
      </Modal>
    </Section>
  );
}
