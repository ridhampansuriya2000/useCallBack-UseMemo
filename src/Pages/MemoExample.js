import React from "react";
import NormalComponent from "../Components/NoramalComponent";
import MemoComponent from "../Components/MemoComponent";

const MemoExample = () => {

    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);
    const [value, setValue] = React.useState('');

    console.log("MemoExample")


    return (
        <div>
            <h2>Memo Example (Pure Component)</h2>
            <div>Counter 1 count is <b>{counter1}</b></div>
            <button onClick={() => setCounter1((count) => count + 1)}> Increment</button>
            <div>Counter 2 count is <b>{counter2}</b></div>
            <button onClick={() => setCounter2((count) => count + 1)}> Increment</button>
            <div>Value : <b>{value}</b></div>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>

            <NormalComponent
                value={value}
                counter2={counter2}
            />

            <MemoComponent
                value={value}
                counter2={counter2}
            />

            <h3>Note :</h3> Normally if parent component state or props update then child component also re-render but
            by using memo if any props or state is not update then that component not re render.
            => Ex : in our case we have two counters (counter 1 & counter 2) and two child components(normal component &
            memo/pure component) counter 2's value passed in both child component but counter 1 value not passed in any
            child component.
            if we increment counter 1 values then normal component re-render but memo(pure) component will not re-render.
        </div>
    )
}

export default MemoExample;