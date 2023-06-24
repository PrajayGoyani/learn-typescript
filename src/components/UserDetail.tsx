import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { IUsers } from '../modals/IUsers';
import { UsersService } from '../services/UsersService';
import Loader from './Loader';

interface IParams {
  id: number
}

interface IState {
  loading: boolean,
  foUser: IUsers,
  fsErrorMsg: string,
}

const UserDetail: React.FunctionComponent = () => {

  const { id } = useParams<IParams | any>();

  const [state, setState] = useState<IState>({
    loading: false,
    foUser: {} as IUsers,
    fsErrorMsg: ''
  })

  // getting data from api
  useEffect(() => {
    if (id) {
      setState({ ...state, loading: true })
      UsersService.getUser(1)
        .then((res) => setState({
          ...state, loading: false, foUser: res.data
        }))
        .catch((error) => setState({
          ...state, loading: false, fsErrorMsg: error.message
        }));

    }
  }, [id]);

  const { loading, foUser, fsErrorMsg } = state;

  return (
    <>
      <div className="container">
        <h1 className='my-3'>Singel user details page</h1>
        <div className="row">
          {loading && <Loader />}
          {fsErrorMsg && <h1>{fsErrorMsg}</h1>}
          {
            Object.keys(foUser).length > 0 && (
              <div className="row">
                <ul className="list-group">
                  <li className="list-group-item">
                    Name : <b>{foUser.name}</b>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
        <h4>URL params: <span className='font-weight-bold'>{id}</span></h4>
        <div className="mt-4">
          <Link to={'/'} className='btn text-light text-bg-primary'>GO BACK</Link>
        </div>
      </div>
    </>
  )
}

export default UserDetail