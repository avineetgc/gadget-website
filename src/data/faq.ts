export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    category: "Fund Structure",
    question: "What is the fund's legal structure?",
    answer:
      "Gadget Capital operates as a Delaware limited partnership with a Cayman Islands feeder fund for non-US investors. The fund is structured as a closed-end vehicle with quarterly liquidity windows.",
  },
  {
    category: "Fund Structure",
    question: "What is the minimum investment?",
    answer:
      "The minimum initial investment is $250,000 for individual accredited investors. We may consider lower minimums for institutional allocators on a case-by-case basis.",
  },
  {
    category: "Fund Structure",
    question: "What are the fund's fees?",
    answer:
      "The fund charges a 2% annual management fee and a 20% performance fee with a high-water mark. Management fees are calculated on net asset value and charged quarterly in advance.",
  },
  {
    category: "Investment Strategy",
    question: "What is your investment approach?",
    answer:
      "We employ a systematic, research-driven approach to yield optimization across decentralized finance protocols. Our strategies span lending, liquidity provision, and structured products, with rigorous protocol-level due diligence and continuous risk monitoring.",
  },
  {
    category: "Investment Strategy",
    question: "How do you manage risk?",
    answer:
      "Risk management is integrated at every level of our process. We maintain strict position limits per protocol and per strategy, automated drawdown controls, multi-audit requirements for smart contract exposure, and real-time portfolio monitoring. We also maintain insurance coverage where available.",
  },
  {
    category: "Investment Strategy",
    question: "What is your track record?",
    answer:
      "Since inception in 2023, the fund has generated a cumulative net return of 127% with a Sharpe ratio of 2.4. Detailed performance data, including monthly returns and risk metrics, is available to qualified prospective investors upon request.",
  },
  {
    category: "Operations",
    question: "How frequently do you report to investors?",
    answer:
      "Investors receive monthly performance reports, quarterly detailed portfolio reviews, and annual audited financial statements. We also provide real-time access to portfolio-level data through our investor portal.",
  },
  {
    category: "Operations",
    question: "Who are the fund's service providers?",
    answer:
      "The fund engages institutional-grade service providers including a Big Four auditor, a regulated fund administrator, and qualified custodians for digital asset safekeeping. Specific provider names are disclosed to qualified prospective investors.",
  },
  {
    category: "Operations",
    question: "What custody solution do you use?",
    answer:
      "We employ a multi-custodian approach using institutional-grade custody providers with SOC 2 Type II certification, multi-signature security, and segregated client accounts. Digital assets are never held on centralized exchanges.",
  },
  {
    category: "Eligibility",
    question: "Who can invest in the fund?",
    answer:
      "The fund is open to accredited investors as defined under Regulation D of the Securities Act of 1933, as well as qualified purchasers. This includes individuals with a net worth exceeding $1 million (excluding primary residence) or annual income exceeding $200,000.",
  },
  {
    category: "Eligibility",
    question: "How do I request more information?",
    answer:
      "You can submit an inquiry through our contact page or email ir@gadgetcapital.com. Our investor relations team typically responds within two business days. We welcome preliminary conversations with no commitment required.",
  },
];
