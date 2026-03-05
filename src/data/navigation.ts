export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Strategy", href: "/strategy" },
  { label: "Team", href: "/team" },
  { label: "Performance", href: "/performance" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
];
