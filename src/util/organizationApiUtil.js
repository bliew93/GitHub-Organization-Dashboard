import $ from "jquery";
const __githubAPI = "https://api.github.com";
const __accessToken = "5944bf4747dd83a1ddac754d09708aaaeb3192f7";

export const fetchOrganizationInfo = org => {
  return $.ajax({
    method: "get",
    url: `${__githubAPI}/orgs/${org}?access_token=${__accessToken}`
  });
};

export const fetchOrganizationRepos = org => {
  return $.ajax({
    method: "get",
    url: `${__githubAPI}/orgs/${org}/repos?per_page=100?access_token=${__accessToken}`
    // success: function(data, textStatus, request) {
    //   data.nextLink = request.getResponseHeader("Link");
    // }
  });
};

export const fetchRepoContributors = (org, repoName) => {
  return $.ajax({
    method: "get",
    url: `${__githubAPI}/repos/${org}/${repoName}/contributors?access_token=${__accessToken}`
  });
};

export const fetchOrganizationMembers = org => {
  return $.ajax({
    method: "get",
    url: `${__githubAPI}/orgs/${org}/members?access_token=${__accessToken}`
  });
};
