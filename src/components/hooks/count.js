import { useState } from "react"

export const useCount=()=>{
   const [count,setCount]=useState(0);

    const increment=()=>{ 
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }

    const className=`title ${count > 0 ? 'positive': count!==0?'negative': ''}`
    return {
        count,
        increment,
        decrement,
        className
    }
}

