import { useGame } from "./GameContext";
import GameBoard from "./GameBoard";

const DisplayGame = () => {
  const {togglePage, count} = useGame();
  return (
    <>
      <section>
        <button>Score: {count}</button>
        <button onClick={() => togglePage(`home`)}>Restart</button>
      </section>
      <GameBoard />
    </>
  )
}

export default DisplayGame