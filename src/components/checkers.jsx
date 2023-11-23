import { useRef, useState } from 'react';
import '../assets/styles/checkers.css'
import CheckersCell from './cell';
import CheckersItem from './checkersItem';



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
   let left = 70;
   let top = 0;
    for(let i = 1; i <=24; i++){
        let item = {};
        if(i > 1 && i < 5){
            left += 140;  
        }
       if( i===5){
        left-=70;  
        top = 70;
       }
       if(i > 5 && i <=8){
        left-=140;
       }
       if(i>=9){
        top = 140;
        left +=70;
        if(i > 9 && i <= 12){
            left += 70;
        }
       }
        item.left = left; 
        item.top = top; 
        item.class = 'checkersItem';
        
        items.set(i, item);
    }
    console.log(items);
}
const Checkers = ()=>{
    let cols = [];
    let checkersItems = new Map();
    const divElemnent = useRef();
    

    const [active, setActive] = useState("0");
    function highLight(index){
        setActive(index);
    }
   
    addCols(cols);
   addItems(checkersItems); 
   
    return(
        <div>
            <h1>Shashka</h1>
            <div className="checkers" ref={divElemnent}>
            {
              cols.map((el)=>{
                     return < CheckersCell cell={el} />
                    })  
             }
              {
                 Array.from(checkersItems.keys()).map((key)=>{
                    console.log(key);
                     return <CheckersItem item={checkersItems.get(key)}/>
                 })    
             }
            </div>
        </div>
    )
}

export default Checkers