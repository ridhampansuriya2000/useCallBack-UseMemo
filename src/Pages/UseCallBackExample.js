import React from "react";
import NormalComponent from "../Components/NoramalComponent";
import MemoComponent from "../Components/MemoComponent";
import NormalMemoComponent from "../Components/UseCallBack/NormalMemoComponent";
import UseCallBackComponent from "../Components/UseCallBack/UseCallBackComponent";

const UseCallBackExample = () =>{

    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);
    const [value, setValue] = React.useState('');

    const valueHandler = (val) => {
        setValue(() => val);
    };

    const newValueHandler = React.useCallback((val)=>{
        setValue(()=>val);
    },[value]);

    console.log("MemoExample")


    return(
        <div>
            <div>Counter 1 count is <b>{counter1}</b></div>
            <button onClick={()=> setCounter1((count) => count + 1)}> Increment </button>
            {/*<div>Counter 2 count is <b>{counter2}</b></div>*/}
            {/*<button onClick={()=> setCounter2((count) => count + 1)}> Increment </button>*/}
            {/*<div>Value : <b>{value}</b></div>*/}
            {/*<input value={value} onChange={(e)=> setValue(e.target.value)}/>*/}



            <NormalMemoComponent
                value={value}
                counter2={counter2}
                valueHandler={valueHandler}
            />

            <UseCallBackComponent
                value={value}
                counter2={counter2}
                valueHandler={newValueHandler}
            />
        </div>
    )
}

export default UseCallBackExample;