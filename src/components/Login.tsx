import React, { useState } from "react"
import { ILogin } from "../modals/ILogin"

interface IState {
    foUser: ILogin
}

interface IProps { }


const Login: React.FunctionComponent = () => {
    const [state, setState] = useState<IState>({
        foUser: {
            fsEmail: '',
            fsPassword: ''
        }
    })

    // handle change function
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            foUser: {
                ...state.foUser,
                [event.target.name]: event.target.value,
            }
        })
    }

    // form-handling
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(state.foUser);
        alert('Login Success');
    }

    const { fsEmail, fsPassword } = state.foUser;
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-4">
                    <h1 className="display-5 my-3">Login Form Example</h1>
                    <form className="card p-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="fsEmail" value={fsEmail} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="fsPassword" value={fsPassword} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div className="bg-light mt-4 p-3 border border-primary">
                        <pre className="m-0">{JSON.stringify(state.foUser, null, 4)}</pre>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login