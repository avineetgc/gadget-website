"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks } from "@/data/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const { scrollDirection, scrollY } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  return (
    <nav
      className={`nav ${isHome && !isScrolled ? "nav--dark" : ""} ${isHidden ? styles.hidden : ""}`}
      style={
        isHome && !isScrolled
          ? { backgroundColor: "transparent", backdropFilter: "none", WebkitBackdropFilter: "none", borderBottom: "none" }
          : undefined
      }
    >
      <div className="nav__inner">
        <Link href="/" aria-label="Gadget Capital Management — Home">
          <Image
            src={isHome && !isScrolled ? "/images/logos/logo_light.jpg" : "/images/logos/logo_dark.jpg"}
            alt="Gadget Capital"
            width={40}
            height={40}
            className="nav__logo"
            style={{ borderRadius: "6px" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className={`nav__links ${styles.desktopLinks}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav__link ${pathname.startsWith(link.href) ? "nav__link--active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn--primary btn--sm">
              Request Information
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ""}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ""}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerOpen : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link ${pathname.startsWith(link.href) ? "nav__link--active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn btn--primary"
                onClick={() => setMobileOpen(false)}
                style={{ width: "100%", marginTop: "var(--space-4)" }}
              >
                Request Information
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
