import { useState } from "react"


const CheckersItem = ({item, onToogle, isActive})=>{
    
    
    return (
        <div className={`${item.class} ${isActive ? 'active' : ''}`} onClick={onToogle} style={{left:item.left+ 'px', top: item.top+ 'px'}}></div>
    )
}

export default CheckersItem