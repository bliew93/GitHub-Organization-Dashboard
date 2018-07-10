import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import configureStore from "./store/store";
import Root from "./root";
import registerServiceWorker from "./registerServiceWorker";

import {
  fetchOrganizationInfo,
  fetchOrganizationRepos,
  fetchRepoContributors,
  fetchOrganizationMembers
} from "./actions/organizationActions";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchOrganizationInfo = fetchOrganizationInfo;
  window.fetchOrganizationRepos = fetchOrganizationRepos;
  window.fetchRepoContributors = fetchRepoContributors;
  window.fetchOrganizationMembers = fetchOrganizationMembers;
});

registerServiceWorker();
