import axios from 'axios';

const API_BASE_URL = 'http://localhost:5208';

export default class BaseStore {
  // constructor() {
  //   axios.interceptors.request.use(
  //     async (config) => {
  //       //Need to change config.baseURL according to release (e.g for development, its Localhost)
  //       config.baseURL = API_BASE_URL;
  //       //debugger;
  //       var token = localStorage.getItem("reactapp_token");
  //       //console.log(token);

  //       config.headers.authorization = "Bearer " + token;
  //       config.headers.token = token;
  //       //console.log(appState.state.token,"Token from appstate");

  //       return config;
  //     },

  //     function (error) {
  //       // Do something with request error
  //       return Promise.reject(error);
  //     }
  //   );
  // }
  getBaseUrl(){
    return 'http://localhost:5208';
  }

// ---------------------------------------axios
makeGETRequest(url) {
    let basePath = this.getBaseUrl();
    url = basePath+url
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      alert("Error: "+error);
      console.log("Error: "+error);
    })
  }
 
  makeHttpRequest(url, payload) {
    let basePath = this.getBaseUrl();
    url = basePath+url
    debugger;
    
 var response1 = axios.post(url,payload,{
  headers : {
    'Content-Type': 'application/json'
  }})
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      alert("Error: "+error);
      console.log("Error: "+error);
    })

    return response1;
    //  return axios.post(url,{Email :"aqib",Password: "123"});
  }
}


  