// https://docs.nestjs.com/graphql/resolvers#object-types

import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
    @Field()
    userId: string;

    @Field()
    email: string;

    @Field(type => Int)
    age?: number;

    @Field()
    isSubscribed?: boolean;
}