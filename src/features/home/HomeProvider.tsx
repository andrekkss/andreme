import React, { Component } from 'react';
import { Provider } from 'mobx-react'

import HomeViewModel from './platform/HomeViewModel';
import HomeController from './view/HomeController';

class HomeProvider extends Component {
    private viewModel: HomeViewModel = new HomeViewModel();

    render(){
        return(
            <Provider viewModel={this.viewModel}> 
                <HomeController />
            </Provider>
        );
    }
}

export default HomeProvider;