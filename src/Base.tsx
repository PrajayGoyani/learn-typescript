import { Routes, Route } from 'react-router-dom'
import AuthUser from './components/AuthUser'
import Counter from './components/Counter'
import Customer from './components/Customer'
import Login from './components/Login'
import User from './components/User'
import UserList from './components/UserList'
import Users from './components/Users'
import Youtube from './components/Youtube'
import About from './components/About'
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'

function Base() {
  return (
    // <div className="container">
    // <div className="row">
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        {/* <Customer fsName="WRP Prajay" fsTitle="PHP Developer" fiAge={22} /> */}
        {/* <User fiUserID={22} fsUserName="wrp.prajay" /> */}
        {/* <Counter /> */}
        {/* <Youtube /> */}
        {/* <Login /> */}
        {/* <AuthUser /> */}
        {/* <UserList /> */}
        {/* <Users /> */}
      </Routes>
    </>
    // </div>
    // </div>
  );
}

export default Base;
