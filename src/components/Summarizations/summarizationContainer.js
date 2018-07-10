import { connect } from "react-redux";
import Summarization from "./summarization";
import { fetchRepoContributors } from "../../actions/organizationActions";

const mapStateToProps = state => {
  return {
    company: state.entities.company,
    repos: Object.values(state.entities.repos),
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepoContributors: (org, repoName) =>
      dispatch(fetchRepoContributors(org, repoName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summarization);
