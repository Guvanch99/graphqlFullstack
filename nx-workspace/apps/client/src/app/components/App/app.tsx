// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {
  getAllGames,
  useGameAddMutation,
  useGameDeleteMutation,
  useGamesLazyQuery,
  useGameUpdateMutation
} from "../querries";
import {useEffect} from "react";
import client from "../../../utils/client";
import {UiReact2} from "@./ui-react2";

function useInvalidate(){
  useEffect(()=>{
   let timeout= setTimeout(
     ()=>client.refetchQueries({include:[getAllGames]}),
     4000)
    return ()=>clearTimeout(timeout)
  },[])
}

export function App() {
  const [gamesFetch,
    {loading, error, data, client}]=useGamesLazyQuery()
  useInvalidate()
  const [createGame]=useGameAddMutation()
  const [deleteGame]=useGameDeleteMutation()
  const [updateGame]=useGameUpdateMutation()
  const handleCreateGame=()=>{
    createGame({ variables: {
      id:12312,
      gameInput:{
        title:'Title',
        platform:['PlatForm1']
        }} })
  }

  const handleDeleteGame=()=>{
    deleteGame({variables:{
      id:1
    }})
  }
  const handleUpdateGame=()=>{
    updateGame({variables:{
        id:1,
        gameInput:{
          title:'d',
          platform:['1']
        }
      } })
  }
  return (
    <>
    <div>
      {
        data?.games.map(({id, title, review})=>(
          <div style={{display:'flex', gap:'10px'}}>
            <div>
              <p>{`Game :${title}`}</p>
              {
                review.map(({rating})=>(
                  <p>{`Review Rating :${rating}`}</p>
                ))
              }
            </div>
          </div>
        ))
      }
      <button onClick={()=>gamesFetch()}>Refetch</button>
      <button onClick={handleCreateGame}>Create</button>
      <button onClick={handleDeleteGame}>Delete</button>
      <button onClick={handleUpdateGame}>UpdateGame</button>
      <UiReact2/>
    </div>
    </>
  );
}

export default App;
