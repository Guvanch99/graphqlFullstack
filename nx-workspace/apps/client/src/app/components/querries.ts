import { gql, useLazyQuery, useMutation} from "@apollo/client";
import { TGame, TGameModifyParam} from "./types";

export const getAllGames=gql`
  query games {
    games {
      id
      title
      platform
      review {
        id
        rating
        content
      }
    }
  }

`

export function useGamesLazyQuery(){
  return useLazyQuery<{games:TGame[]}, Error>(getAllGames)
}


export const addGame=gql`
  mutation addGameMutation($gameInput:gameInput!){
    addGame(gameInput: $gameInput){
      id, platform
    }
  }
`

export function useGameAddMutation(){
  return useMutation<void, TGameModifyParam >(
    addGame,
    {
      refetchQueries:[getAllGames]
    }
  )
}


export const deleteGame=gql`
  mutation addGameMutation($id:Int!){
    deleteGame(id: $id){
      id
    }
  }
`

export function useGameDeleteMutation(){
  return useMutation<void, {id:number}>(
    deleteGame,
    {
      refetchQueries:[getAllGames]
    }
  )
}


export const updateGame=gql`
  mutation addGameMutation($id:Int!, $gameInput:gameInput!){
    updateGame(gameInput:$gameInput, id: $id){
      id
    }
  }
`

export function useGameUpdateMutation(){
  return useMutation<void, TGameModifyParam>(
    updateGame,
    {
      refetchQueries:[getAllGames]
    }
  )
}
