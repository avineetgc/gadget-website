import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export default function TeamPreview() {
  return (
    <section className="section section--muted">
      <div className="container">
        <p className="text-overline" style={{ marginBottom: "var(--space-4)" }}>
          LEADERSHIP
        </p>
        <h2 style={{ marginBottom: "var(--space-12)" }}>
          Experience Across Traditional and Decentralized Finance
        </h2>

        <div
          className="grid grid--2"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <Image
                src={member.headshot}
                alt={`${member.name}, ${member.title}`}
                width={200}
                height={200}
                className="team-card__image"
              />
              <div className="team-card__name">{member.name}</div>
              <div className="team-card__role">{member.title}</div>
              <p className="team-card__bio">{member.shortBio}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-10)", textAlign: "center" }}>
          <Link href="/team" className="btn btn--ghost">
            Meet the Team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
