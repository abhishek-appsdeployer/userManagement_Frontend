import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { viewUser } from "../redux/action/userAction";
const UserDetail = () => {
    const dispatch=useDispatch()
  const { id } = useParams();
//   const [user, setUser] = useState(null);

  useEffect(() => {
    // fetchUser();
    // dispatch(viewUser())
  }, []);
  const user= useSelector((state) => state.user.viewUser);
//   const fetchUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/users/${id}`);

//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

  return (
    <div className="p-3">
      <h2 className="text-center text-success">User Details</h2>
      {user ? (
        <div className="card bg-info text-light " style={{ width: '40rem' }}>
         <div className="card-body">
         <h1>User Name: {user.username}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Phone: {user.phone}</h1>
         </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetail;
