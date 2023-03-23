import React, {memo} from "react";
import './NormalMemoComponent.css'

const expensiveCalculation = (num) => {
    console.log("Re calculation / Re-rendering... Normal Component only with Memo");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const NormalMemoComponent = (props) =>{

    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((c) => c + 1);
    };

     return (
        <div className='NormalMemoComponent'>
            <h3> Normal Component only with Memo</h3>
            <div>Value : <b>{value}</b></div>
            <div><input value={value} onChange={(e)=> setValue(e.target.value)}/></div>

            <hr/><hr/><hr/><hr/>

            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}

export default memo(NormalMemoComponent);
