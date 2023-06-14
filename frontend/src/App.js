import React,{useState} from 'react'
import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import LoginUi from './pages/Login'
import PrivateRoute from './PrivateRoute';

function App() {
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token){
        return true;
    } else {
        return false;
    }
};

const [isAuth, setisAuth] = useState(getToken());

  return (
    <Router>
      {/* <div className="container dark"> */}
        {/* <div className="app"> */}
          {/* <Header /> */}

          <PrivateRoute exact path="/" authed={isAuth} component={NotesListPage} />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/login" exact component={LoginUi} />
          <Route path="/note/:id" component={NotePage} />

{/* 
        </div>
      </div> */}
    </Router>
  );
}

export default App;
