
const initialState = {
  user: [],
  viewUser:{},
  fetchUser:{}
};

// Reducer function
const userReducer = (state = initialState, action) => {
    console.log("Action payload reducer",action.payload)
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
      case "DELETE_USER":
        return {
          ...state,
          user: state.user.filter((item)=>item._id!==action.payload),
        };
        case "VIEW_USER":
            console.log("View user rducer",action.payload)
            return {
              ...state,
              viewUser: action.payload,
            };
        case "FETCH_USER":
                console.log("View user rducer",action.payload)
                return {
                  ...state,
                  fetchUser: action.payload,
                };    
    default:
      return state;
  }
};

export default userReducer;
