// https://docs.nestjs.com/security/authentication#implementing-passport-strategies

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt' // https://www.npmjs.com/package/@nestjs/jwt
import { UserModel } from 'src/users/models/user';
import bcrypt from "bcrypt"; // https://github.com/kelektiv/node.bcrypt.js#readme

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    validateUser(email: string, hashedPass: string): UserModel | null {
        let user = this.userService.getUserByEmail(email)
        if (user && bcrypt.compare(hashedPass, user.hashedPass)) {
            const { hashedPass, ...result } = user
            return result
        } else {
            return null
        }
    }

}
