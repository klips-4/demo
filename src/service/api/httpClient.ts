import axios from "axios";

export interface Request {
    url: string,
    method?: string,
    headers?: never,
    params?: never,
    data?: never
}

const makeRequest = ({url = '/', method = 'GET', data, params, headers}) => axios({
    url,
    method,
    responseType: 'json',
    headers,
    params,
    data
})

export default makeRequest