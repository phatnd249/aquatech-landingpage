import React, { useState } from 'react';
import { Maximize2, Layers, Cpu, Database, Server, Smartphone, ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import TechBadge from '../ui/TechBadge';
import Modal from '../ui/Modal';
import architectureSvg from '../../assets/architecture/system-architecture.svg';

export default function ArchitectureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: 'layer-1',
      title: 'Tầng 1: Thu Thập Cảm Biến & Edge IoT',
      tag: 'Tầng Hiện Trường',
      color: '#00f2fe',
      icon: Cpu,
      protocol: 'Modbus RTU / RS-485',
      summary:
        'Thu thập liên tục các chỉ số thủy văn (pH, DO, Nhiệt độ, EC) qua giao thức chống nhiễu Modbus RS-485. Edge Gateway xử lý phân loại sơ bộ và kích hoạt rơ-le điều khiển tại chỗ.',
      nodes: [
        'Đầu dò pH công nghiệp tự bù nhiệt',
        'Cảm biến quang học oxy hòa tan (DO)',
        'Vi điều khiển công nghiệp ESP32-S3',
        'Edge AI Hub (NVIDIA Jetson) chạy offline',
      ],
    },
    {
      id: 'layer-2',
      title: 'Tầng 2: Mạng Truyền Dẫn & AI Engine Cloud',
      tag: 'Tầng Dữ Liệu',
      color: '#a855f7',
      icon: Database,
      protocol: 'MQTT over TLS 1.3',
      summary:
        'Dữ liệu mã hóa đầu cuối được đẩy về hạ tầng EMQX MQTT Broker với khả năng chịu tải 100,000+ thông điệp/giây. Engine học máy chạy dự báo chuỗi thời gian liên tục.',
      nodes: [
        'EMQX Message Broker phân tán High-Availability',
        'TimescaleDB tối ưu lưu trữ chuỗi thời gian nén 90%',
        'PyTorch Deep Learning Engine dự báo nguy cơ trước 12h',
        'Redis In-memory Cache & Alert Queue',
      ],
    },
    {
      id: 'layer-3',
      title: 'Tầng 3: Backend Microservices & Điều Phối',
      tag: 'Tầng Dịch Vụ',
      color: '#10b981',
      icon: Server,
      protocol: 'gRPC & WSS',
      summary:
        'Cụm dịch vụ phân tán đóng gói trong container Docker/K3s đảm bảo hệ thống duy trì tính sẵn sàng 99.95%, tự động phân phối cảnh báo qua SMS, Zalo ZNS và điều khiển thiết bị từ xa.',
      nodes: [
        'Node.js Express Cluster & Python FastAPI',
        'Module cảnh báo khẩn cấp (SMS, Zalo, Telegram)',
        'Xác thực bảo mật JWT, OAuth2 & Phân quyền RBAC',
        'Hệ thống điều phối container K3s Edge-native',
      ],
    },
    {
      id: 'layer-4',
      title: 'Tầng 4: Ứng Dụng Khách & Thẩm Định VietFuture',
      tag: 'Tầng Trực Quan',
      color: '#38bdf8',
      icon: Smartphone,
      protocol: 'HTTPS / REST / WSS',
      summary:
        'Giao diện trực quan thời gian thực trên Web và Di động giúp người vận hành và Hội đồng Giám khảo theo dõi tức thời, tra cứu lịch sử và xuất tài liệu minh bạch chỉ với 1 click.',
      nodes: [
        'Single Page App React 18 & Vite Dashboard',
        'Ứng dụng di động React Native (iOS & Android)',
        'Cổng thẩm định hồ sơ VietFuture Portal',
        'Bộ công cụ kết xuất báo cáo chuẩn PDF/Excel',
      ],
    },
  ];

  return (
    <Section
      id="architecture"
      backdropReverse={false}
      backdropVariant="purple"
    >
      <Container>
        <SectionTitle
          tag="KIẾN TRÚC HỆ THỐNG TOÀN DIỆN"
          title="Kiến Trúc AIoT 4 Tầng Phân Tán Độc Lập"
          subtitle="Sơ đồ luồng dữ liệu thời gian thực từ cảm biến hiện trường, mạng truyền dẫn tốc độ cao, AI Engine đến tầng trình diễn đa nền tảng"
          gradient="cyan"
        />

        {/* Interactive Architecture SVG Canvas */}
        <Card
          glow="cyan"
          padding="16px"
          style={{
            marginBottom: '40px',
            backgroundColor: 'rgba(11, 19, 41, 0.85)',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px 16px 16px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} color="#38bdf8" />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                }}
              >
                Sơ Đồ Kiến Trúc Luồng Dữ Liệu Thời Gian Thực
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Maximize2}
              onClick={() => setIsModalOpen(true)}
            >
              Phóng To Toàn Màn Hình
            </Button>
          </div>

          {/* Diagram Container */}
          <div
            style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid var(--border-subtle)',
              background: '#070c18',
            }}
            onClick={() => setIsModalOpen(true)}
            title="Nhấp để phóng to sơ đồ kiến trúc"
          >
            <img
              src={architectureSvg}
              alt="Sơ đồ kiến trúc hệ thống AquaTech AIoT"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              marginTop: '10px',
              textAlign: 'center',
              fontSize: '12px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Nhấp chuột vào sơ đồ hoặc nút [Phóng To] để xem chi tiết độ phân giải cao
          </div>
        </Card>

        {/* 4 Layer Deep-dive Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <Card
                key={layer.id}
                glow="none"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: `3px solid ${layer.color}`,
                  background: 'rgba(15, 23, 42, 0.75)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <TechBadge color={layer.color} variant="outline">
                    {layer.tag}
                  </TechBadge>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {layer.protocol}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: `${layer.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} color={layer.color} />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {layer.title}
                  </h4>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '16px',
                    flex: 1,
                  }}
                >
                  {layer.summary}
                </p>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {layer.nodes.map((node, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: layer.color }} />
                      <span>{node}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>

      {/* Full Resolution Modal Lightbox */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sơ Đồ Kiến Trúc Hệ Thống Toàn Diện — AquaTech AIoT"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={architectureSvg}
            alt="AquaTech Architecture Full Resolution"
            style={{
              width: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}
          />
          <p
            style={{
              marginTop: '16px',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              textAlign: 'center',
            }}
          >
            Đặc tả 4 phân lớp: Cảm biến &amp; Edge AI $\rightarrow$ Hạ tầng Ingestion &amp; Time-series $\rightarrow$ Microservices Container $\rightarrow$ Đa nền tảng Giám sát VietFuture.
          </p>
        </div>
      </Modal>
    </Section>
  );
}
