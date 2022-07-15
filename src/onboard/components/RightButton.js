import React from 'react'
import '../stylesAll.css'
export default function RightButton(props) {
  return (
    <>
    <div className={'rightButtonContainer'} >
        <div className='circleRight' onClick={props.onClick}>
        <img src="https://firebasestorage.googleapis.com/v0/b/cue-kart.appspot.com/o/images-sample%2Fsvg2left.svg?alt=media&token=6382da92-0c31-4f17-a6c9-abc705cb1d82"
         width='12'
         >
        </img>
        </div>
    </div>
    </>

  )
}
