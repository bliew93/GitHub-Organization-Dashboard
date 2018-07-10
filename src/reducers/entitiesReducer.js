import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import reposReducer from "./reposReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  company: companyReducer,
  repos: reposReducer,
  users: usersReducer
});

export default entitiesReducer;
