import { connect } from "react-redux";
import Searchbar from "./searchbar";
import {
  fetchOrganizationInfo,
  fetchOrganizationRepos,
  fetchRepoContributors,
  fetchOrganizationMembers,
  clearState
} from "../../actions/organizationActions";

const mapStateToProps = state => {
  return {
    name: state.entities.company.name,
    repos: state.entities.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrgInfo: org => dispatch(fetchOrganizationInfo(org)),
    fetchOrgRepos: org => dispatch(fetchOrganizationRepos(org)),
    fetchRepoContributors: (org, repoName) =>
      dispatch(fetchRepoContributors(org, repoName)),
    fetchOrgMembers: org => dispatch(fetchOrganizationMembers(org)),
    clearState: () => dispatch(clearState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
