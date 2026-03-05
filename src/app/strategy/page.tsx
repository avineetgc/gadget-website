import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Strategy",
  description:
    "Our systematic, research-driven approach to yield optimization across decentralized finance protocols. Learn about our investment process and risk management framework.",
};

const processSteps = [
  {
    step: "01",
    title: "Universe Screening",
    description:
      "Systematic identification and filtering of DeFi protocols based on TVL, audit history, governance maturity, and economic model viability.",
  },
  {
    step: "02",
    title: "Deep Analysis",
    description:
      "Protocol-level due diligence including smart contract review, economic model stress testing, oracle dependency mapping, and governance assessment.",
  },
  {
    step: "03",
    title: "Position Construction",
    description:
      "Optimal sizing based on risk-adjusted yield, correlation analysis, and portfolio-level exposure limits. Entry timing informed by on-chain flow data.",
  },
  {
    step: "04",
    title: "Active Monitoring",
    description:
      "Real-time portfolio surveillance with automated alerts for utilization changes, governance proposals, smart contract upgrades, and risk threshold breaches.",
  },
];

const strategies = [
  {
    badge: "Core Strategy",
    badgeVariant: "badge--teal",
    title: "Yield Optimization",
    points: [
      "Diversified lending across top-tier protocols",
      "Liquidity provision with active rebalancing",
      "Structured products and basis strategies",
      "Target: consistent risk-adjusted yield above benchmark",
    ],
  },
  {
    badge: "Edge",
    badgeVariant: "badge--gold",
    title: "Quantitative Analysis",
    points: [
      "Proprietary protocol scoring framework",
      "On-chain data analytics pipeline",
      "Smart contract risk quantification",
      "Real-time yield surface modeling",
    ],
  },
  {
    badge: "Tactical",
    badgeVariant: "badge--navy",
    title: "Opportunistic Allocation",
    points: [
      "Market dislocation capture",
      "Protocol launch and migration events",
      "Governance-driven opportunities",
      "Cross-chain arbitrage strategies",
    ],
  },
];

const riskControls = [
  {
    title: "Position Limits",
    description:
      "Maximum allocation per protocol and per strategy, with aggregate exposure caps across correlated positions.",
  },
  {
    title: "Drawdown Controls",
    description:
      "Systematic de-risking at predefined portfolio and strategy-level thresholds. No discretionary overrides.",
  },
  {
    title: "Smart Contract Risk",
    description:
      "Multi-audit requirements, formal verification preferences, and protocol-level insurance coverage where available.",
  },
  {
    title: "Counterparty Risk",
    description:
      "Protocol diversification, no centralized exchange exposure, and multi-custodian infrastructure with segregated accounts.",
  },
];

export default function StrategyPage() {
  return (
    <>
      <PageHeader
        overline="INVESTMENT STRATEGY"
        heading="Research-Driven DeFi Alpha"
        lead="A systematic approach to identifying and capturing yield across decentralized finance protocols."
      />

      {/* Investment Process */}
      <section className="section">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            APPROACH
          </p>
          <h2 style={{ marginBottom: "var(--space-6)" }}>How We Invest</h2>
          <p className="text-lead" style={{ marginBottom: "var(--space-12)", maxWidth: "640px" }}>
            Our process translates deep protocol expertise into a repeatable
            investment framework. Each allocation moves through four stages of
            analysis before capital is deployed.
          </p>

          <div className="grid grid--2">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="card"
                style={{ display: "flex", gap: "var(--space-4)" }}
              >
                <div
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: "var(--weight-bold)",
                    color: "var(--color-teal)",
                    lineHeight: 1,
                    minWidth: "40px",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h4 style={{ marginBottom: "var(--space-2)" }}>{step.title}</h4>
                  <p className="text-caption">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="section section--muted">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            STRATEGY PILLARS
          </p>
          <h2 style={{ marginBottom: "var(--space-12)" }}>
            Three Integrated Approaches
          </h2>
          <div className="grid grid--3">
            {strategies.map((s) => (
              <div key={s.title} className="card card--accent">
                <span className={`badge ${s.badgeVariant}`} style={{ marginBottom: "var(--space-4)" }}>
                  {s.badge}
                </span>
                <h4 style={{ marginBottom: "var(--space-4)" }}>{s.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {s.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        paddingLeft: "var(--space-4)",
                        borderLeft: "2px solid var(--color-light-gray)",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="section section--dark">
        <div className="container">
          <p className="text-overline" style={{ color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>
            RISK MANAGEMENT
          </p>
          <h2 style={{ color: "var(--color-white)", marginBottom: "var(--space-4)" }}>
            Institutional Controls at Every Level
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "var(--space-12)", maxWidth: "640px" }}>
            Risk management is not a separate function — it is embedded in every
            stage of our investment process.
          </p>
          <div className="grid grid--2">
            {riskControls.map((control) => (
              <div key={control.title} className="card card--glass">
                <h4 style={{ color: "var(--color-white)", marginBottom: "var(--space-3)" }}>
                  {control.title}
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "var(--text-sm)" }}>
                  {control.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-legal" style={{ marginTop: "var(--space-8)", color: "rgba(255, 255, 255, 0.3)" }}>
            Risk management measures cannot guarantee against loss. Past risk
            management performance is not indicative of future risk management
            effectiveness.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
