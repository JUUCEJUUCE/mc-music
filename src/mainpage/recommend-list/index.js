import React from 'react';
import './index.css'
const Relist =(props)=>{
    console.log(props.obj)
    return(
        <ul className="list">
            {props.obj.map((item,index)=>{
                if(index>5){
                    return
                }
                return(
                <li key={index}>
                    <div><img src={item.picUrl}/></div>
                    <p>{item.name}</p>
                </li>
                )
            })} 
        </ul>
    )
}
export default Relist
    