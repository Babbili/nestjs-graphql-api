// https://docs.nestjs.com/graphql/resolvers#args-decorator-options
// https://docs.nestjs.com/techniques/validation

import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from 'class-validator' // https://github.com/typestack/class-validator#readme

@ArgsType()
export class GetUserArgs {
    @Field()
    @IsNotEmpty()
    userId: string;
}