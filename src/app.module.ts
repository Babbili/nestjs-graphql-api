import { Module } from '@nestjs/common';
// import Graphql Module https://docs.nestjs.com/graphql/quick-start
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
