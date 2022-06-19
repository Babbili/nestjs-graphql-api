import { Injectable } from '@nestjs/common';
import { UserModel } from './models/user';

@Injectable()
export class UsersService {
    constructor(private UsersModel: UserModel[] ) {}

    createUser(): UserModel {
        return 
    }
    updateUser(): UserModel {
        return 
    }
    getUser(): UserModel {
        return 
    }
    getUsers(): UserModel[] {
        return 
    }
    deleteUser(): UserModel {
        return 
    }
}
