import HomeModel from "./HomeModel";
import { computed, decorate } from "mobx";

class HomeViewModel {
    private homeModel: HomeModel = new HomeModel();

    getPortfolio(data: Array<any>){
        return this.homeModel.handleRepos(data)
    }
}

decorate(HomeViewModel, {
    getPortfolio: computed
});

export default HomeViewModel;