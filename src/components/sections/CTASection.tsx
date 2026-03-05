import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({
  heading = "Ready to Learn More?",
  description = "We welcome conversations with accredited investors and institutions interested in digital asset allocation.",
  primaryCTA = { label: "Request Information", href: "/contact" },
  secondaryCTA = { label: "View Our Research", href: "/insights" },
}: CTASectionProps) {
  return (
    <section className="section section--dark">
      <div className="container" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
        <h2 style={{ color: "var(--color-white)", marginBottom: "var(--space-6)" }}>
          {heading}
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "var(--space-8)" }}>
          {description}
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={primaryCTA.href} className="btn btn--inverse">
            {primaryCTA.label}
          </Link>
          <Link href={secondaryCTA.href} className="btn btn--inverse-outline">
            {secondaryCTA.label}
          </Link>
        </div>
        <p
          className="text-legal"
          style={{ marginTop: "var(--space-8)", color: "rgba(255, 255, 255, 0.4)" }}
        >
          For accredited investors only. This website does not constitute an
          offer to sell or a solicitation of an offer to buy any security.
        </p>
      </div>
    </section>
  );
}
