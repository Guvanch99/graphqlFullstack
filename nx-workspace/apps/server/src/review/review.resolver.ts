import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Review } from './review.type';
import data from '../app/db/db';
import { Game } from '../game/game.type';
import { Author } from '../author/author.type';

@Resolver((of) => Review)
export class ReviewResolver {
  @Query((returns) => Review)
  review(): Review {
    return data.reviews[0];
  }
  @Query((returns) => [Review])
  reviews(): Review[] {
    return data.reviews;
  }

  @Query((returns) => Review)
  singleReview(@Args({ name: 'id', type: () => ID }) id: string) {
    return data.reviews.find((review) => review.id === id);
  }

  @ResolveField('game', (returns) => [Game], { nullable: true })
  game(@Parent() review: Review) {
    return data.games.filter((game) => game.id === review.id);
  }
  @ResolveField('author', (returns) => [Author], { nullable: true })
  author(@Parent() review: Review) {
    return data.authors.filter((author) => author.id === review.id);
  }
}
