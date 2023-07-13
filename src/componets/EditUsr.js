import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUser } from "../redux/action/userAction";
import { useNavigate } from "react-router-dom";

const EditUsr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user, setUser] = useState(null);
  const users = useSelector((state) => state.user.fetchUser);
  console.log("edit", users);

  useEffect(() => {
    setUser(users);
    reset(users);
  }, [users, reset]);

  const onSubmit = async (data) => {
    dispatch(updateUser(id, data));
  };

  return (
    <div className="m-3 d-flex justify-content-center ">
      <div>
        <h3 className="text-center">Edit User Info</h3>
        {users ? (
          <div className="card p-3 bg-info">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="m-2">
                <label>
                  Name:
                  <input
                    type="text"
                    {...register("username", { required: true })}
                  />
                </label>
                <br />
                {errors.username && (
                  <span className="text-danger">Please enter a name</span>
                )}
              </div>
              <div className="m-2">
                <label>Email:</label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <br />
                {errors.email && (
                  <span className="text-danger">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div className="m-2">
                <label>Phone:</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                />
                <br />
                {errors.phone && (
                  <span className="text-danger">
                    Please enter a 10-digit phone number
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </form>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default EditUsr;
