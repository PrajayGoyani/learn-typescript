import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

interface IParams {
    id: number
}

const UserDetail: React.FunctionComponent = () => {

    const { id } = useParams<IParams | any>();

    return (
        <>
            <div className="container">
                <h1 className='my-3'>Singel user details page</h1>
                <h4>URL params: <span className='font-weight-bold'>{id}</span></h4>
                <div className="mt-4">
                    <Link to={'/'} className='btn text-light text-bg-primary'>GO BACK</Link>
                </div>
            </div>
        </>
    )
}

export default UserDetail