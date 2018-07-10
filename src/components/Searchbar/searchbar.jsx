import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orgName: "" };
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      Object.keys(prevProps.repos).length === 0 &&
      Object.keys(this.props.repos).length !== 0 &&
      this.props.orgName !== ""
    ) {
      this.fetchAllRepoContributors();
    }
  }

  fetchAllRepoContributors() {
    for (let repo in this.props.repos) {
      this.props.fetchRepoContributors(this.state.orgName, repo).then(() => {
        this.setState({ orgName: "" });
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearState();
    this.props
      .fetchOrgInfo(this.state.orgName)
      .then(
        this.props
          .fetchOrgRepos(this.state.orgName)
          .then(this.props.fetchOrgMembers(this.state.orgName))
      );
  }

  enterSubmit(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
      return false;
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="navbar-container">
        <header>GitHub Organization Dashboard</header>
        <form>
          <input
            type="text"
            value={this.state.orgName}
            onKeyDown={this.enterSubmit}
            onChange={this.update("orgName")}
            placeholder="Enter an organization name"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
