import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, AuthorResolver],
})
export class AuthorModule {}
