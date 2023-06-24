import React, { useState } from "react"


interface IState {
    fsMessage: String,
}

interface IProps { }


const Youtube: React.FunctionComponent = () => {
    const [state, setState] = useState<IState>({ fsMessage: "Welcome" })

    // show greet message
    const handleGreet = (fsGreet: string): void => {
        setState({ fsMessage: fsGreet })
    }


    const { fsMessage } = state;
    return (
        <>
            <div className="col-md-6 py-3 text-center">
                <h1>Function With Parameters</h1>
                <div className="card">
                    <div className="card-body">
                        <h2 className="display-3">{fsMessage}</h2>
                        <button className="btn btn-danger" onClick={() => { handleGreet("Like") }}>Like</button>
                        <button className="btn btn-success ms-2" onClick={() => { handleGreet("Comment") }}>Comment</button>
                        <button className="btn btn-info ms-2" onClick={() => { handleGreet("Subscribe") }}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Youtube