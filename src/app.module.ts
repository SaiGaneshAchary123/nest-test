import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://saiganesh:admin@test.tsztmxf.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
