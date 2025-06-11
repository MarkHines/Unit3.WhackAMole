import Homepage from "./Homepage";
import DisplayGame from "./DisplayGame";
import { useGame } from "./GameContext";


const App = () => {
  const { page } = useGame()
  //console.log(page)
  return (
    <>
      <h1>Whack A Mole</h1>
      {page === `home` && <Homepage />}
      {page === `game` && <DisplayGame />}
      

    </>
  );
}



export default App
