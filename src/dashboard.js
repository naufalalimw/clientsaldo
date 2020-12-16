import React, { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';
import axios from 'axios'


class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
        nim : "",  
        nama: "",
        saldo : ""
        };

        this.handleChangeNIM = this.handleChangeNIM.bind(this);
        this.handleChangenama = this.handleChangenama.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeNIM(event) {
        this.setState({nim: event.target.value});
      }
      handleChangenama(event) {
        this.setState({nama: event.target.value});
      }
      handleSubmit(){
        axios.get('http://localhost:8000/user/'.concat(this.state.nim,'/',this.state.nama,'/getSaldo')).then(response => {
        alert("Your remaining saldo : " + response.data)    
        this.setState({saldo: response.data})
        }, (error) => {
          alert(error)
        });
        // console.log(this.state.saldo)
      }
      
    

    render(){
        console.log(this.state.nama)
        return(
          
            <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Cek Saldo</h5>
            <form class="form-cek-saldo ">
              <div class="form-cek-saldo-group">
              <label for="inputNIM">NIM</label>
                <input type="text" id="inputNIM" class="form-control mb-2 mt-1" placeholder="NIM" value={this.state.nim} onChange={this.handleChangeNIM} required/>
               
              </div>

              <div class="form-cek-saldo-group">
              <label for="inputNama">Nama Lengkap</label>
                <input type="text" id="inputNama" class="form-control mb-2 mt-1" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChangenama} required/>
               
              </div>
              <button class="btn btn-lg btn-info btn-block my-4 k" type="button"  onClick = {()=>this.handleSubmit()}>Cek Saldo</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
    <div class="row justify-content-start">
        <div class="col-4">
            <Link to = '/user/createaccount'>
             <button class="btn btn-lg btn-info btn-block my-4 k" type="submit" >Create Account</button>
            </Link>
        </div>
        <div class="col-4">
            <Link to = '/user/addSaldo'>
             <button class="btn btn-lg btn-info btn-block my-4 k" type="submit" >Add Saldo</button>
            </Link>
        </div>
        <div class="col-4">
            <Link to = '/user/deleteaccount'>
             <button class="btn btn-lg btn-info btn-block my-4 k" type="submit" >Delete Account</button>
            </Link>
        </div>
    </div>
    
  </div>
    
        )
    }
}

export default Dashboard
