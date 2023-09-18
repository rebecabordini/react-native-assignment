export type PaymentMethod = 'ideal' | 'creditcard' | null;

export interface Amount {
  currency: 'EUR' | 'USD';
  value: string;
}

export interface Payment {
  id: string;
  description: string;
  method: PaymentMethod;
  amount?: Amount;
}
