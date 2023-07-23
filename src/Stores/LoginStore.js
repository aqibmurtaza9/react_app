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

        return this.makeHttpRequest("/auth/login", jsonData)
            .then(r => {
                return r;
            })
      
    }
}

var loginStore = new LoginStore
export default loginStore

 