import axios from "axios";


const makeRequest = ({url = '/', method = 'GET'}) => axios({
    url,
    method,
    responseType: 'json',

})

export default makeRequest