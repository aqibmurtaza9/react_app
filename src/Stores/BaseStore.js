import axios from 'axios';

const API_BASE_URL = 'https://localhost:44314';
export default class BaseStore {
  
  getBaseUrl(){
    return 'https://localhost:44314';
  }

// --------------------------------------------  fetch
//   makeGETRequest(url) {
//       let basePath = this.getBaseUrl();
//       url = basePath+url
//       return fetch(url, {
//           method: 'GET',
//           mode: 'cors',
//           cache: 'default'
//       })
//       .then(function(response) {
//           return response.json()
//       })
//       .catch(function(ex) {
//           alert("Error: "+ex);
//           console.log("Error: "+ex);
//       })
//   }

// makeHttpRequest(url, payload, httpMethod = 'POST') {
//     let basePath = this.getBaseUrl();
//     url = basePath+url
//     var request = new Request(url, {
//         method: httpMethod, 
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         }),
//         mode: 'cors',
//         cache: 'default',
//         body: JSON.stringify(payload)
//     });

//     return fetch(request)
//     .then(function(response) {
//         return response.json()
//     })
//     .catch(function(ex) {
//         alert("Error:"+ ex);
//         console.log("Error: "+ex);
//     })
// }

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
      return response.data;
    })
    .catch(function(error) {
      alert("Error: "+error);
      console.log("Error: "+error);
    })

    return response1;
    //  return axios.post(url,{Email :"aqib",Password: "123"});
  }
}


  