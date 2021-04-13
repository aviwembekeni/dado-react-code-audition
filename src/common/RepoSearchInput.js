import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

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
      <div className="content">
        <FontAwesomeIcon icon="coffee" />
        <input
          value={repositoryName}
          placeholder="  E.g. facebook/react"
          onChange={e => this.setState({repositoryName: e.target.value})}
          type='text'/>
        <button className="repo-search-input-button" onClick={() => fetchRepoCommits(repositoryName)}>See commits <FontAwesomeIcon icon={faRocket}/></button>
      </div>
    );
  }
}

export default RepoSearchInput;