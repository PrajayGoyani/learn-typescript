import React, { useState } from "react"

interface IState {
    fsName: String,
    fsTitle: String,
}

let About: React.FunctionComponent = () => {
    const [state, setState] = useState<IState>({ fsName: "WRP Prajay", fsTitle: "PHP Developer" })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-3">
                    <div className="display-6 bg-light p-4 border">
                        About Page
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About