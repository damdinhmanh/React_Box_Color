import React, { useState } from 'react'
import "./BoxColor.css"

let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

function BoxColor() {
    const [count, setCount] = useState(5);

    const addMoreBoxFunct = () => {
        setCount(count + 5);
        addItemsToList();
        console.log(itemList);
    };

    const [itemList, setItem] = useState(colors);

    const addItemsToList = () => {
        const newItemList = [...colors];
        itemList.forEach(element => {
            newItemList.push(element);
        });

        setItem(newItemList);
    }

    const eachBoxClickHandler = (event) => {
        console.log("box clicked: " + event.target.id);
        let newItemList = itemList.filter((value, index, array) => {
            return index!= event.target.id;
        })

        console.log(newItemList);
    };

    let keyCnt = 0;

    return (
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={addMoreBoxFunct}>More boxes</button>
            <h4 id="score"> Total box:<span className="points">{count}</span></h4>
            <div className="boxes">
                {
                    itemList.map( (cl) => 
                    {
                        //console.log(cl);
                        const stylesObj = {
                            background: cl
                        };

                        return (<div key={keyCnt} id={keyCnt++} className='box' style={stylesObj} onClick={eachBoxClickHandler}></div>)
                    }
                    )
                }
                
            </div>
        </div>
    )
}

export default BoxColor