import {TUpdateGame} from "@./types";

export type TGame={
    id: string,
    title: string,
    platform: string[]
    review:TReview[]
}

type TReview={
  id: string,
  rating: number,
  content: string,
 }

 export type TGameModifyParam={
   id:number
   gameInput:TUpdateGame
 }

