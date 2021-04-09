import React, { Component } from 'react';

import RepoSearchInput from '../../common/RepoSearchInput';
import fetchRepoCommitsFromGithub from '../../api/fetchRepoCommitsFromGithub';

class CommitViewer extends Component {
  constructor(props){
  super(props);
  this.state = {
     commits: [],
  };
}

  componentDidMount(){
    const { repoName } = this.props.location.state;
    if(repoName){
     this.fetchRepoCommits(repoName);
    }

  }

  fetchRepoCommits = async (repoName) => {
   const repoCommits = await fetchRepoCommitsFromGithub(repoName);
   this.setState({commits: repoCommits})
  }

  render() {
    const { repoName } = this.props.location.state;
    const { commits } = this.state;

    let commitsView;
    if(commits.length === 0){
      commitsView = (<p>Loading...</p>);
    }else {
      commitsView = (<p>COOOMMMIITS...</p>)
    }
    return (
      <div>
        <div className="navbar commit-view-header" style={{background: "#EFF2F6"}}>
          <h3>CommitViewer</h3>
          <RepoSearchInput fetchRepoCommits={this.fetchRepoCommits}/>
        </div>
        <h3 className='repo-name'>{repoName || ''}</h3>
        <div>
         {commitsView}
        </div>
      </div>
    );
  }
}

export default CommitViewer;