import React from "react";
import './NoramlComponent.css';

const NormalComponent = (props) => {
    const [state, setState] = React.useState(0);
    React.useEffect(()=>{
        props.setRenderComponents((preState)=>[...preState,'Normal Component']);
    },[]);
    React.useEffect(()=>{
        console.log("Normal Component render ",props);
    },[props]);

    React.useEffect(()=>{
        console.log("Normal Component State", state);
    },[state])

    return (
        <div className='NormalContainer'>
            <h3> Normal Component </h3>
            {/*<div>Parent Counter 1 count is <b>{props.counter1}</b></div>*/}
            <div>Parent Counter 2 count is <b>{props.counter2}</b></div>
            <div>Count is <b>{state}</b></div>
            <div>
                <button onClick={() => setState((count) => count + 1)}> Increment</button>
            </div>
            <div>Value : <b>{props.value}</b></div>
        </div>
    )
}

export default NormalComponent;