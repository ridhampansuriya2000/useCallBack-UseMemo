import React, {memo} from "react";
import './NormalMemoComponent.css'

const NormalMemoComponent = (props) =>{

    React.useEffect(()=>{
        console.log("Normal Memo Component Props", props);
    },[props]);

    return (
        <div className='NormalMemoComponent'>
            <h3> Normal Memo Component </h3>
            <div>Value : <b>{props.value}</b></div>
            <div><input value={props.value} onChange={(e)=> props.valueHandler(e.target.value)}/></div>
        </div>
    )
}

export default memo(NormalMemoComponent);
