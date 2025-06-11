import { createContext, useState, useContext} from "react";

const GameContext = createContext();

export const GameProvider =({children}) => {

  const [currentPage, setCurrentPage] = useState(true);

  const randomNum = Math.floor(Math.random() * 9);

  const [currentLocation, setCurrentLocation] = useState(randomNum);

  const [count, setCount] = useState(0)
  
  const [highScore, setHighScore] = useState(0)

  const page = currentPage ? `home` : `game`;
  


  const togglePage = () => {
    if(highScore < count) {
      setHighScore(count)
    }
    setCurrentPage(!currentPage);
    setCount(0)
    //console.log(count);
    
  }
  
  const moveMole = () => {
    setCurrentLocation(randomNum);
    setCount(count + 1);
    
  }
  
  const doNothing =() => {}

  const value = {
    currentPage, togglePage, page, moveMole, count,
    currentLocation, setCurrentLocation, randomNum, doNothing,
    highScore, setHighScore
  }
  return <GameContext.Provider value={ value }>{ children }</GameContext.Provider>
}


export const useGame = () => {
  const context = useContext(GameContext);

  if(!context){
    throw Error (`useGame must be used witin a GameContext Provider`)
  }

  return context;
}