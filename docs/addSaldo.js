import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class AddSaldo extends Component{
  constructor() {
    super();
    this.state = {
    nim : "",  
    nama: "",
    saldo : ""
    };
    this.handleChangeNIM = this.handleChangeNIM.bind(this);
    this.handleChangenama = this.handleChangenama.bind(this);
    this.handleChangesaldo = this.handleChangesaldo.bind(this);
}

handleChangeNIM(event) {
    this.setState({nim: event.target.value});
  }
handleChangenama(event) {
    this.setState({nama: event.target.value});
  }
handleChangesaldo(event){
    this.setState({saldo:event.target.value})
}

  handleAdd(){
    axios.put('http://localhost:8000/user/updateSaldo', { 
      "NIM" : this.state.nim,
      "nama" : this.state.nama,
      "saldo" : this.state.saldo  })
      .then((response) =>{
        alert(("Saldo is updated!"));
      }, (error) => {
        alert(error);
      });
    

  }

    render(){
        return(
            <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Tambah Saldo</h5>
            <form class="form-cek-saldo ">
              <div class="form-cek-saldo-group">
              <label for="inputNIM">NIM</label>
                <input type="text" id="inputNIM" class="form-control mb-2 mt-1" placeholder="NIM" value={this.state.nim} onChange={this.handleChangeNIM} required autofocus/>
               
              </div>

              <div class="form-cek-saldo-group">
              <label for="inputNama">Nama Lengkap</label>
                <input type="text" id="inputNama" class="form-control mb-2 mt-1" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChangenama} required/>
               
              </div>

              <div class="form-cek-saldo-group">
              <label for="inputSaldo">Saldo</label>
                <input type="text" id="inputSaldo" class="form-control mb-2 mt-1" placeholder="Tambah Saldo" value={this.state.saldo} onChange={this.handleChangesaldo} required/>
               
              </div>

              <button class="btn btn-lg btn-info btn-block my-4 k" type="button" onClick = {()=>this.handleAdd()}>Tambah Saldo</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
    <div class="row justify-content-center">
        <div class="col-4">
            <Link to = '/user/ceksaldo'>
             <button class="btn btn-lg btn-info btn-block my-4 k" type="submit" > Dashboard </button>
            </Link>
        </div>
    </div>
  </div>
        )
    }
}

export default AddSaldo