import React from "react";
import NormalComponent from "../Components/NoramalComponent";
import MemoComponent from "../Components/MemoComponent";

const MemoExample = () =>{

    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);
    const [value, setValue] = React.useState('');
    const [renderComponents, setRenderComponents] = React.useState([]);

    console.log("MemoExample")


    return(
        <div>
            <div>Counter 1 count is <b>{counter1}</b></div>
            <button onClick={()=> setCounter1((count) => count + 1)}> Increment </button>
            <div>Counter 2 count is <b>{counter2}</b></div>
            <button onClick={()=> setCounter2((count) => count + 1)}> Increment </button>
            <div>Value : <b>{value}</b></div>
            <input value={value} onChange={(e)=> setValue(e.target.value)}/>

            <NormalComponent
                value={value}
                // counter1={counter1}
                counter2={counter2}
                setRenderComponents={setRenderComponents}
            />

            <MemoComponent
                value={value}
                counter2={counter2}
                setRenderComponents={setRenderComponents}
            />
        </div>
    )
}

export default MemoExample;