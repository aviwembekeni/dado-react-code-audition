import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RepoSearchInput from '../../common/RepoSearchInput';
import fetchRepoCommitsFromGithub from '../../api/fetchRepoCommitsFromGithub';

class CommitViewer extends Component {
  constructor(props){
  super(props);
  this.state = {
     commits: [],
     repoName: ''
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
   this.props.history.push({
     state: {repoName}
   })
   this.setState({
     commits: repoCommits,
     repoName
    })
  }

  render() {
    // const { repoName } = this.props.location.state;
    const { commits, repoName } = this.state;

    let commitsView;
    if(commits.length === 0){
      commitsView = (<p style={{textAlign: 'center'}}>Loading...</p>);
    }else {

      commitsView = commits.map((commit, i) =>{
        const date = new Date(commit.commit.author.date);
        const dateString = ('0' + date.getHours()).slice(-2) + ':' +
                           ('0' + date.getMinutes()).slice(-2) + ' '+('0' + date.getDate()).slice(-2) +
                            '-' + ('0'+(date.getMonth()+1)).slice(-2) + '-' + date.getFullYear();
        return (
          <div key={i} className='row'>
            <div className='column left' >
              <div className="user-avatar" style={{backgroundImage: `url(${commit.author.avatar_url})`}}/>
              <p>{commit.author.login}</p>
            </div>
            <div className='column middle'>
              <p>{commit.commit.message}</p>
            </div>
            <div className='column right' >
              <p>{dateString}</p>
            </div>
          </div>
          )
      }
      )
    }
    return (
      <div>
        <div className='navbar commit-view-header' style={{background: '#EFF2F6'}}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <h3>CommitViewer</h3>
          </Link>

          <RepoSearchInput fetchRepoCommits={this.fetchRepoCommits} repoName={repoName}/>
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