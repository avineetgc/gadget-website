"use client";

import { keyMetrics } from "@/data/metrics";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function MetricsBar() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="section section--dark" style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-12)" }}>
      <div
        className="container"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid--4">
          {keyMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`metric-card reveal ${isVisible ? `reveal--visible reveal--delay-${i + 1}` : ""}`}
            >
              <div className="metric-card__value">{metric.value}</div>
              <div className="metric-card__label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
