import React from 'react'
import '../stylesAll.css'
export default function RightButton(props) {
  return (
    <>
    <div className={'rightButtonContainer'} >
        <div className='circleRight' onClick={props.onClick}>
        {'>'}
        </div>
    </div>
    </>

  )
}
