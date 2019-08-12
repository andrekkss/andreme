import axios, { AxiosResponse } from 'axios';
import { action, decorate } from "mobx";

class AxiosConfig {
    public init(baseUrl: string): void {
        axios.defaults.baseURL = baseUrl;
    }

    public get(endpoint: string): Promise<AxiosResponse<any>> {
        return axios.get(endpoint);
    }

    public customRequest(data: any): Promise<AxiosResponse<any>> {
        return axios.request(data);
    }
}

decorate(AxiosConfig, {
    init: action,
    get: action,
    customRequest: action
});

export default AxiosConfig;