import {
  RECEIVE_REPO_CONTRIBUTORS,
  RECEIVE_ORG_MEMBERS,
  CLEAR_STATE
} from "../actions/organizationActions";
import { merge } from "lodash";

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REPO_CONTRIBUTORS:
      let newState = merge({}, state);

      for (let i = 0; i < action.users.length; i++) {
        let user = action.users[i];
        if (newState[user.id]) {
          if (newState[user.id].contributions) {
            newState[user.id].contributions += user.contributions;
          } else {
            newState[user.id].contributions = user.contributions;
          }
        } else {
          newState[user.id] = {
            name: user.login,
            url: user.html_url,
            contributions: user.contributions
          };
        }
      }

      return newState;
    case RECEIVE_ORG_MEMBERS:
      let users = {};
      for (let i = 0; i < action.users.length; i++) {
        let user = action.users[i];
        users[user.id] = {
          name: user.login,
          url: user.html_url
        };
      }
      return merge({}, state, users);
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default usersReducer;
