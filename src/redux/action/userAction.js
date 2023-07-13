import axios from "axios";
export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      console.log("Action", response.data);

      dispatch({
        type: "GET_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log("Error in get all frame ", error);
    }
  };
};
export const addUser = (data) => {
  return async (dispatch) => {
    const { username, email, phone } = data;
    try {
      const payload = { username, email, phone };
      const response = await axios.post("http://localhost:8000/user", payload);
      alert("user added successfully");

      dispatch({
        type: "ADD_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log("Error in get all frame ", error);
      alert("something went wrong");
    }
  };
};
export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);

      dispatch({
        type: "DELETE_USER",
        payload: id,
      });
    } catch (error) {
      console.log("Error in get all frame ", error);
    }
  };
};

export const viewUser = (id) => {
  return async (dispatch) => {
    try {
      console.log("View user action", id);
      const response = await axios.get(`http://localhost:8000/users/${id}`);

      dispatch({
        type: "VIEW_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log("Error in get all frame ", error);
    }
  };
};
export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      console.log("fetch user action", id);
      const response = await axios.get(`http://localhost:8000/users/${id}`);

      dispatch({
        type: "FETCH_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log("Error in get all frame ", error);
    }
  };
};

export const updateUser = (id,data) => {
    return async (dispatch) => {
      try {
        console.log("fetch user action", id);
        await axios.put(`http://localhost:8000/users/${id}`, data);
  
        alert("Updated successfully")
      } catch (error) {
        console.log("Error in get all frame ", error);
        alert("something went wrong")
      }
    };
  };
