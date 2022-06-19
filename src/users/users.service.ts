import { Injectable } from '@nestjs/common';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UserModel } from './models/user';
import { v4 as uuidv4 } from 'uuid'; // https://www.npmjs.com/package/uuid

@Injectable()
export class UsersService {
    constructor(private UsersModel: UserModel[] ) {}

    getUser(getUserArgs: GetUserArgs): UserModel {
        return this.UsersModel.find(user => user.userId === getUserArgs.userId)
    }
    getUsers(): UserModel[] {
        return this.UsersModel
    }
    createUser(createUserData: CreateUserInput): UserModel {
        let user = {
            userId: uuidv4(), // generate randon userId using uuid package
            ...createUserData
        }
        this.UsersModel.push(user)
        return user
    }
    updateUser(): UserModel {
        return 
    }
    deleteUser(): UserModel {
        return 
    }
}
