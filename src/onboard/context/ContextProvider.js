import React, { Children, createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({children})  =>{
    const [activePageNumber, setActivePageNumber] = useState(0);
    const [direction, setDirection] = useState('');

    const handleLeft = () => {
        setActivePageNumber(activePageNumber > 0 ? activePageNumber - 1 : activePageNumber);
        setDirection('left');
    }
    const handleRight = () => {
        setActivePageNumber(activePageNumber < 3 ? activePageNumber + 1 : activePageNumber);
        setDirection('right');
    }
  return (
    <StateContext.Provider value={{ activePageNumber, direction, setActivePageNumber, setDirection, handleLeft, handleRight}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);