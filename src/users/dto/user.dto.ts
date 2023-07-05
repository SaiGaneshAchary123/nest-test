import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDTO {
  @IsString() @IsNotEmpty() userName: string;
  @IsNumber() @IsNotEmpty() age: string;
}
