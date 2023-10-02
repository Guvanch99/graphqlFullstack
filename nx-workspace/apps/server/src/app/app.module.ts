import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GameModule } from '../game/game.module';
import { AuthorModule } from '../author/author.module';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      // typePaths: ['./**/*.gql'],
      // definitions: {
      //   path: 'src/server/test.ts',
      //   outputAs: 'class',
      // },
      autoSchemaFile: 'src/server/graphql.gql',
      // sortSchema: true,
    }),
    AuthorModule,
    GameModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
