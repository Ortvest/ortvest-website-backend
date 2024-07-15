import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    },
  },
  toObject: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    },
  },
})
export class Order {
  @Prop()
  id?: string;

  @Prop({ required: true })
  clientEmail: string;

  @Prop({ required: true })
  clientName: string;

  @Prop({ required: true })
  selectedServices: string[];

  @Prop()
  productDescription?: string;

  @Prop()
  status?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
