import { Routes, Route } from 'react-router-dom'
import AuthUser from './components/AuthUser'
import Counter from './components/Counter'
import Customer from './components/Customer'
import Login from './components/Login'
import User from './components/User'
import UserList from './components/UserList'
import Users from './components/Users'
import Youtube from './components/Youtube'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'

function Base() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/customer' element={<Customer fsName="WRP Prajay" fsTitle="PHP Developer" fiAge={22} />} />
        <Route path='/user' element={<User fiUserID={27} fsUserName={"PHP Developer"} />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/auth-user' element={<AuthUser />} />
        <Route path='/user-list' element={<UserList />} />
      </Routes>
    </>
  );
}

export default Base;
