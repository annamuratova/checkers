import { useState } from "react"
import CheckersItem from "./checkersItem"


const CheckersCell = ({cell, onToogle, active})=>{
   
    return (
        <div className={cell.type === 1 ? 'checkersCol black': 'checkersCol'} onClick={onToogle}>
            {
            cell.item != undefined ? <CheckersItem item={cell.item} active={active}/> : ''
            }
        </div>
    )
}

export default CheckersCell