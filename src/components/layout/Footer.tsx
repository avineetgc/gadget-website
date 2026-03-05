import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "var(--space-8)",
          }}
        >
          {/* Brand column */}
          <div>
            <Image
              src="/images/logos/logo_light.jpg"
              alt="Gadget Capital"
              width={40}
              height={40}
              className="footer__logo"
              style={{ borderRadius: "6px" }}
            />
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-normal)",
                maxWidth: "280px",
                marginTop: "var(--space-4)",
              }}
            >
              Institutional-grade digital asset management. Research-driven DeFi
              strategies with rigorous risk management.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="footer__heading">Navigate</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li><Link href="/about" className="footer__link">About</Link></li>
              <li><Link href="/strategy" className="footer__link">Strategy</Link></li>
              <li><Link href="/team" className="footer__link">Team</Link></li>
              <li><Link href="/performance" className="footer__link">Performance</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="footer__heading">Resources</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li><Link href="/insights" className="footer__link">Insights</Link></li>
              <li><Link href="/faq" className="footer__link">FAQ</Link></li>
              <li><Link href="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer__heading">Contact</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li>
                <a href="mailto:info@gadgetcapital.com" className="footer__link">
                  info@gadgetcapital.com
                </a>
              </li>
              <li>
                <a href="mailto:ir@gadgetcapital.com" className="footer__link">
                  ir@gadgetcapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="footer__legal">
          <p style={{ marginBottom: "var(--space-4)" }}>
            This website is for informational purposes only and does not
            constitute an offer to sell or a solicitation of an offer to buy any
            security or investment product. Any such offer or solicitation will
            be made only by means of a confidential private placement memorandum
            and only to qualified investors.
          </p>
          <p style={{ marginBottom: "var(--space-4)" }}>
            Past performance is not indicative of future results. Investments in
            digital assets involve substantial risk, including the possible loss
            of principal. There is no guarantee that the fund&apos;s investment
            objectives will be achieved.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Gadget Capital Management LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
