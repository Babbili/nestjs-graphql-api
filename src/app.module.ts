import { Module } from '@nestjs/common';
// import Graphql Module https://docs.nestjs.com/graphql/quick-start
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // subscriptions: {
      //   'graphql-ws': true   // https://www.npmjs.com/package/graphql-ws
      // },
      // installSubscriptionHandlers: true, // https://docs.nestjs.com/graphql/subscriptions
      autoSchemaFile: true,  // code first approach https://docs.nestjs.com/graphql/quick-start#code-first
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
