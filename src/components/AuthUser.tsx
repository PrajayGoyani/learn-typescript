import React, { useEffect, useState } from "react"
import config from "../config/config"

interface IState {
  isLogin: boolean
}

const AuthUser: React.FunctionComponent = () => {

  useEffect(() => {
    document.title = `${config.appName} - AuthUser Page`
  })

  const [state, setState] = useState<IState>({
    isLogin: false
  });

  // login function
  const handleLogin = (): void => {
    setState({
      isLogin: true
    })
  }

  // logout function
  const handleLogout = (): void => {
    setState({
      isLogin: false
    })
  }

  const { isLogin } = state;

  return (
    <>
      <div className="container">
        <div className="col-md-6 py-3 text-center">
          <h1>{isLogin ? `Welcome User` : `Please Login for Dashboard`}</h1>
          <div className="card">
            <div className="card-body">
              {isLogin ?
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                :
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthUser