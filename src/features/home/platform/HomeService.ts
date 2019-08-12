import Service from '../../../core/service/axios';

enum Endpoint {
    GET_REPOS = '/users/andrekkss/repos'
}

class HomeService extends Service {
    private GET_REPOS: string = Endpoint.GET_REPOS;

    async getRepos(){
        return await this.get(this.GET_REPOS);
    }
}

export default HomeService;