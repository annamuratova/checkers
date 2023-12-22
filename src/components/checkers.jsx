import { useRef, useState } from 'react';
import '../assets/styles/checkers.css'
import CheckersCell from './cell';


function initItems(items){
    items.set("a1", {type:1, position:'a1'});
    items.set("c1", {type:1, position:'c1'});
    items.set("e1", {type:1, position:'e1'});
    items.set("g1", {type:1, position:'g1'});
    items.set("b2", {type:1, position:'b2'});
    items.set("d2", {type:1, position:'d2'});
    items.set("f2", {type:1, position:'f2'});
    items.set("h2", {type:1, position:'h2'});
    items.set("a3", {type:1, position:'a3'});
    items.set("c3", {type:1, position:'c3'});
    items.set("e3", {type:1, position:'e3'});
    items.set("g3", {type:1, position:'g3'});

    items.set("b6", {type:0, position:'b6'});
    items.set("d6", {type:0, position:'d6'});
    items.set("f6", {type:0, position:'f6'});
    items.set("h6", {type:0, position:'h6'});
    items.set("a7", {type:0, position:'a7'});
    items.set("c7", {type:0, position:'c7'});
    items.set("e7", {type:0, position:'e7'});
    items.set("g7", {type:0, position:'g7'});
    items.set("b8", {type:0, position:'b8'});
    items.set("d8", {type:0, position:'d8'});
    items.set("f8", {type:0, position:'f8'});
    items.set("h8", {type:0, position:'h8'});
}

function initCells(cells, items){   
    let x;
    for(let y=8; y > 0; y--){ 
        for(let i=97; i < 105; i++){
            x = String.fromCodePoint(i);
            let cell = {};
            if((i+y) % 2 !== 0){
             cell.type = 0;
            } else{
                // cell.class = 'checkersCol black';
                cell.type = 1;
            }
              
            cell.item = items.get(x+y);
           
            cells.set(x+y, cell);             
        }  
    }
}

const Checkers = ()=>{
    let cells = new Map();
    let items = new Map();
    
    const [selected, setSelected] = useState("");
     
    function select(index){
        
    setSelected(index)
         console.log(selected);
    
    }

  
   
    initItems(items);
    initCells(cells, items);
   
    return(
        <div>
            <h1>Shashka</h1>
            <div className="checkers">
            {
            Array.from(cells.keys()).map((key, index)=>{
                return <CheckersCell cell={cells.get(key)} key={index} onToogle={()=>select(index)} active={selected === index}/>
            })      
             }
            </div>
        </div>
    )
}

export default Checkers