import { combineReducers } from "redux";
import bugsReducer from "./slices/bugSlice";
import projectsReducer from "./slices/projectSlice";
import usersReducer from "./slices/userSlice";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
