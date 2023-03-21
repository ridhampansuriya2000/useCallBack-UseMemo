import React from "react";
import UseMemoComponent from "../Components/UseMemo/UseMemoComponent";
import NormalMemoComponent from "../Components/UseMemo/NormalMemoComponent";

const UseMemoExample = () =>{

    const [counter1, setCounter1] = React.useState(0);
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

            <NormalMemoComponent
                value={value}
                valueHandler={valueHandler}
            />

            <UseMemoComponent
                value={value}
                valueHandler={newValueHandler}
            />
        </div>
    )
}

export default UseMemoExample;