import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from '../redux/action/userAction';

const AddUser = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch=useDispatch()
  const onSubmit = async (data) => {
    console.log('Form data:', data);
    dispatch(addUser(data))
   reset()
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="text-center">
        <h2>Add User</h2>
        <div className="card p-3 bg-info">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='m-2'>
            <label>Name:
            
            <input type="text" {...register('username', { required: true })} />
            </label>
            <br />
            {errors.username && <span className="text-danger">Please enter a name</span>}
          </div>
          <div className='m-2'>
            <label>Email:</label>
            <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            <br />
            {errors.email && <span className="text-danger">Please enter a valid email address</span>}
          </div>
          <div className='m-2'>
            <label>Phone:</label>
            <input type="tel" {...register('phone', { required: true, pattern: /^\d{10}$/ })} />
            <br />
            {errors.phone && <span className="text-danger">Please enter a 10-digit phone number</span>}
          </div>
          <button type="submit" className='btn btn-success'>Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
