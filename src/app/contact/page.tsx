import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request information about Gadget Capital Management. We welcome inquiries from accredited investors and institutional allocators.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline="GET IN TOUCH"
        heading="Request Information"
        lead="We welcome inquiries from accredited investors and institutional allocators interested in learning more about Gadget Capital."
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "var(--space-16)",
              alignItems: "start",
            }}
          >
            <ContactForm />

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <div className="card card--accent">
                <h4 style={{ marginBottom: "var(--space-3)" }}>
                  General Inquiries
                </h4>
                <a
                  href="mailto:info@gadgetcapital.com"
                  style={{ color: "var(--color-teal)", fontSize: "var(--text-sm)" }}
                >
                  info@gadgetcapital.com
                </a>
              </div>

              <div className="card card--accent">
                <h4 style={{ marginBottom: "var(--space-3)" }}>
                  Investor Relations
                </h4>
                <a
                  href="mailto:ir@gadgetcapital.com"
                  style={{ color: "var(--color-teal)", fontSize: "var(--text-sm)" }}
                >
                  ir@gadgetcapital.com
                </a>
              </div>

              <p className="text-legal">
                We typically respond within two business days. All information
                provided is kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
