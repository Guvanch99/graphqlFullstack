import {
  Query,
  Resolver,
  ResolveField,
  Parent,
  Args,
  ID,
  Mutation,
  Int,
} from '@nestjs/graphql';
import { Game, gameInput } from './game.type';
import data from '../app/db/db';
import { Review } from '../review/review.type';
import { TUpdateGame } from '@./types';

@Resolver((of) => Game)
export class GameResolver {
  @Query((returns) => Game, { nullable: true }) // Allow null in case the game is not found
  game(@Args('id', { type: () => ID }) id: string) {
    // Find the game by ID
    const game = data.games.find((game) => game.id === id);
    if (!game) {
      return null;
    }
    return game;
  }
  @Query((returns) => [Game])
  games() {
    return data.games;
  }
  @ResolveField('review', (returns) => [Review])
  review(@Parent() game: Game) {
    const { id } = game;
    return data.reviews.filter((review) => review.game_id === id);
  }

  @Mutation((returns) => [Game])
  deleteGame(@Args({ name: 'id', type: () => Int }) id: number) {
    return data.games.filter((game) => game.id !== id.toString());
  }

  @Mutation((returns) => [Game])
  addGame(@Args({ name: 'gameInput', type: () => gameInput }) gameData: any) {
    return [
      {
        ...gameData,
        id: Math.random().toString(),
      },
      ...data.games,
    ];
  }

  @Mutation((returns) => Game)
  updateGame(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'gameInput', type: () => gameInput }) gameData: TUpdateGame
  ) {
    const foundedGame = data.games.find((game) => game.id == id.toString());
    return {
      ...foundedGame,
      ...gameData,
    };
  }
}
