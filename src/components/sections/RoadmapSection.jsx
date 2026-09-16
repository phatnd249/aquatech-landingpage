import React from 'react';
import { CheckCircle2, Clock, Calendar, Flag, Award, Sparkles } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import TechBadge from '../ui/TechBadge';
import { timelineData } from '../../data/timeline';

export default function RoadmapSection() {
  const { sectionTag, title, subtitle, milestones } = timelineData;

  return (
    <Section
      id="roadmap"
      backdropReverse={false}
      backdropVariant="purple"
    >
      <Container>
        <SectionTitle
          tag={sectionTag}
          title={title}
          subtitle={subtitle}
          gradient="cyan"
        />

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '860px',
            margin: '0 auto',
            paddingLeft: '32px',
          }}
        >
          {/* Vertical Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(180deg, #10b981 0%, #00f2fe 65%, #a855f7 100%)',
              opacity: 0.6,
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {milestones.map((item, idx) => {
              const isCompleted = item.status === 'completed';
              const isActive = item.status === 'active';

              const statusColor = isActive ? '#00f2fe' : isCompleted ? '#10b981' : '#a855f7';

              return (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline Dot Node */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '-32px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-primary)',
                      border: `2px solid ${statusColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? `0 0 16px ${statusColor}` : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: statusColor,
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <Card
                    glow={isActive ? 'cyan' : 'none'}
                    padding="24px"
                    style={{
                      borderLeft: isActive ? `3px solid ${statusColor}` : '1px solid var(--border-default)',
                      backgroundColor: isActive ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.7)',
                    }}
                  >
                    {/* Header with period and status */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={14} color={statusColor} />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: statusColor,
                          }}
                        >
                          {item.period}
                        </span>
                      </div>

                      <TechBadge color={statusColor} variant={isActive ? 'glow' : 'outline'}>
                        {item.badge}
                      </TechBadge>
                    </div>

                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Achievements List */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {item.achievements.map((ach, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '12.5px',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <CheckCircle2 size={13} color={statusColor} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
