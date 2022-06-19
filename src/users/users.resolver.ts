// https://docs.nestjs.com/graphql/resolvers

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UserModel } from './models/user';
import { UsersService } from './users.service';


@Resolver(of => UserModel)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(returns => UserModel, {nullable: true})
    getUser(@Args() getUserArgs: GetUserArgs): UserModel {
        return this.userService.getUser(getUserArgs)
    }

    @Query(returns => [UserModel])
    getUsers(): UserModel[] {
        return this.userService.getUsers()
    }

    @Mutation(returns => UserModel)  // https://docs.nestjs.com/graphql/mutations
    createUser(@Args('createUserData') createUserData: CreateUserInput): UserModel {
        return this.userService.createUser(createUserData)
    }

}
