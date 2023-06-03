import React ,{useState}from 'react'
import './logincss.css';
function LoginUi() {
    const [log,setlog]=useState({
        email:"",password:""
    })
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setlog({...log,[name]:value})
    }
    const dologin=async()=>{
        fetch(`/api/log/login/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        })
    }
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
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="email" placeholder="user name" name="email" value={log.email} onChange={handlechange}  />
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="user name" name="password" value={log.password} onChange={handlechange} />
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
              <button  onClick={dologin}>Sign Up</button>
            
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;