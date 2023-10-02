import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Author } from '../author/author.type';
import { Game } from '../game/game.type';

@ObjectType('Review')
export class Review {
  @Field((type) => ID)
  id: string;

  @Field((type) => Number)
  rating: number;

  @Field()
  content: string;

  @Field((type) => [Author])
  author: Author;

  @Field((type) => [Game])
  game: Game[];
}
