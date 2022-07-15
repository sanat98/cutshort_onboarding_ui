import React, { useState } from 'react';
import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import './stylesAll.css'

export default function MainScreen() {
    const [activePageNumber, setActivePageNumber] = useState(0);
    const [direction, setDirection] = useState('');
    const screens = [<Screen1 direction={direction} />, <Screen2 direction={direction} />, <Screen3 direction={direction} />, <Screen4 direction={direction} />] // , <Screen2/>, <Screen3/>, <Screen4/>

    const handleLeft = () => {
        setActivePageNumber(activePageNumber > 0 ? activePageNumber - 1 : activePageNumber);
        setDirection('left');
    }
    const handleRight = () => {
        setActivePageNumber(activePageNumber < screens.length - 1 ? activePageNumber + 1 : activePageNumber);
        setDirection('right');
    }


    return (
        <>
            <div className='containerMain'>
                <div >
                    <LeftButton
                        onClick={handleLeft}
                    />

                    <RightButton
                        onClick={handleRight}
                    />

                    {
                        screens[activePageNumber]
                    }


                </div>
            </div>
        </>
    )
}
