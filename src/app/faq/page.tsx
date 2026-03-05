import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Gadget Capital Management, our fund structure, investment strategy, operations, and eligibility requirements.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        overline="FAQ"
        heading="Common Questions"
        lead="Information for prospective investors about our fund, approach, and terms."
      />

      <section className="section">
        <div className="container container--narrow">
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        heading="Have a Question We Haven't Answered?"
        description="Our investor relations team is happy to address any additional questions you may have."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Performance", href: "/performance" }}
      />
    </>
  );
}
