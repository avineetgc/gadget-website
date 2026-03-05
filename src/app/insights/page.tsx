import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market analysis, protocol research, and strategic commentary from the Gadget Capital Management research team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        overline="RESEARCH & INSIGHTS"
        heading="Market Perspectives"
        lead="Analysis and commentary from the Gadget Capital research team."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
                    <span className="badge badge--teal">{insight.category}</span>
                    <span className="text-caption">
                      {new Date(insight.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h4 style={{ marginBottom: "var(--space-3)", color: "var(--color-text-primary)" }}>
                    {insight.title}
                  </h4>
                  <p className="text-caption" style={{ flex: 1 }}>
                    {insight.excerpt}
                  </p>
                  <p
                    style={{
                      marginTop: "var(--space-4)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--weight-medium)",
                      color: "var(--color-teal)",
                    }}
                  >
                    Read More &rarr;
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
