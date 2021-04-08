import axios from 'axios'

const fetchRepoCommitsFromGithub = async (repoName) => {
  const repoCommits = await axios.get(`https://api.github.com/repos/${repoName}/commits`, {
    params: {
      per_page: 10
    }
  });

  return repoCommits.data;
}

export default fetchRepoCommitsFromGithub;