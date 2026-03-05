import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`section section--gradient ${styles.hero}`}>
      <div className="container">
        <p className="text-overline" style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "var(--space-6)" }}>
          INSTITUTIONAL DIGITAL ASSET MANAGEMENT
        </p>
        <h1 className={`text-display ${styles.headline}`}>
          Systematic Alpha in<br />Decentralized Markets
        </h1>
        <p className={`text-lead ${styles.subheadline}`}>
          We identify structural inefficiencies across DeFi protocols and capture
          risk-adjusted returns through disciplined, research-driven strategies.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className="btn btn--inverse btn--lg">
            Request Information
          </Link>
          <Link href="/strategy" className="btn btn--inverse-outline btn--lg">
            Our Approach
          </Link>
        </div>
      </div>
    </section>
  );
}
