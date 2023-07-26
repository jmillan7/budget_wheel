import { useState } from "react";
import { useLocalStorage } from '@uidotdev/usehooks';
import './BudgetPage.css';

const BudgetPage = () => {
    const [total, setTotal] = useLocalStorage('total', 0);
    const [incomes, setIncomes] = useLocalStorage('incomes', []);
    const [moneyFlow, setMoneyFlow] = useState(0);
    const [count, setCount] = useState(1);
    const onAddMoneyFlow = () => {
        setCount(count + 1);
        setTotal(Number(total) + Number(moneyFlow));
        setIncomes([...incomes, { income: 'Income '+count, value: moneyFlow }]);
    }
    const reset = () => {
        setTotal(0);
        setIncomes([]);
    }


    return ( 
        <div className="container">
            <span><button onClick={onAddMoneyFlow}>+</button></span>
            <span><input
                type="text"
                placeholder="money in"
                value={moneyFlow}
                onChange={(e)=> setMoneyFlow(e.currentTarget.value)}
            /></span>
            <span>
                
                <div>

                {incomes.map(item => <div>{item.income} &nbsp;--&nbsp; ${item.value }</div>)}
                </div>
                <hr/>
                TOTAL: &nbsp;
                {total}
            </span>
            <div>
            <button className="delete" type="reset" onClick={reset}>Delete Total</button>
            </div>
        </div>
     );
}
 
export default BudgetPage;