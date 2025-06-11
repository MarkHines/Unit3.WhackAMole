import {useGame} from "./GameContext"
import nullArray from "./data"

const GameBoard = () => {
  
  const { moveMole, currentLocation, doNothing } = useGame()
  
  return (
    <>
      <section className="game-board">
        {/* {console.log(currentLocation)} */}
        {
          nullArray.map((element, index) => {
              return <button className={`hole ${currentLocation === index ? "mole" : ""}`}
              onClick={currentLocation === index ? moveMole : doNothing}></button>
            })
        }
      </section>
    </>
  )
}

export default GameBoard


