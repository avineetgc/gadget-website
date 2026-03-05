import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gadget Capital Management brings institutional discipline to decentralized finance. Learn about our founding thesis, investment philosophy, and what sets us apart.",
};

const philosophyPillars = [
  {
    title: "Structural Edge",
    description:
      "We focus exclusively on inefficiencies with identifiable, persistent structural causes. We do not chase momentum or speculate on narratives.",
  },
  {
    title: "Repeatable Process",
    description:
      "Every allocation follows a systematic framework from thesis development to execution to ongoing monitoring. Consistency is our competitive advantage.",
  },
  {
    title: "Institutional Rigor",
    description:
      "Position sizing, drawdown limits, and portfolio-level risk monitoring operate continuously. We manage risk as actively as we seek return.",
  },
];

const differentiators = [
  {
    title: "DeFi-Native Expertise",
    description:
      "We are not a traditional fund dabbling in crypto. Our team has been building in and analyzing decentralized protocols since their earliest stages.",
  },
  {
    title: "Institutional Risk Framework",
    description:
      "Nor are we a crypto-native fund ignoring risk. Every strategy operates within institutional-grade position limits, drawdown controls, and compliance requirements.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly performance reports, quarterly detailed reviews, and annual audited financials. Real-time portfolio access through our investor portal.",
  },
  {
    title: "Aligned Incentives",
    description:
      "Significant general partner commitment ensures our interests are aligned with our investors. We invest alongside our limited partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        overline="ABOUT THE FIRM"
        heading="Built for the Institutional Frontier"
        lead="Gadget Capital Management was founded to bring institutional discipline to the most dynamic market opportunity of the decade."
      />

      {/* Firm Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "start", gap: "var(--space-16)" }}>
            <div>
              <h3 style={{ marginBottom: "var(--space-6)" }}>Our Founding Thesis</h3>
              <p style={{ marginBottom: "var(--space-6)" }}>
                Decentralized finance markets are structurally inefficient. The
                complexity of protocol evaluation, the pace of innovation, and the
                absence of standardized analytical frameworks create persistent
                alpha opportunities for managers with the right infrastructure.
              </p>
              <p style={{ marginBottom: "var(--space-8)" }}>
                Yet institutional capital has been slow to enter — held back by
                regulatory uncertainty, operational complexity, and a lack of
                trusted intermediaries who speak both languages. We built Gadget
                Capital to bridge that gap.
              </p>

              <h3 style={{ marginBottom: "var(--space-6)" }}>What We Believe</h3>
              <p>
                The convergence of traditional finance infrastructure and
                decentralized protocols creates asymmetric return profiles for
                disciplined, research-driven managers. The opportunity is not
                speculative — it is structural. And it rewards those who approach
                it with rigor, patience, and deep domain expertise.
              </p>
            </div>

            <div className="card card--accent" style={{ padding: "var(--space-8)" }}>
              <h4 style={{ marginBottom: "var(--space-6)" }}>By the Numbers</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                {[
                  { value: "$47M", label: "Assets Under Management" },
                  { value: "40+", label: "Protocols Analyzed" },
                  { value: "2", label: "Years of Track Record" },
                  { value: "0", label: "Smart Contract Incidents" },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--weight-bold)", color: "var(--color-teal)" }}>
                      {item.value}
                    </div>
                    <div className="text-caption">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section--muted">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            PHILOSOPHY
          </p>
          <h2 style={{ marginBottom: "var(--space-12)" }}>
            Conviction Through Research, Discipline Through Process
          </h2>
          <div className="grid grid--3">
            {philosophyPillars.map((pillar) => (
              <div key={pillar.title} className="card card--accent">
                <h4 style={{ marginBottom: "var(--space-4)" }}>{pillar.title}</h4>
                <p className="text-caption">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            COMPETITIVE ADVANTAGE
          </p>
          <h2 style={{ marginBottom: "var(--space-12)" }}>What Sets Us Apart</h2>
          <div className="grid grid--2">
            {differentiators.map((d) => (
              <div
                key={d.title}
                style={{
                  paddingLeft: "var(--space-6)",
                  borderLeft: "2px solid var(--color-teal)",
                  marginBottom: "var(--space-4)",
                }}
              >
                <h5 style={{ marginBottom: "var(--space-2)" }}>{d.title}</h5>
                <p className="text-caption">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
