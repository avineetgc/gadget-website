export interface Insight {
  slug: string;
  title: string;
  date: string;
  category: "Market Analysis" | "Protocol Research" | "Macro" | "Strategy";
  excerpt: string;
  content: string[];
  author: string;
}

export const insights: Insight[] = [
  {
    slug: "institutional-opportunity-defi-lending",
    title: "The Institutional Opportunity in DeFi Lending Protocols",
    date: "2025-12-15",
    category: "Protocol Research",
    excerpt:
      "As on-chain lending markets mature, a structural yield premium persists for participants with the analytical infrastructure to navigate protocol risk. We examine why this edge endures.",
    content: [
      "The decentralized lending market has grown to over $45 billion in total value locked, yet institutional participation remains in its early innings. This gap between infrastructure maturity and capital allocation represents one of the most compelling opportunities in digital asset markets.",
      "Traditional credit markets price risk through established rating agencies, decades of default data, and well-understood legal frameworks. DeFi lending protocols offer none of these conventional anchors — instead, risk is encoded in smart contracts, governed by token-holder votes, and priced by algorithms responding to real-time supply and demand.",
      "For managers equipped with the analytical infrastructure to evaluate these novel risk vectors, the result is a persistent yield premium above what efficient traditional markets offer. Our research suggests this premium is structural, not cyclical, driven by three factors: the complexity barrier to institutional entry, the absence of standardized risk frameworks, and the rapid pace of protocol innovation.",
      "We evaluate each lending protocol across four dimensions: smart contract security (audit history, formal verification, bug bounty scope), economic model sustainability (interest rate mechanisms, liquidation efficiency, oracle dependencies), governance maturity (voter participation, proposal history, emergency response capability), and historical performance (utilization rates, liquidation events, recovery rates).",
      "This systematic approach has allowed us to construct diversified lending portfolios that capture the yield premium while maintaining risk parameters consistent with institutional expectations. The key is not avoiding complexity — it is building the infrastructure to measure and manage it.",
    ],
    author: "Gadget Capital Research",
  },
  {
    slug: "risk-adjusted-yield-framework",
    title: "Risk-Adjusted Yield: A Framework for Protocol Evaluation",
    date: "2025-10-22",
    category: "Strategy",
    excerpt:
      "Raw APY figures tell an incomplete story. We outline our framework for evaluating protocol yields on a risk-adjusted basis, accounting for smart contract, economic, and governance risks.",
    content: [
      "In decentralized finance, yield is abundant but context is scarce. A protocol advertising 12% APY on stablecoin deposits tells you almost nothing about whether that yield compensates for the risks assumed. Our framework addresses this gap by translating DeFi-native risks into institutional risk language.",
      "We decompose protocol yield into three components: the base lending rate (comparable to a traditional money market rate), the liquidity premium (compensation for lockup periods and withdrawal constraints), and the risk premium (compensation for smart contract, oracle, and governance risks). Only the risk premium represents genuine alpha potential — the other components have close traditional finance analogues.",
      "Smart contract risk is assessed through a combination of quantitative and qualitative factors: the number and quality of independent audits, the presence of formal verification, the scope and history of bug bounty programs, the complexity of the codebase, and the track record of the development team. We assign each protocol a contract risk score from 1 to 5.",
      "Economic model risk evaluates the sustainability and resilience of the protocol's incentive design. We model stress scenarios including rapid utilization changes, oracle failures, and cascade liquidation events. Protocols with robust circuit breakers and well-tested liquidation mechanisms receive favorable risk assessments.",
      "The resulting risk-adjusted yield metric allows us to compare opportunities across protocols on a common basis, much as a Sharpe ratio enables comparison across traditional asset classes. This disciplined approach is essential for institutional capital deployment in DeFi.",
    ],
    author: "Sarah Powers",
  },
  {
    slug: "q4-2025-market-review",
    title: "Q4 2025 Market Review: Structural Trends in Decentralized Finance",
    date: "2026-01-08",
    category: "Market Analysis",
    excerpt:
      "The fourth quarter of 2025 reinforced several structural trends we have been positioned for. We review the quarter and share our outlook for the institutional DeFi landscape.",
    content: [
      "The fourth quarter of 2025 marked a continuation of the institutional maturation trend in decentralized finance. Total value locked across major DeFi protocols reached new highs, driven not by retail speculation but by a steady inflow of institutional capital seeking yield in a persistently low-rate environment.",
      "Three structural developments defined the quarter. First, the convergence of traditional financial infrastructure with DeFi rails accelerated, with several major banks launching tokenized deposit products built on public blockchain infrastructure. This is not a threat to DeFi-native strategies — it is validation of the underlying technology and an expansion of the addressable market.",
      "Second, the regulatory environment continued to clarify. The SEC's updated guidance on digital asset custody and the OCC's conditional approval of DeFi protocol interactions by regulated banks provided institutional allocators with the legal certainty many had been waiting for. We expect this regulatory clarity to accelerate capital flows in 2026.",
      "Third, the smart contract security ecosystem matured significantly. The proliferation of formal verification tools, real-time monitoring services, and institutional-grade insurance products has meaningfully reduced the operational risk of DeFi participation. Our portfolio experienced zero smart contract incidents during the quarter.",
      "Looking ahead, we believe the opportunity set in institutional DeFi is expanding, not contracting. The yield premium available to sophisticated managers remains robust, and the barriers to entry — analytical infrastructure, risk management capability, regulatory compliance — continue to favor experienced participants over new entrants.",
    ],
    author: "Alex Horn",
  },
  {
    slug: "defi-tradfi-convergence-2026",
    title: "The Convergence Thesis: What TradFi-DeFi Integration Means for Allocators",
    date: "2026-02-20",
    category: "Macro",
    excerpt:
      "The boundary between traditional and decentralized finance is dissolving. We explore what this convergence means for institutional portfolio construction and where the alpha opportunities lie.",
    content: [
      "For years, digital assets and traditional finance operated in parallel universes — different infrastructure, different participants, different regulatory frameworks. That era is ending. The convergence of TradFi and DeFi is not a future possibility — it is an accelerating present reality.",
      "Tokenization of real-world assets has moved from proof-of-concept to production deployment. US Treasury tokenization alone exceeds $5 billion, with major institutions including BlackRock and Franklin Templeton operating on-chain fund products. This creates new yield opportunities at the intersection of traditional credit and DeFi liquidity.",
      "For allocators, convergence reshapes the opportunity set in two ways. First, it expands the universe of assets accessible through DeFi infrastructure — tokenized bonds, equities, and real estate can now participate in DeFi lending and liquidity markets. Second, it brings institutional-grade compliance and custody solutions to what was previously a regulatory gray area.",
      "We see the greatest alpha potential in the transitional period — while markets are still adjusting to this new reality, pricing inefficiencies are abundant. Protocols that bridge TradFi and DeFi are particularly compelling, as they attract capital from both ecosystems while the market develops standardized valuation frameworks.",
      "Our positioning reflects this thesis. We are actively deploying into protocols that serve as infrastructure for TradFi-DeFi integration, while maintaining our core yield optimization strategies across established DeFi lending and liquidity protocols. The convergence thesis reinforces rather than replaces our existing investment framework.",
    ],
    author: "Gadget Capital Research",
  },
];
