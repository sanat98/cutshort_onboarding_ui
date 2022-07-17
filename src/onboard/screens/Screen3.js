import React from 'react';
import Card from '../components/Card';
import Head from '../components/Head';
import '../stylesAll.css'
import { useStateContext } from '../context/ContextProvider'
export default function Screen3({direction}) {
    const { setActivePageNumber, setDirection, } = useStateContext();
    const handleSubmit = () => {
        setActivePageNumber(3);
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

                        <div className='lineDark' />
                        <div className='circleDark'>3</div>
                        <div className='lineDark' />

                        <div className='lineLight' />
                        <div className='circleOutlined'>4</div>
                    </div>
                    <div className='subConatinerSlideTopItem'>
                        <div className='headContainer'>
                            <div className='boldText'>How are you planning to use Eden?</div>
                            <div className='headSubInfo'>We'll streamline your setup experience accordingly.</div>
                        </div>
                    </div>

                    <div className='subConatinerSlideTopItem'>
                        <div className='inputsContainer'>
                        
                            <div className='cardsArea'>
                            <Card
                            src="https://firebasestorage.googleapis.com/v0/b/cue-kart.appspot.com/o/images-sample%2Fprofile%20single.JPG?alt=media&token=a550f365-11a2-4534-ac8a-ecfc5a52a388"
                            head="For myself"
                            body="Write better, think more clearly. Stay organised"
                            />
                            <Card
                            src="https://firebasestorage.googleapis.com/v0/b/cue-kart.appspot.com/o/images-sample%2Fprofile%20multi.JPG?alt=media&token=c29904bd-a86d-4bb7-b2ef-db7fb41ab915"
                            head="For my team"
                            body="Write better, think more clearly. Stay organised"
                            />
                            </div>
                            <div className='inputSubContainer'>
                                 <button onClick={handleSubmit}>Create Workspace</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
