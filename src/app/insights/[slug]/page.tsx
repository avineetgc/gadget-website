import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/data/insights";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section
        className="section section--dark"
        style={{ paddingTop: "calc(72px + var(--space-16))", paddingBottom: "var(--space-12)" }}
      >
        <div className="container container--narrow">
          <Link
            href="/insights"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "var(--text-sm)",
              marginBottom: "var(--space-6)",
              display: "inline-block",
            }}
          >
            &larr; Back to Insights
          </Link>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <span className="badge badge--teal">{insight.category}</span>
            <span style={{ fontSize: "var(--text-sm)", color: "rgba(255, 255, 255, 0.5)" }}>
              {new Date(insight.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 style={{ color: "var(--color-white)", marginBottom: "var(--space-4)" }}>
            {insight.title}
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "var(--text-sm)" }}>
            By {insight.author}
          </p>
          <div className="gradient-line gradient-line--short" style={{ marginTop: "var(--space-8)" }} />
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container container--narrow">
          {insight.content.map((paragraph, i) => (
            <p
              key={i}
              style={{
                marginBottom: "var(--space-6)",
                lineHeight: "var(--leading-relaxed)",
                fontSize: "var(--text-md)",
              }}
            >
              {paragraph}
            </p>
          ))}

          <hr className="divider" />

          <p className="text-legal">
            The views expressed in this article are those of the author and do
            not necessarily reflect the official position of Gadget Capital
            Management LLC. This content is for informational purposes only and
            does not constitute investment advice or an offer to buy or sell
            securities.
          </p>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link href="/insights" className="btn btn--secondary">
              &larr; All Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
