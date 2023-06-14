import React ,{useState}from 'react'
import axios from 'axios'
import './logincss.css';
function LoginUi() {
    const [log,setlog]=useState({
      username:"",
      email:"",
      password:"",
      password_two:""
    })
    const [Register,setRegister]=useState(false)
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setlog({...log,[name]:value})
    }
    const registerUser = async() => {
      //Headers
      const config = {
          headers : {
              'Content-Type' : 'application/json',
          }
      };
      //Request body
      const body = JSON.stringify({username: log.username, email:log.email, password:log.password});
      axios
      .post('api/authy/signup', body,config)
      .then(response =>{
          // const auth_token = response.data.token;

      })
      .catch(error => {
          // unsetCurrentUser();
          console.log(error);
          window.alert("Error username/email may be duplicated" + error);
      });
      return true;
  };
  return (
    <div className="main">
     <div className="">
       <div>
         <div className="imgs">
           <div className="container-image">
             {/* <img src={profile} alt="profile" className="profile"/> */}

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           {
            Register?
            <>
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="text" placeholder="username" name="username" value={log.username} onChange={handlechange}  />
           </div>
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="email" placeholder="user name" name="email" value={log.email} onChange={handlechange}  />
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="user name" name="password" value={log.password} onChange={handlechange} />
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="password_two" name="password_two" value={log.password_two} onChange={handlechange} />
           </div>
          <div className="login-button">
          <button onClick={registerUser}>Register</button>
          </div>
            </>: 
            <>
            <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="email" placeholder="user name" name="email" value={log.email} onChange={handlechange}  />
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="user name" name="password" value={log.password} onChange={handlechange} />
           </div>
          <div className="login-button">
          <button >Login in</button>
          </div>
            </>
           }
           
              <button onClick={()=>setRegister((prev)=>!prev)} >switch</button>
            
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;