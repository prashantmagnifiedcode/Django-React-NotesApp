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
    const [Register,setRegister]=useState(true)
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
          const auth_token = response.data.token;

      })
      .catch(error => {
          // unsetCurrentUser();
          console.log(error);
          window.alert("Error username/email may be duplicated" + error);
      });
      return true;
  };
  

  return (
    <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        {
          Register?
        <form action="#" class="sign-in-form">
          <h2 class="title" >Sign in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" name="username" value={log.username} onChange={handlechange}/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="password" value={log.password} onChange={handlechange} />
          </div>
          <input type="submit" value="Login" class="btn solid" />
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>:
        <form action="#" class="sign-up-form">
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" name="username" value={log.username} onChange={handlechange} />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" name="email" value={log.email} onChange={handlechange} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" name='password' value={log.password} onChange={handlechange} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="confirmPassword" name='password' value={log.password_two} onChange={handlechange}/>
          </div>
          <input type="submit" class="btn" value="Sign up" onClick={registerUser} />
          <p class="social-text" onc>Or Sign up with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
        }
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button class="btn transparent" id="sign-up-btn"  onClick={()=>{setRegister((prev)=>!prev)}}>
            Sign up
          </button>
        </div>
        <img src="img/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button class="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="img/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
  );
}

export default LoginUi;