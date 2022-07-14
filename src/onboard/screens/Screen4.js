import React from 'react';
import Head from '../components/Head';
import '../stylesAll.css'

export default function Screen4({direction}) {
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

                        <div className='lineDark' />
                        <div className='circleDark'>3</div>
                        <div className='lineDark' />

                        <div className='lineDark' />
                        <div className='circleDark'>4</div>
                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <div className='circleCheck'>
                        &#10003;
                        </div>

                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <div className='headContainer'>
                            <div className='boldText'> Congratulations, Eden! </div>
                            <div className='headSubInfo'>You have completed onboarding, you can start using the Eden!</div>
                        </div>
                        
                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <div className='inputsContainer'>
                            
                            <div className='inputSubContainer'>
                                 <button>Create Workspace</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
