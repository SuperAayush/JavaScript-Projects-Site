import React,{useState} from 'react'
import "../Styling/Day1.css"

const Day1 = () => {

    const[add,setAdd]=useState(0);
    const numadd = () => 
    {
        setAdd(add+1);
    }

    const numsub = () => 
    {
        setAdd(add-1);
    }

    const numres = () => 
    {
        setAdd(0);
    }

    return (
        <div className="day-1">
            <div className="card">
             <span className="count">{add}</span>
                <div className="buttons">
                <button className="add" onClick={numadd}> Add &#8593;</button>       
                <button className="reset" onClick={numres}>Reset <i class="fa fa-refresh fa-spin" ></i></button>
                <button className="sub" onClick={numsub}>Sub &#8595;</button>
    </div>
        </div>
        </div>
    )
}

export default Day1
