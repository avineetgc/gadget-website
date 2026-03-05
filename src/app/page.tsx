import Link from "next/link";
import Hero from "@/components/sections/Hero";
import MetricsBar from "@/components/sections/MetricsBar";
import StrategyPreview from "@/components/sections/StrategyPreview";
import TeamPreview from "@/components/sections/TeamPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsBar />

      {/* About Preview */}
      <section className="section section--muted">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center" }}>
            <div>
              <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
                WHO WE ARE
              </p>
              <h2 style={{ marginBottom: "var(--space-6)" }}>
                Bridging Institutional Discipline and DeFi Innovation
              </h2>
              <p style={{ marginBottom: "var(--space-6)", maxWidth: "520px" }}>
                Gadget Capital Management was founded on a conviction: the
                structural inefficiencies in decentralized finance represent a
                generational alpha opportunity — but only for those who approach
                it with institutional rigor.
              </p>
              <Link href="/about" className="btn btn--ghost">
                About the Firm &rarr;
              </Link>
            </div>
            <div className="card card--accent" style={{ padding: "var(--space-8)" }}>
              <h4 style={{ marginBottom: "var(--space-6)" }}>Our Principles</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {[
                  "Systematic, not speculative",
                  "Risk management as competitive advantage",
                  "Deep protocol expertise",
                  "Transparent, frequent reporting",
                ].map((principle) => (
                  <li
                    key={principle}
                    style={{
                      paddingLeft: "var(--space-6)",
                      borderLeft: "2px solid var(--color-teal)",
                      color: "var(--color-text-secondary)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StrategyPreview />
      <TeamPreview />
      <CTASection />
    </>
  );
}
