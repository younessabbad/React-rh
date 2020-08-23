import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Create extends Component {

    state = {
      person_name: '',
      role: '',
      Condidat_number:''
    }
  
  onChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit= (e) => {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      role: this.state.role,
      Condidat_number: this.state.Condidat_number
    };
    console.log(obj)
    axios.post('http://localhost:3000/Condidat/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      role: '',
      Condidat_number: ''
    })
  }
 
  render() {
    return (

      <div>
        <div className="bg-gray-800 p-3 w-full text-xl text-center">
        <nav className="flex justify-between">
          <Link to='/home' className="">Département des ressources humaines.</Link>
          <div className="flex flex-row" >
            <ul className='float-right flex'>
              <li className="px-3">
                <Link to='/home' className="">Home</Link>
              </li>
              <li className="px-3">
                <Link to='/create' className="">Create</Link>
              </li>
              <li className="px-3">
                <Link to='/rh' className="">Rh</Link>
              </li>
              <li className="pl-3 pr-24">
                <Link to='/index' className="">Index</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
          <div className='container' style={{ marginTop: 10 }}>
              <h3 align="center">Ajouter un nouveau Condidat</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Nom du condidat:  </label>
                      <input 
                        type="text" 
                        name='person_name'
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Role: </label>
                      <input type="text"
                      name='role' 
                        className="form-control"
                        value={this.state.role}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Numéro Condidat: </label>
                      <input type="text" 
                        name='Condidat_number'
                        className="form-control"
                        value={this.state.Condidat_number}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                        value="Register Condidat" 
                        className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        </div>
    )
  }
}