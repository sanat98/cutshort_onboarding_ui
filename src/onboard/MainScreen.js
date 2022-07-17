import React, { useState } from 'react';
import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import './stylesAll.css';
import {useStateContext} from '../onboard/context/ContextProvider'

export default function MainScreen() {
   
    const {direction,handleLeft,handleRight,activePageNumber} = useStateContext();

    const screens = [<Screen1 direction={direction} />, <Screen2 direction={direction} />, <Screen3 direction={direction} />, <Screen4 direction={direction} />] // , <Screen2/>, <Screen3/>, <Screen4/>


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
