import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../shared/dto/user.dtos';
import { User } from '../shared/interfaces/user.interfaces';
import { User as UserSchema } from '../shared/schemas/user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserSchema.name) private userModel: Model<UserSchema>,
  ) {}
  async signUp(user: CreateUserDto): Promise<boolean> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await this.userModel.create({
      ...user,
      password: hashedPassword,
    });
    return Boolean(createdUser);
  }

  async signIn(user: User): Promise<User | undefined> {
    const candidate = await this.userModel
      .findOne({ email: user.email })
      .exec();

    const isMatch = await bcrypt.compare(user.password, candidate.password);

    if (isMatch) {
      return candidate;
    }
  }
}
