import { action, decorate } from "mobx";

class HomeModel {
    handleRepos(data: Array<any>): Array<any> {
        return data.filter(values => values.desc = 'andre-portfolio');
    }
}

decorate(HomeModel, {
   handleRepos: action 
});

export default HomeModel;