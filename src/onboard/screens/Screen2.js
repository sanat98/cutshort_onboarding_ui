import React from 'react';
import Head from '../components/Head';
import '../stylesAll.css'
import { useStateContext } from '../context/ContextProvider'

export default function Screen2({direction}) {
    const { setActivePageNumber, setDirection, } = useStateContext();
    const handleSubmit = () => {
        setActivePageNumber(2);
        setDirection('right');
    }

    return (
        <div className={direction === "left" ? 'containerSlideLeft' : 'containerSlideRight'}>
            <div className='subContainerSlide'>
                <div className='subConatinerSlideTop'>
                    <div className='subConatinerSlideTopItem'>
                        <Head/>
                    </div>
                    <div className='subConatinerSlideTopItem'>
                        <div className='circleDark'>1</div>
                        <div className='lineDark' />
                        <div className='lineDark' />
                        <div className='circleDark'>2</div>
                        <div className='lineDark' />

                        <div className='lineLight' />
                        <div className='circleOutlined'>3</div>
                        <div className='lineLight' />

                        <div className='lineLight' />
                        <div className='circleOutlined'>4</div>
                    </div>
                    <div className='subConatinerSlideTopItem'>
                        <div className='headContainer'>
                            <h3> Let's set up a home for all your work</h3>
                            <div className='headSubInfo'>You can always create another workspace later.</div>
                        </div>
                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <div className='inputsContainer'>
                            <form onSubmit={handleSubmit}>
                            <div className='inputSubContainer'>
                                <label for='name'>Workspace Name</label>
                                <input id="name" placeholder='Eden' required></input>
                            </div>
                            <div className='inputSubContainer'>
                                <label for='email'>Workspace URL <span>(optional)</span></label>
                                <input type='email' id="email" placeholder='www.example.com' required></input>
                            </div>
                            <div className='inputSubContainer'>
                                 <button type='submit' >Create Workspace</button>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
