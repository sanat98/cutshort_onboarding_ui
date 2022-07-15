import React from 'react'
import '../stylesAll.css'
export default function Card(props) {
  return (
    <>
    <div className='cardContainer'>
        <div className='cardImage'>
            <img
            src={props.src}
            width='20px'
            height='20px'
            />
        </div>

        <div className='cardHead'>
            {props.head}
        </div>
        
        <div className='cardBody'>
            {props.body}
        </div>

    </div>
    </>
  )
}
