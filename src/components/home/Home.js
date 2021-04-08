import React, { Component } from 'react';
import Navbar from './Navbar';
import RepoSearchInput from '../../common/RepoSearchInput';
import fetchRepoCommitsFromGithub from '../../api/fetchRepoCommitsFromGithub';
class Home extends Component {

  fetchRepoCommits = async (repoName) => {
   const repoCommits = await fetchRepoCommitsFromGithub(repoName);
   console.log(repoCommits);
  }

  render() {
    return (
      <div>
       <Navbar/>
       <div className="header-container">
        <h1 className="header">Discover the world of code</h1>
        <p className="sub-header">Explore open source projects from GitHub,
           and read their commit history to see the story of how they were built.
        </p>
       </div>
       <div className="repo-search">
        <RepoSearchInput fetchRepoCommits={this.fetchRepoCommits}/>
        <p>Or pick one of these suggested repos</p>
        <div className="repo-search-default-btns">
          <button onClick={() => this.fetchRepoCommits('django/django')}>django/django</button>
          <button onClick={() => this.fetchRepoCommits('microsoft/vscode')}>microsoft/vscode</button>
          <button onClick={() => this.fetchRepoCommits('jezen/is-thirteen')}>jezen/is-thirteen</button>
          <button onClick={() => this.fetchRepoCommits('benawad/dogehouse')}>benawad/dogehouse</button>
        </div>
       </div>
      </div>
    );
  }
}

export default Home;