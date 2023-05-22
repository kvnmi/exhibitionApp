import { MaterialCommunityIcons } from "@expo/vector-icons";

export const transactionData: ITransactionData[] = [
  { title: "One Time Investment", tagline: "Processing", price: "20" },
  { title: "Withdrawal", tagline: "Processing", price: "-8.00" },
  { title: "Round-Up Investment", tagline: "Processing", price: "10.36" },
];

export interface ITransactionData {
  title: string;
  tagline: string;
  price: string;
}

export const knowledgeData: IKnowledgeData[] = [
  {
    icon: "hand-coin-outline",
    title: "What is Family Plus?",
  },
  {
    icon: "reload",
    title: "How do Round-Ups work?",
  },
  {
    icon: "cash",
    title: "What is FamilyPlus Savings?",
  },
  {
    icon: "wallet-outline",
    title: "How can I withdraw my money?",
  },
];

export interface IKnowledgeData {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
}

export const navData: INavData[] = [
  {
    icon: "cash",
    tagline: "FamilyPlus Savings",
  },
  {
    icon: "cash",
    tagline: "Invest in Stocks",
  },
  {
    icon: "contacts",
    tagline: "Early for kids",
  },
];

export interface INavData {
  tagline: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

export const portfolioData: IPortfolioData[] = [
  { item: "Portfolio", tagline: "Aggressive" },
  { item: "Round-Up Settings", tagline: "Automatic" },
  { item: "Recurring", tagline: "$20/Monthly" },
  { item: "Beneficiary", tagline: "1 Child" },
  { item: "One-time Investment", tagline: "" },
];

export const portfolioCardData = [
  { title: "Large Company Stocks(VOO)", progress: 0.55 },
  { title: "Medium Company Stocks (IJH)", progress: 0.1 },
  { title: "Small Company Stocks(IJR)", progress: 0.05 },
  { title: "International Company Stocks (IXUS) ", progress: 0.3 },
];

export interface IPortfolioData {
  item: string;
  tagline: string;
}
