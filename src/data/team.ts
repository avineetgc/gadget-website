export interface TeamMember {
  id: string;
  name: string;
  title: string;
  headshot: string;
  headshotFull: string;
  shortBio: string;
  fullBio: string[];
  credentials: Array<{
    label: string;
    variant: "teal" | "gold" | "navy";
  }>;
}

export const teamMembers: TeamMember[] = [
  {
    id: "horn",
    name: "Alex Horn",
    title: "Managing Partner",
    headshot: "/images/headshots/Horn-crop.png",
    headshotFull: "/images/headshots/Horn.jpg",
    shortBio:
      "Former portfolio manager with deep expertise in DeFi protocol analysis and quantitative strategies.",
    fullBio: [
      "Alex Horn brings over a decade of experience spanning institutional asset management and decentralized finance. Before founding Gadget Capital, Alex managed a quantitative strategies portfolio at a multi-billion dollar hedge fund, where he developed systematic approaches to capturing alpha in emerging market structures.",
      "His early involvement in DeFi — beginning with protocol-level research in 2019 — provides Gadget Capital with a rare combination of institutional risk discipline and deep on-chain analytical capability. Alex leads the firm's investment process and portfolio construction.",
      "Alex holds a Master's in Financial Engineering from Columbia University and is a CFA Charterholder.",
    ],
    credentials: [
      { label: "CFA Charterholder", variant: "gold" },
      { label: "Columbia University", variant: "navy" },
      { label: "DeFi Since 2019", variant: "teal" },
    ],
  },
  {
    id: "powers",
    name: "Sarah Powers",
    title: "Chief Investment Officer",
    headshot: "/images/headshots/Powers-crop.png",
    headshotFull: "/images/headshots/Powers.jpg",
    shortBio:
      "Background spanning traditional finance and early-stage crypto investments across multiple market cycles.",
    fullBio: [
      "Sarah Powers has spent her career at the intersection of technology and capital markets. Prior to joining Gadget Capital, she held senior roles in digital asset research at a leading investment bank, covering DeFi protocols, Layer 1 ecosystems, and tokenized financial instruments.",
      "Sarah's analytical framework bridges traditional fundamental analysis with on-chain data science, enabling Gadget Capital to evaluate protocols with the same rigor applied to public equities. She oversees the firm's research pipeline and risk management infrastructure.",
      "Sarah holds an MBA from Wharton and a B.S. in Computer Science from MIT. She is a frequent contributor to institutional digital asset research publications.",
    ],
    credentials: [
      { label: "Wharton MBA", variant: "gold" },
      { label: "MIT CS", variant: "navy" },
      { label: "On-Chain Analytics", variant: "teal" },
    ],
  },
];
