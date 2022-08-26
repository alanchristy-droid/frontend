import React  from 'react'
import "./nav.css"

export default function Header(props){
    return(
            <li id={props.id} > <a href={props.url}>{props.name}</a></li>
    )
}