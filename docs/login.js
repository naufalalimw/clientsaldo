import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component{

    render(){
        return(
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin ">
              <div class="form-label-group">
              <label for="inputUsername">Username</label>
                <input type="text" id="inputUsername" class="form-control mb-2 mt-1" placeholder="Username" required autofocus/>
               
              </div>

              <div class="form-label-group">
              <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control mb-2 mt-1" placeholder="Password" required/>
               
              </div>
              <Link to = 'user/ceksaldo'>
              <button class="btn btn-lg btn-info btn-block my-4 k" type="submit" >Sign in</button>
              </Link>
              <div class=" text-info">
                  <a href="/signup"> Go to Register page </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  </div>
  )
  }

}

export default Login