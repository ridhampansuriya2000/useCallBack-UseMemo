import React, {memo} from "react";
import './UseCallBackComponent.css'

const UseCallBackComponent = (props) =>{

    React.useEffect(()=>{
        console.log("UseCallBack Component Props", props);
    },[props]);

    return (
        <div className='UseCallBackComponent'>
            <h3> UseCallBack Component </h3>
            <div>Value : <b>{props.value}</b></div>
            <div><input value={props.value} onChange={(e)=> props.valueHandler(e.target.value)}/></div>
        </div>
    )
}

export default memo(UseCallBackComponent);