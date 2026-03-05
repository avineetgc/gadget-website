"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const strategies = [
  {
    badge: "Yield Optimization",
    title: "Multi-Strategy Yield",
    description:
      "Systematic deployment across lending protocols, liquidity provision, and structured products to capture sustainable yield.",
  },
  {
    badge: "Quantitative",
    title: "Research-Driven Selection",
    description:
      "Deep protocol-level analysis combining on-chain data, smart contract auditing, and quantitative modeling.",
  },
  {
    badge: "Risk Management",
    title: "Institutional Controls",
    description:
      "Position limits, drawdown controls, and real-time monitoring ensure disciplined capital preservation.",
  },
];

export default function StrategyPreview() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="section">
      <div className="container" ref={ref as React.RefObject<HTMLDivElement>}>
        <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
          INVESTMENT APPROACH
        </p>
        <h2 style={{ marginBottom: "var(--space-12)" }}>
          Three Pillars of Our Strategy
        </h2>

        <div className="grid grid--3">
          {strategies.map((s, i) => (
            <div
              key={s.title}
              className={`card card--accent reveal ${isVisible ? `reveal--visible reveal--delay-${i + 1}` : ""}`}
            >
              <span
                className="badge badge--teal"
                style={{ marginBottom: "var(--space-4)" }}
              >
                {s.badge}
              </span>
              <h4 style={{ marginBottom: "var(--space-3)" }}>{s.title}</h4>
              <p className="text-caption">{s.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-10)", textAlign: "center" }}>
          <Link href="/strategy" className="btn btn--secondary">
            Explore Our Strategy
          </Link>
        </div>
      </div>
    </section>
  );
}
