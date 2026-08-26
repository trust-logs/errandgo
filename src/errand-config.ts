export type CountryConfig = {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  locale: string;
  languages: string[];
  paymentMethods: string[];
};

export const countryConfigs: CountryConfig[] = [
  { code: "NG", name: "Nigeria", currency: "NGN", symbol: "₦", locale: "en-NG", languages: ["English", "Igbo", "Yoruba", "Hausa"], paymentMethods: ["Card", "Bank transfer", "USSD", "Wallet"] },
  { code: "GH", name: "Ghana", currency: "GHS", symbol: "₵", locale: "en-GH", languages: ["English"], paymentMethods: ["Card", "Mobile Money", "Wallet"] },
  { code: "KE", name: "Kenya", currency: "KES", symbol: "KSh", locale: "en-KE", languages: ["English", "Swahili"], paymentMethods: ["Card", "M-Pesa", "Wallet"] },
  { code: "US", name: "United States", currency: "USD", symbol: "$", locale: "en-US", languages: ["English", "Spanish"], paymentMethods: ["Card", "ACH", "Wallet"] },
  { code: "GB", name: "United Kingdom", currency: "GBP", symbol: "£", locale: "en-GB", languages: ["English"], paymentMethods: ["Card", "Bank transfer", "Wallet"] },
  { code: "CA", name: "Canada", currency: "CAD", symbol: "C$", locale: "en-CA", languages: ["English", "French"], paymentMethods: ["Card", "Interac", "Wallet"] },
  { code: "AU", name: "Australia", currency: "AUD", symbol: "A$", locale: "en-AU", languages: ["English"], paymentMethods: ["Card", "Bank transfer", "Wallet"] },
  { code: "ZA", name: "South Africa", currency: "ZAR", symbol: "R", locale: "en-ZA", languages: ["English", "Zulu", "Xhosa", "Afrikaans"], paymentMethods: ["Card", "EFT", "Wallet"] },
  { code: "IN", name: "India", currency: "INR", symbol: "₹", locale: "en-IN", languages: ["English", "Hindi"], paymentMethods: ["Card", "UPI", "Wallet"] },
  { code: "AE", name: "United Arab Emirates", currency: "AED", symbol: "د.إ", locale: "en-AE", languages: ["English", "Arabic"], paymentMethods: ["Card", "Bank transfer", "Wallet"] },
];

export const errandCategories = [
  { id: "delivery", label: "Run an Errand", description: "Pick up, deliver, queue, shop or handle a task for someone." },
  { id: "cleaning", label: "House Chores", description: "Cleaning, laundry, cooking, organizing and household help." },
  { id: "office", label: "Office Chores", description: "Office cleaning, document runs, supplies and workplace tasks." },
  { id: "shopping", label: "Shopping", description: "Buy groceries, medicine, supplies or other permitted items." },
  { id: "moving", label: "Moving & Help", description: "Packing, lifting and local moving assistance." },
  { id: "other", label: "Other Tasks", description: "Post a custom lawful task and agree on the price." },
] as const;

export function getCountryConfig(code: string) {
  return countryConfigs.find((country) => country.code === code) ?? countryConfigs[0];
}
