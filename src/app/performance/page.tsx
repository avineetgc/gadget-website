import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { keyMetrics, quarterlyPerformance, riskMetrics } from "@/data/metrics";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Performance",
  description:
    "Gadget Capital Management fund performance data. Quarterly returns, risk metrics, and track record for our flagship digital asset strategy.",
};

export default function PerformancePage() {
  return (
    <>
      <PageHeader
        overline="TRACK RECORD"
        heading="Consistent, Risk-Adjusted Returns"
        lead="Performance data for Gadget Capital's flagship strategy. All returns presented net of fees."
      />

      {/* Key Metrics */}
      <section className="section section--dark" style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-12)" }}>
        <div className="container">
          <div className="grid grid--4">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <div className="metric-card__value">{metric.value}</div>
                <div className="metric-card__label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Table */}
      <section className="section">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            QUARTERLY PERFORMANCE
          </p>
          <h2 style={{ marginBottom: "var(--space-8)" }}>Net Returns by Quarter</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Net Return</th>
                  <th>Benchmark</th>
                  <th>Alpha</th>
                </tr>
              </thead>
              <tbody>
                {quarterlyPerformance.map((row) => (
                  <tr key={row.period}>
                    <td>{row.period}</td>
                    <td style={{ color: row.netReturn.startsWith("-") ? "var(--color-negative)" : "var(--color-positive)" }}>
                      {row.netReturn}
                    </td>
                    <td style={{ color: row.benchmark.startsWith("-") ? "var(--color-negative)" : "var(--color-text-muted)" }}>
                      {row.benchmark}
                    </td>
                    <td style={{ color: "var(--color-teal)", fontWeight: "var(--weight-semibold)" }}>
                      {row.alpha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-legal" style={{ marginTop: "var(--space-6)" }}>
            Past performance is not indicative of future results. Returns are
            presented net of all fees and expenses. Benchmark is a blended DeFi
            index shown for comparison purposes only and does not represent an
            investable product.
          </p>
        </div>
      </section>

      {/* Risk Metrics */}
      <section className="section section--muted">
        <div className="container">
          <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
            RISK METRICS
          </p>
          <h2 style={{ marginBottom: "var(--space-12)" }}>
            Risk-Adjusted Performance
          </h2>
          <div className="grid grid--3">
            {riskMetrics.map((metric) => (
              <div key={metric.label} className="card card--accent">
                <div
                  style={{
                    fontSize: "var(--text-3xl)",
                    fontWeight: "var(--weight-bold)",
                    color: "var(--color-teal)",
                    marginBottom: "var(--space-2)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {metric.value}
                </div>
                <h4 style={{ marginBottom: "var(--space-3)" }}>{metric.label}</h4>
                <p className="text-caption">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Disclaimers */}
      <section className="section" style={{ paddingTop: "var(--space-8)", paddingBottom: "var(--space-8)" }}>
        <div className="container container--narrow">
          <p className="text-legal">
            <strong>Important Disclosures:</strong> The performance data
            presented on this page is for informational purposes only and does
            not constitute an offer to sell or a solicitation of an offer to buy
            any security. Past performance is not indicative of future results.
            The fund&apos;s performance may have been different had the fund been
            in existence for the entire period shown. Investment in digital
            assets involves substantial risk, including the possible loss of
            principal. There is no guarantee that the fund&apos;s investment
            objectives will be achieved. Net returns are calculated after
            deducting all management fees, performance fees, and fund expenses.
            The benchmark is provided for reference purposes only and does not
            represent the performance of an investable product.
          </p>
        </div>
      </section>

      <CTASection
        heading="Request Detailed Performance Data"
        description="Comprehensive monthly returns, attribution analysis, and risk reporting are available to qualified prospective investors."
      />
    </>
  );
}
