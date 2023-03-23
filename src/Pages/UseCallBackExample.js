import React, {memo} from "react";
import NormalMemoComponent from "../Components/UseCallBack/NormalMemoComponent";
import UseCallBackComponent from "../Components/UseCallBack/UseCallBackComponent";

const UseCallBackExample = () => {

    const [counter1, setCounter1] = React.useState(0);
    const [value, setValue] = React.useState('');

    const valueHandler = (val) => {
        setValue(() => val);
    };

    const newValueHandler = React.useCallback((val) => {
        setValue(() => val);
    }, [value]);

    console.log("MemoExample")


    return (
        <div>
            <div>Counter 1 count is <b>{counter1}</b></div>
            <button onClick={() => setCounter1((count) => count + 1)}> Increment</button>

            <NormalMemoComponent
                value={value}
                valueHandler={valueHandler}
            />

            <UseCallBackComponent
                value={value}
                valueHandler={newValueHandler}
            />

            <div style={{padding: '0px 26px', textAlign: "left"}}>
                <h3>Note :</h3>
                The parent component rendered its Increment button, triggering a change in state with the useState hook. However, when there are re-rendered two
                parallel child components , one child console logs its props within the useEffect hook, while the other child component doesn't render and no console
                log is shown.
                <br/>

                => Ex : This component has two child components - 'NormalMemoComponent' and 'UseCallBackComponent'. Both use the 'memo' hook to optimize
                rendering.The first child receives a string value and a normal function 'valueHandler', while the second child receives a string value
                and a 'newValueHandler' function that uses the 'useCallback' hook. These functions are invoked when the parent component calls them after
                pressing the "Increment" button to increase the 'counter1' value. When the component is re-rendered, the 'NormalMemoComponent' is also re-rendered since it doesn't use
                'useCallback'. On the other hand, the 'UseCallBackComponent' is only re-rendered when the value changes or the 'newValueHandler' function is called,
                since it uses 'useCallback' to optimize performance."
            </div>
        </div>
    )
}


export default UseCallBackExample;
