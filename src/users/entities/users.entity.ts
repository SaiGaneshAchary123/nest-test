import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true }) userName: String;
  @Prop({ required: true }) age: Number;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
