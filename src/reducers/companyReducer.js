import {
  RECEIVE_ORG,
  RECEIVE_ORG_REPOS,
  RECEIVE_ORG_MEMBERS,
  CLEAR_STATE
} from "../actions/organizationActions";
import { merge } from "lodash";

const defaultState = {};

const companyReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORG:
      return merge({}, state, { name: action.org.login, url: action.org.url });
    case RECEIVE_ORG_REPOS:
      const repoIds = action.repos.map(repo => repo.id);
      return merge({}, state, { repoIds });
    case RECEIVE_ORG_MEMBERS:
      const memberIds = action.users.map(user => user.id);
      return merge({}, state, { memberIds });
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default companyReducer;
