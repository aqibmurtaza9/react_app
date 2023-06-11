import axios from "axios";
import BaseStore from "./BaseStore"; 
class LoginStore extends BaseStore {
    
   authenticateUser(email, password) {
       debugger
       console.log("from login store : ",email,password)
       let jsonData = JSON.stringify({
           Email: email,
           Password : password
       });

        return this.makeHttpRequest("/Auth/login", jsonData)
            .then(r => {
                return r;
            })
        //   const response = axios.post("https://localhost:5001/Auth/login",{
        //       Email : email,
        //       Password : password
        //   });
        //   return response;
    }
}

var loginStore = new LoginStore
export default loginStore

 