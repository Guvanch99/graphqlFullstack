import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Review } from '../review/review.type';

@ObjectType('Author')
export class Author {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  verified: boolean;

  @Field((type) => [Review])
  reviews: Review[];
}
