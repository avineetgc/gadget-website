import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  overline: string;
  heading: string;
  lead?: string;
}

export default function PageHeader({ overline, heading, lead }: PageHeaderProps) {
  return (
    <section className={`section section--dark ${styles.header}`}>
      <div className="container">
        <p className="text-overline" style={{ color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>
          {overline}
        </p>
        <h1 style={{ color: "var(--color-white)", marginBottom: lead ? "var(--space-6)" : undefined }}>
          {heading}
        </h1>
        {lead && (
          <p className="text-lead" style={{ color: "rgba(255, 255, 255, 0.8)", maxWidth: "640px" }}>
            {lead}
          </p>
        )}
        <div className="gradient-line gradient-line--short" style={{ marginTop: "var(--space-8)" }} />
      </div>
    </section>
  );
}
