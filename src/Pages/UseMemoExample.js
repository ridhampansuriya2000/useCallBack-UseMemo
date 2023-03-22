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
        </div>
    )
}

export default memo(UseMemoExample);
