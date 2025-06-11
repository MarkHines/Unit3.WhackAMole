import { useGame } from "./GameContext.jsx"


// 
const HighScore = () => {
  const {highScore} = useGame();
  //console.log(highScore)
  if(highScore === 0) {
    return <p>Not Yet... Play the game!</p>
  }
  else {
    return highScore
  }
}

export default HighScore