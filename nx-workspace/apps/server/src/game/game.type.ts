import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { Review } from '../review/review.type';

@ObjectType('Game')
export class Game {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field((type) => [String])
  platform: string[];

  @Field((type) => [Review], { nullable: false })
  review: Review[];
}
@InputType()
export class gameInput {
  @Field((type) => String)
  title: string;

  @Field((type) => [String])
  platform: string[];
}
