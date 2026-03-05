import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Gadget Capital Management leadership team. Deep experience spanning institutional asset management and decentralized finance.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        overline="LEADERSHIP"
        heading="Bridging Two Worlds"
        lead="Our team combines deep experience in traditional institutional finance with early, hands-on involvement in decentralized protocols."
      />

      {/* Team Profiles */}
      <section className="section">
        <div className="container container--narrow">
          {teamMembers.map((member, i) => (
            <div key={member.id}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "var(--space-12)",
                  alignItems: "start",
                }}
              >
                {/* Photo & Title */}
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={member.headshot}
                    alt={`${member.name}, ${member.title}`}
                    width={240}
                    height={240}
                    style={{
                      borderRadius: "var(--radius-full)",
                      objectFit: "cover",
                      border: "3px solid var(--color-light-gray)",
                      marginBottom: "var(--space-4)",
                    }}
                  />
                  <h3 style={{ marginBottom: "var(--space-1)" }}>{member.name}</h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--weight-medium)",
                      color: "var(--color-teal)",
                      letterSpacing: "var(--tracking-wide)",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.title}
                  </p>
                </div>

                {/* Bio & Credentials */}
                <div>
                  {member.fullBio.map((paragraph, j) => (
                    <p
                      key={j}
                      style={{
                        marginBottom: "var(--space-4)",
                        lineHeight: "var(--leading-relaxed)",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
                    {member.credentials.map((cred) => (
                      <span key={cred.label} className={`badge badge--${cred.variant}`}>
                        {cred.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider between members */}
              {i < teamMembers.length - 1 && (
                <hr className="divider divider--gradient" style={{ margin: "var(--space-16) 0" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Interested in Joining Our Team?"
        description="We are always looking for exceptional talent at the intersection of traditional finance and decentralized protocols."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Our Research", href: "/insights" }}
      />
    </>
  );
}
