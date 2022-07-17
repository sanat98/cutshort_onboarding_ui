import React, { useState } from 'react';
import Head from '../components/Head';
import '../stylesAll.css'
import { useStateContext } from '../context/ContextProvider'

export default function Screen1({ direction }) {
    const { setActivePageNumber, setDirection, } = useStateContext();
    const [name, setName] = useState("");

    const handleSubmit = () => {
        setActivePageNumber(1);
        setDirection('right');
        window.localStorage.setItem('fullName', name);
    }

    return (
        <div className={direction === "left" ? 'containerSlideLeft' : 'containerSlideRight'}>
            <div className='subContainerSlide'>
                <div className='subConatinerSlideTop'>
                    <div className='subConatinerSlideTopItem'>
                        <Head />
                    </div>
                    <div className='subConatinerSlideTopItem'>
                        <div className='circleDark'>1</div>
                        <div className='lineDark' />
                        <div className='lineLight' />
                        <div className='circleOutlined'>2</div>
                        <div className='lineLight' />

                        <div className='lineLight' />
                        <div className='circleOutlined'>3</div>
                        <div className='lineLight' />

                        <div className='lineLight' />
                        <div className='circleOutlined'>4</div>
                    </div>
                    <div className='subConatinerSlideTopItem'>
                        <div className='headContainer'>
                            <h3> Welcome! First things first... {direction}</h3>
                            <div className='headSubInfo'>You can always change them later.</div>
                        </div>
                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <form onSubmit={handleSubmit}>
                            <div className='inputsContainer'>
                                <div className='inputSubContainer'>
                                    <label for='name'>Full Name</label>
                                    <input
                                        id="name"
                                        placeholder='Steve Jobs'
                                        required
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}
                                        />
                                </div>
                                <div className='inputSubContainer'>
                                    <label for='email'>Display Name</label>
                                    <input id="email" placeholder='Steve' required></input>
                                </div>
                                <div className='inputSubContainer'>
                                    <button type='submit'>Create Workspace</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
