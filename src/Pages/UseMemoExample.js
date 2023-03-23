import React, {memo} from "react";
import UseMemoComponent from "../Components/UseMemo/UseMemoComponent";
import NormalMemoComponent from "../Components/UseMemo/NormalMemoComponent";

const UseMemoExample = () => {

    const [counter1, setCounter1] = React.useState(0);
    console.log("MemoExample")

    return (
        <div>
            <div>Counter 1 count is <b>{counter1}</b></div>
            <button onClick={() => setCounter1((count) => count + 1)}> Increment</button>

            <NormalMemoComponent/>

            <UseMemoComponent/>
            <div style={{padding: '0px 26px', textAlign: "left"}}>
                <h3>Note :</h3>
                In this parent component first time render to load component.This component have two children component. Both component have input tag and "increment" button.
                First component "NormalMemoComponent" in add value using input tag, that time load component, but second component "UseMemoComponent" does not load component,
                after their both component "increment" button click to load both component.

                <br/>
                => Ex :  The parent component initially loads because both of its children components require the "expensiveCalculation" function to complete their load
                tasks. When the first child component changes its input value, it triggers a re-render and all the functions inside the component with "expensiveCalculation"
                are reloaded, causing the component to load slowly as it sets the new value. On the other hand, when the second child component changes its input value,
                it triggers a re-render but doesn't cause any delay because it uses the "useMemo" function to optimize performance. The "useMemo" function ensures that
                the "expensiveCalculation" function is only called when there is a change in the inside value. Both child components have an "increment" button that
                increases the count value, which is used as a parameter in the "expensiveCalculation" function to recalculate the value. The component load time is not
                affected whether "useMemo" is used or not.
            </div>
        </div>
    )
}

export default memo(UseMemoExample);
