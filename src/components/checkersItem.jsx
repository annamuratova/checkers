import { useState } from "react"


const CheckersItem = ({item, active })=>{
    const [thisItem, setThisItem] = useState(item) 
    
    return (
        <div className={thisItem.type === 1 ? 'checkersItem' : 'checkersItem white'} style={active ? {backgroundColor:"red"} : {backgroundColor:""}}></div>
    )
}

export default CheckersItem