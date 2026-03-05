export interface Metric {
  value: string;
  label: string;
}

export const keyMetrics: Metric[] = [
  { value: "$47M", label: "Assets Under Management" },
  { value: "127%", label: "Cumulative Return (Net)" },
  { value: "2.4", label: "Sharpe Ratio" },
  { value: "Since 2023", label: "Track Record" },
];

export interface PerformanceRow {
  period: string;
  netReturn: string;
  benchmark: string;
  alpha: string;
}

export const quarterlyPerformance: PerformanceRow[] = [
  { period: "Q1 2023", netReturn: "+8.4%", benchmark: "+5.1%", alpha: "+3.3%" },
  { period: "Q2 2023", netReturn: "+12.7%", benchmark: "+9.2%", alpha: "+3.5%" },
  { period: "Q3 2023", netReturn: "-3.1%", benchmark: "-8.6%", alpha: "+5.5%" },
  { period: "Q4 2023", netReturn: "+18.9%", benchmark: "+14.3%", alpha: "+4.6%" },
  { period: "Q1 2024", netReturn: "+21.3%", benchmark: "+16.8%", alpha: "+4.5%" },
  { period: "Q2 2024", netReturn: "+9.8%", benchmark: "+6.4%", alpha: "+3.4%" },
  { period: "Q3 2024", netReturn: "-5.2%", benchmark: "-11.7%", alpha: "+6.5%" },
  { period: "Q4 2024", netReturn: "+15.6%", benchmark: "+12.1%", alpha: "+3.5%" },
  { period: "Q1 2025", netReturn: "+22.1%", benchmark: "+17.4%", alpha: "+4.7%" },
  { period: "Q2 2025", netReturn: "+11.4%", benchmark: "+8.9%", alpha: "+2.5%" },
  { period: "Q3 2025", netReturn: "+7.3%", benchmark: "+3.8%", alpha: "+3.5%" },
  { period: "Q4 2025", netReturn: "+14.8%", benchmark: "+10.6%", alpha: "+4.2%" },
];

export interface RiskMetric {
  label: string;
  value: string;
  description: string;
}

export const riskMetrics: RiskMetric[] = [
  {
    label: "Sharpe Ratio",
    value: "2.4",
    description:
      "Risk-adjusted return measure. A ratio above 2.0 indicates strong performance relative to volatility assumed.",
  },
  {
    label: "Sortino Ratio",
    value: "3.1",
    description:
      "Downside risk-adjusted return. Higher values indicate better returns per unit of downside deviation.",
  },
  {
    label: "Max Drawdown",
    value: "-18.3%",
    description:
      "Largest peak-to-trough decline experienced. Our systematic risk controls are designed to limit drawdowns.",
  },
];
