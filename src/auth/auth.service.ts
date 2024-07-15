import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/shared/dto/user.dtos';
import { User } from 'src/shared/interfaces/user.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(candidate: User): Promise<{ access_token: string }> {
    const user = await this.usersService.signIn(candidate);

    const payload = {
      sub: user.email,
      fullName: user.fullName,
      email: user.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(user: CreateUserDto): Promise<boolean> {
    return await this.usersService.signUp(user);
  }
}
