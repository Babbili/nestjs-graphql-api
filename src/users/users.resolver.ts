// https://docs.nestjs.com/graphql/resolvers

import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { UserModel } from './models/user';
import { UsersService } from './users.service';


@Resolver(of => UserModel)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(returns => UserModel, {nullable: true})
    getUser(@Args() getUserArgs: GetUserArgs): UserModel {
        return this.userService.getUser()
    }

}
