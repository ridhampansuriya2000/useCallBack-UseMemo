import React, {memo} from "react";
import './UseMemoComponent.css'

const expensiveCalculation = (num) => {
    console.log("Re calculation / Re-rendering...  With UseMemo");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const UseMemoComponent = () =>{

    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState([]);

    const calculation = React.useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <div className='UseMemoComponent'>
            <h3>With using UseMemo</h3>
            <div>Value : <b>{value}</b></div>
            <div><input  value={value} onChange={(e)=> setValue( e.target.value.replace(/[^0-9]/g, ''))}/></div>

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

export default memo(UseMemoComponent);
