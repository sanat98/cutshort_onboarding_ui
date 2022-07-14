import React from 'react'
import '../stylesAll.css'

export default function LeftButton(props) {
  return (
    <>
    <div className={'leftButtonContainer' }>
        <div className='circleLeft' onClick={props.onClick}>
        {'<'} 
        </div>
    </div>
    </>

  )
}
