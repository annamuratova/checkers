

const CheckersItem = ({item})=>{
    
    
    return (
        <div className={checkersItem} style={{left:item.left+ 'px', top: item.top+ 'px'}}></div>
    )
}

export default CheckersItem