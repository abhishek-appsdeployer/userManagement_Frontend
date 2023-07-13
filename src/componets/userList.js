import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { getUser,deleteUser, viewUser, fetchUser } from '../redux/action/userAction';

const UserList = () => {
  const dispatch=useDispatch()
  // const [users, setUsers] = useState([]);
  const users = useSelector((state) => state.user.user);
console.log("user are",users)

  useEffect(() => {
    // fetchUserList();
    dispatch(getUser())
  }, []);


  return (
    <div className='p-3 h-screen'>
      <Link to="add">
        <button className='btn btn-success m-2'>Add user</button>
      </Link>
      <h1 className='text-center'>USER LIST</h1>

      <Table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={index}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              
              <td>
              <Link to={`/view/${user._id}`}><button className='btn btn-success' onClick={()=>dispatch(viewUser(user._id))}>View</button></Link> 
              <Link to={`/edit/${user._id}`}> <button className='btn btn-info ' onClick={()=>dispatch(fetchUser(user._id))}>Edit</button></Link> 
                <button className='btn btn-danger' onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
