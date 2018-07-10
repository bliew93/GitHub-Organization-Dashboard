import React from "react";

class Summarization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mostStars = this.props.repos
      .sort((a, b) => {
        return b.star_count - a.star_count;
      })
      .map((repo, idx) => {
        return <li key={idx}>{repo.name + " " + repo.star_count}</li>;
      });

    let mostForks = this.props.repos
      .sort((a, b) => {
        return b.fork_count - a.fork_count;
      })
      .map((repo, idx) => {
        return <li key={idx}>{repo.name + " " + repo.fork_count}</li>;
      });

    let mostContributors = this.props.repos
      .sort((a, b) => {
        return b.contributor_count - a.contributor_count;
      })
      .map((repo, idx) => {
        return <li key={idx}>{repo.name + " " + repo.contributor_count}</li>;
      });

    let topInternalContributors;
    if (this.props.company.memberIds) {
      topInternalContributors = this.props.company.memberIds
        .map((memberId, idx) => {
          if (
            this.props.users[memberId] &&
            this.props.users[memberId].contributions !== undefined
          ) {
            return (
              <li key={idx}>
                {this.props.users[memberId].name +
                  " " +
                  this.props.users[memberId].contributions}
              </li>
            );
          }
        })
        .sort((a, b) => {
          return b.contributions - a.contributions;
        });
    }

    let topExternalContributors = this.props.users
      .sort((a, b) => {
        return b.contributions - a.contributions;
      })
      .map((contributor, idx) => {
        if (!this.props.company.memberIds.includes(contributor.id)) {
          return (
            <li key={idx}>
              {contributor.name + " " + contributor.contributions}
            </li>
          );
        }
      });

    return (
      <div className="summarization-container">
        <div className="most-stars">
          <h2>Most Stars</h2>
          <ul>{mostStars}</ul>
        </div>

        <div className="most-forks">
          <h2>Most Forks</h2>
          <ul>{mostForks}</ul>
        </div>
        <div className="most-contributors">
          <h2>Most Contributors</h2>
          <ul>{mostContributors}</ul>
        </div>

        <div className="top-internal-contributors">
          <h2>Top Internal Contributors</h2>
          <ul>{topInternalContributors}</ul>
        </div>

        <div className="top-external-contributors">
          <h2>Top External Contributors</h2>
          <ul>{topExternalContributors}</ul>
        </div>
      </div>
    );
  }
}

export default Summarization;
