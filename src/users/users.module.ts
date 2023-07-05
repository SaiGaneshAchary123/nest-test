import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersServices } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersServices],
  exports: [UsersServices],
})
export class UsersModule {}
