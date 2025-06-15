import { useSelector } from "react-redux";

const Counter =  () => {

    const count = useSelector((state)=>state.Counter.value);

    return (
        <div className="card">
            <div className="card-header bg-primary text-center">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body text-center">
                <h2>00</h2>
                <div className="my-4">
                    <button className="btn btn-success">Increase</button>
                    <button className="btn btn-danger mx-2">Decrease</button>
                </div>
            </div>

        </div>
    )
}

export default Counter;
