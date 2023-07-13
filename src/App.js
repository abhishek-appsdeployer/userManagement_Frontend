import React from 'react'
import UserList from './componets/userList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './componets/AddUser';
import UserDetail from './componets/UserDetail';
import EditUsr from './componets/EditUsr';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/view/:id" element={<UserDetail/>}/>
      <Route path="/edit/:id" element={<EditUsr/>}/>

        
     
    </Routes>
  </BrowserRouter>
  )
}

export default App
