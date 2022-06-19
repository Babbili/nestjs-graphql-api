// https://docs.nestjs.com/graphql/mapped-types
// https://docs.nestjs.com/techniques/validation

import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsEmail } from 'class-validator' // https://github.com/typestack/class-validator#readme


@InputType()
export class CreateUserInput {

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field(type => Int)
    age?: number;
}
