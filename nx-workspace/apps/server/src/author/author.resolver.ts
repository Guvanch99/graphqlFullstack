import {
  Query,
  Resolver,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Author } from './author.type';
import data from '../app/db/db';
import { Review } from '../review/review.type';
import { Game } from '../game/game.type';

@Resolver((of) => Author)
export class AuthorResolver {
  @Query((returns) => Author, { nullable: true })
  author(@Args({ name: 'id', type: () => ID }) id: string) {
    const author = data.authors.find((author) => author.id === id);
    if (!author) {
      return null;
    }
    return author;
  }
  @Query((returns) => [Author])
  authors() {
    return data.authors;
  }
  @ResolveField('reviews', (returns) => [Review])
  review(@Parent() author: Author) {
    return data.reviews.filter((review) => review.game_id === author.id);
  }
}
