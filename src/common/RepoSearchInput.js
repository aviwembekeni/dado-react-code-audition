import React, { Component } from 'react';

class RepoSearchInput extends Component {
  constructor(props){
    super();
    this.state = {
      repositoryName: '',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.repoName !== this.props.repoName){
      this.setState({repositoryName: nextProps.repoName})
    }
  }

  render() {
    const { fetchRepoCommits } = this.props;
    const { repositoryName } = this.state;
    return (
      <div>
        <input
          value={repositoryName}
          placeholder="  E.g. facebook/react"
          onChange={e => this.setState({repositoryName: e.target.value})}
          type='text'/>
        <button className="repo-search-input-button" onClick={() => fetchRepoCommits(repositoryName)}>See commits</button>
      </div>
    );
  }
}

export default RepoSearchInput;