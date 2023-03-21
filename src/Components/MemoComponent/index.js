import React, {memo} from "react";
import './MemoComponent.css'

const MemoComponent = (props) =>{
    const [state,setState] = React.useState(0);

    React.useEffect(()=>{
        console.log("Memo Component Props", props);
    },[props]);

    React.useEffect(()=>{
        console.log("Memo Component", state);
    },[state])


    return (
        <div className='MemoContainer'>
            <h3> Memo Component </h3>
            <div>Parent Counter 2 count is <b>{props.counter2}</b></div>
            <div>Count is <b>{state}</b></div>
            <div>
                <button onClick={()=> setState((count) => count + 1)}> Increment </button>
            </div>
            <div>Value : <b>{props.value}</b></div>
        </div>
    )
}

export default memo(MemoComponent);