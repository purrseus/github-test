import ConnectionInstance from './connection-instancce';

const githubApi = {
  getUser: (value: string) => {
    return ConnectionInstance.get(`/users/${value}`);
  },
};

export default githubApi;
