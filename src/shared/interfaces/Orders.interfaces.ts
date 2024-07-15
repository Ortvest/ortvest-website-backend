import { Types } from 'mongoose';

export interface Order {
  _id: Types.ObjectId;
  id: string;
  clientEmail: string;
  clientName: string;
  selectedServices?: string[];
  productDescription?: string;
  status: string;
}
