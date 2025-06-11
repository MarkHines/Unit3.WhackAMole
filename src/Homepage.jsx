import { useGame } from "./GameContext";
import HighScore from "./HighScores";
const Homepage = () => {
  const {togglePage} = useGame();
  return(
    <>
      
      <p>Welcome to Whack A Mole!</p>
      <p>Whack A Mole to earn points.</p>
      <p>How many can you get!</p>
      <button onClick={() => togglePage(`game`)}>Play</button>
      <h2>High Scores</h2>
      <HighScore />
    </>
  )
}

export default Homepage