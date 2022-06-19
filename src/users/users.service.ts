import { Injectable } from '@nestjs/common';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UserModel } from './models/user';
import { v4 as uuidv4 } from 'uuid'; // https://www.npmjs.com/package/uuid
import { UpdateUserInput } from './dto/input/update-user.input';

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

    updateUser(updateUserData: UpdateUserInput): UserModel {
        let user = this.UsersModel.find(user => user.userId === updateUserData.userId)
        Object.assign(user, updateUserData) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        return user
    }

    deleteUser(getUserArgs: GetUserArgs): UserModel {
        let user = this.UsersModel.find(user => user.userId === getUserArgs.userId)
        let indexOfUser = this.UsersModel.indexOf(user)
        this.UsersModel.splice(indexOfUser, 1) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        return user
    }
}
