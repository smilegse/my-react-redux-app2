import { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment,setValue } from "../../redux/state/counter/counterSlice";

const Counter =  () => {

    const myNumber = useRef(0);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const handleSet = () => {
        dispatch(setValue(parseInt(myNumber.current.value)));
    };

    const handleIncrement = () => {
        dispatch(increment()); 
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div className="card">
            <div className="card-header bg-primary text-center">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body text-center">
                <h2>{count}</h2>
                <div className="my-4">
                    <button onClick={handleIncrement} className="btn btn-success">Increase</button>
                    <button onClick={handleDecrement} className="btn btn-danger mx-2">Decrease</button>
                </div>

                <div className="my-4">
                    <input ref={myNumber} type="number" className="form-control"/>
                    <button onClick={handleSet}  className="btn btn-primary my-4">Set Custom</button>
                </div>

            </div>

        </div>
    )
}

export default Counter;
