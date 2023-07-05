import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/users.entity';
import { Model } from 'mongoose';
@Injectable()
export class UsersServices {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(data: UserDTO) {
    try {
      const user = await this.userModel.create(data);
      return user;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }

  async getUsers() {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(id: string, data: any) {
    try {
      const user = await this.userModel.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!user) {
        return { message: 'User not found', status: HttpStatus.NOT_FOUND };
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(id: string) {
    console.log(id);
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        return { message: 'User not found', status: HttpStatus.NOT_FOUND };
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userModel.findByIdAndDelete(id);
      if (!user) {
        return { message: 'User not found', status: HttpStatus.NOT_FOUND };
      }
      return { message: 'User Deleted', user };
    } catch (error) {
      console.log(error);
    }
  }
}
