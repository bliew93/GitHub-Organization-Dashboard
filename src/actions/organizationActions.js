import * as OrganizationAPIUtil from "../util/organizationApiUtil";
export const RECEIVE_ORG = "RECEIVE_ORG";
export const RECEIVE_ORG_REPOS = "RECEIVE_ORG_REPOS";
export const RECEIVE_REPO_CONTRIBUTORS = "RECEIVE_REPO_CONTRIBUTORS";
export const RECEIVE_ORG_MEMBERS = "RECEIVE_ORG_MEMBERS";
export const CLEAR_STATE = "CLEAR_STATE";

// Sync
export const receiveOrganization = org => {
  return {
    type: RECEIVE_ORG,
    org
  };
};

export const receiveOrganizationRepos = repos => {
  return {
    type: RECEIVE_ORG_REPOS,
    repos
  };
};

export const receiveRepoContributors = (users, repoName) => {
  return {
    type: RECEIVE_REPO_CONTRIBUTORS,
    users,
    repoName
  };
};

export const receiveOrganizationMembers = users => {
  return {
    type: RECEIVE_ORG_MEMBERS,
    users
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE
  };
};

// Async
export const fetchOrganizationInfo = org => dispatch => {
  return OrganizationAPIUtil.fetchOrganizationInfo(org).then(org => {
    return dispatch(receiveOrganization(org));
  });
};

export const fetchOrganizationRepos = org => dispatch => {
  return OrganizationAPIUtil.fetchOrganizationRepos(org).then(repos => {
    return dispatch(receiveOrganizationRepos(repos));
  });
};

export const fetchRepoContributors = (org, repoName) => dispatch => {
  return OrganizationAPIUtil.fetchRepoContributors(org, repoName).then(
    contributors => {
      return dispatch(receiveRepoContributors(contributors, repoName));
    }
  );
};

export const fetchOrganizationMembers = org => dispatch => {
  return OrganizationAPIUtil.fetchOrganizationMembers(org).then(members => {
    return dispatch(receiveOrganizationMembers(members));
  });
};
