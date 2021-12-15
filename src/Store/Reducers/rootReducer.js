import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
/*create a redux Combined Reducers in case e have a several Reducers in our app*/

const rootReducer = combineReducers({
  // this firebaseReducer will auto sync the state with the database , it will retrive data denpends on witch component is active
  firebaseReducer: firebaseReducer,
});

export default rootReducer;
