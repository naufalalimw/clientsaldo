import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class DeleteAkun extends Component{
  constructor() {
    super();
    this.state = {
    nim : "",  
    nama: "",
    saldo : ""
    };

    this.handleChangeNIM = this.handleChangeNIM.bind(this);
    this.handleChangenama = this.handleChangenama.bind(this);
  }

  handleChangeNIM(event) {
    this.setState({nim: event.target.value});
  }
  
  handleChangenama(event) {
    this.setState({nama: event.target.value});
  }

  handleDelete(){
    axios.delete('http://localhost:8000/user/delete', { data:{
      "NIM" : this.state.nim,
      "nama" : this.state.nama}
    }).then((response) => {
        alert("Account is deleted!");
      },(error) => {
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
            <h5 class="card-title text-center">Hapus Akun</h5>
            <form class="form-cek-saldo ">
              <div class="form-cek-saldo-group">
              <label for="inputNIM">NIM</label>
                <input type="text" id="inputNIM" class="form-control mb-2 mt-1" placeholder="NIM" value={this.state.nim} onChange={this.handleChangeNIM} required autofocus/>
               
              </div>

              <div class="form-cek-saldo-group">
              <label for="inputNama">Nama Lengkap</label>
                <input type="text" id="inputNama" class="form-control mb-2 mt-1" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChangenama} required/>
               
              </div>

              <button class="btn btn-lg btn-info btn-block my-4 k" type="button" onClick = {()=>this.handleDelete()} >Hapus Akun</button>
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

export default DeleteAkun