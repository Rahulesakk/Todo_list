import React from 'react'
import "./App.css"

function listitems(props) {
    return (
        <div className="todostyle">
            <i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}></i>
           <li key={props.index} id={props.id}>{props.items}</li>
        </div>
    )
}

export default listitems
