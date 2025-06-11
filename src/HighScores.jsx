import { useGame } from "./GameContext.jsx"


// 
const HighScore = () => {
  const {highScore} = useGame();
  //console.log(highScore)
  return highScore

}

export default HighScore