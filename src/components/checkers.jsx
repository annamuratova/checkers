import { useRef, useState } from 'react';
import '../assets/styles/checkers.css'



function addCols(cols){
    let color  = false;
    for(let i = 1; i <= 64; i++){
        let a = {};
           if(color === true){
            a.class = 'checkersCol black';
            } else{
                a.class = 'checkersCol';
            }
        if(i % 8 !== 0){
            color =!color;
        }   
       cols.push(a);
    }  
}

function addItems(items){
    let item = {};
   let left = 0;
    for(let i = 1; i <= 24; i++){
        left += 70;
        item.left = left; 
        item.class = 'checkersItem';
        items.push(item);
    }
    console.log(items);
}
const Checkers = ()=>{
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    let cols = [];
    let checkersItems = [];
    const elem = useRef();
    const [color, setColor] = useState(false);
  
    addCols(cols);
   addItems(checkersItems); 
   
    return(
        <div>
            <h1>Shashka</h1>
            <div className="checkers" ref={elem}>
            {
              cols.map((item)=>{
                     return <div className={item.class}></div>
                    })  
             }
              {
                 checkersItems.map((el)=>{
                     return <div className={el.class} style={{left:el.left+ 'px' }}></div>
                     })
             }
            </div>
        </div>
    )
}

export default Checkers