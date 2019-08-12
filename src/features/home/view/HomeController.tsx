import React from 'react';
import { inject } from 'mobx-react';

import HomeView from './HomeView';
import Service from '../platform/HomeService';
import HomeViewModel from '../platform/HomeViewModel';

interface viewModel {
    viewModel?: HomeViewModel
}

inject('viewModel')
class HomeController extends React.Component<viewModel> {
    state = {
        data: [],
        service: new Service()
    }

    handleRepos(data: Array<any>): Array<any> {
        return data.filter(values => values.description === 'andre-portfolio');
    }

    componentDidMount(){
        const { service } = this.state;

        service.getRepos()
            .then(response => {
                const data: Array<any> = this.handleRepos(response.data);

                console.log(JSON.stringify(data));
                this.setState({
                    data
                })
            })
            .catch(console.error)
    }

    render(){
        return(
            <HomeView />
        );
    }
}

export default HomeController;