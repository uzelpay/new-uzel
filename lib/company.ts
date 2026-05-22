export const COMPANY = {
  legalName: "UZEL TECHNOLOGIES LLC",
  dbaName: "UZEL SMARTPAY LIMITED",
  brandName: "UZEL SmartPay",
  address: {
    street: "1688 Meridian Avenue",
    city: "Miami Beach",
    state: "Florida",
    zip: "33139-2710",
  },
} as const;

export function formatCompanyAddress(): string[] {
  const { street, city, state, zip } = COMPANY.address;
  return [street, `${city}, ${state} ${zip}`];
}
