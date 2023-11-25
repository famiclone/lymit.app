import { ReactNode } from "react";

export type MonoAccount = {
  id: string;
  sendId: string;
  balance: number;
  creditLimit: number;
  type: string;
  currencyCode: number;
  cashbackType: "UAH";
  maskedPan: [string];
  iban: string;
}

export type MonoClientInfo = {
  clientId: string;
  name: string;
  webHookUrl: string;
  permissions: "psfj";
  accounts: MonoAccount[];
  jars:
  {
    id: string;
    sendId: string;
    title: string;
    description: string;
    currencyCode: number;
    balance: number;
    goal: number | null;
  }[]
}
export type AppState = {
  dayLimit: number;
  currentDate: Date;
  currency: string;
  nextPaymentDate: Date;
  personal: {
    name: string;
    card: MonoAccount;
  } | null;
}

export type RouteType = {
  path: string;
  name: string;
  component: ReactNode;
  id: number;
}
