import React, { Component } from 'react';

class RepoSearchInput extends Component {
  constructor(props){
    super();
    this.state = {
      repoName: '',
    }
  }

  render() {
    const { fetchRepoCommits } = this.props;
    const { repoName } = this.state;
    return (
      <div>
        <input
          value={repoName}
          placeholder="  E.g. facebook/react"
          onChange={e => this.setState({repoName: e.target.value})}
          type='text'/>
        <button className="repo-search-input-button" onClick={() => fetchRepoCommits(repoName)}>See commits</button>
      </div>
    );
  }
}

export default RepoSearchInput;