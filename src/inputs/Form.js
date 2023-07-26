import { useState } from "react";
import './Form.css'
import { useLocalStorage } from '@uidotdev/usehooks';
import { PieChart } from "react-minimal-pie-chart";
import uniqolor from "uniqolor";
import { useAnimation, motion } from "framer-motion";



const Form = () => {
    const [expense, setExpense] = useState("");
    const [list, setList] = useLocalStorage({});
    const [spun, setSpun] = useState(false);
    const onAdd = () => {
        setList([...list, {
            text: expense,
            complete: false,
            color: uniqolor.random().color,
            value: 1
        },
        ]);
        setExpense("");
    }
    const controls = useAnimation();
    function randomRotate(spun) {
        let x = 0;
        if (spun) {
            x = Math.floor(Math.random() * 360);
        }
        else {
            x = Math.floor(Math.random() * 360) + 1800;
        }
        return x;
    }
    const handleTap = async () => {
        let rotate = 0;
        rotate = randomRotate(spun);
        setSpun(!spun)
        await controls.start({
            rotate: -rotate,
            transition: {
                duration: Math.floor(Math.random() * 1) + 4
            },
            })
        }
    return ( 
        <div className="container">
            <div className="button-container">
                <input
                    className="w-96"
                    type="text"
                    value={expense}
                    onChange={(e) => 
                        setExpense(e.currentTarget.value)}
                />
                <div>
                    
                <button type="primary" onClick={onAdd}> Add </button>
                <button type="reset" onClick={(e) =>
                    setList([])}> Delete List</button>
                <button type="reset" onClick={handleTap}>Spin</button>
                </div>
            </div>
            <motion.div animate={controls}>
                <PieChart
                className="pie"
                data={list}
                label={({ dataEntry }) => dataEntry.text}
                labelStyle={{ fontSize: '3px' }}
                radius={20}
                viewBoxSize={[100,100]}
                />
            </motion.div>
            <div className="arrow"></div>

        </div>

     );
}
 
export default Form;
