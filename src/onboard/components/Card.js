import React, {useState} from 'react'
import '../stylesAll.css'
export default function Card(props) {
 const [selected, setSelected] = useState(true)
  return (
    <>
    <div className='cardContainer' onClick={()=> setSelected(!selected)}  style={ selected ? {border:'1px solid rgb(204, 201, 201)'} : {border: '1px solid indigo' }}>
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
