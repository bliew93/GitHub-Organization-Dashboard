import {
  RECEIVE_ORG_REPOS,
  RECEIVE_REPO_CONTRIBUTORS,
  CLEAR_STATE
} from "../actions/organizationActions";
import { merge } from "lodash";

const defaultState = {};

const reposReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REPO_CONTRIBUTORS:
      let contributors = {};
      for (let i = 0; i < action.users.length; i++) {
        let user = action.users[i];
        contributors[user.id] = user.contributions;
      }
      let newState = merge({}, state);
      newState[action.repoName].contributors = contributors;
      newState[action.repoName].contributor_count = Object.keys(
        contributors
      ).length;
      return newState;
    case RECEIVE_ORG_REPOS:
      let repos = {};

      for (let i = 0; i < action.repos.length; i++) {
        let repo = action.repos[i];
        repos[repo.name] = {
          id: repo.id,
          name: repo.name,
          star_count: repo.stargazers_count,
          fork_count: repo.forks_count,
          url: repo.html_url
        };
      }

      return merge({}, state, repos);
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default reposReducer;
