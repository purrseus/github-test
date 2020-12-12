import ConnectionInstance from './connection-instancce';

const githubApi = {
  getUser: (value: string) => {
    return ConnectionInstance.get(`/users/${value}`);
  },
  getReposOfCurrentUser: (value: string, page: number) => {
    return ConnectionInstance.get(
      `/users/${value}/repos?per_page=30&page=${page}`
    );
  },
  getStargazersOfCurrentRepo: (repoName: string, page: number) => {
    return ConnectionInstance.get(
      `repos/${repoName}/stargazers?per_page=30&page=${page}`
    );
  },
};

export default githubApi;
