import { useState } from "react";
import './Distribution.css'

const Distribution = (props) => {
    const req = ['Needs', 'Wants', 'Debt', 'Savings', 'Random'];
    const [isEditable, setIsEditable] = useState(false);
    const [err, setErr] = useState(false)
    const onEdit = () => {
        checkPercentages();
        if (!err) {   
            setIsEditable(!isEditable);
        }
        else {
            setIsEditable(true);
        }
    }
    const [dis, setDis] = useState([50, 25, 10, 10, 5]);
    const handleChange = (index, newValue) => {
        const updatedDis = [...dis];
        updatedDis[index] = newValue;
        setDis(updatedDis)
    }
    const checkPercentages = () => {
        const sum = dis.reduce((a, b) => a + b);
        setErr(sum !== 100);
    }
    return ( 
        <div>
            <button type="button" onClick={onEdit}>
                Edit %
            </button>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th/>
                    {req.map((item)=><th>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>%</th>
                        {(!isEditable ?
                            dis.map((item) =>
                                <td>
                                    <input
                                        style={{ width: '45px'}}
                                        placeholder={item}
                                        value={item}
                                        disabled
                            
                                        /></td>) :
                            dis.map((item, index) =>
                                <td key={index}>
                                    <input
                                        className={err ? 'err': ''}
                                        style={{width:'45px'}}
                                        placeholder={item}
                                        value={item}
                                        onChange={(e) => handleChange(index, Number(e.currentTarget.value))}
                                        />
                                </td>))}
                    </tr>
                    <tr>
                        <th>Amount</th>
                        {dis.map((item) => <td>${props.total * item / 100 }</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Distribution;