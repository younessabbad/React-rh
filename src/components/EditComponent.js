import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Edit extends Component {
  
  state = {
      person_name: '',
      role: '',
      Condidat_number:''
    }
  

  componentDidMount() {
      axios.get('http://localhost:4000/Condidat/edit/'+this.props.match.params.id)
          .then(res => {
              this.setState({ 
                person_name: res.data.person_name, 
                role: res.data.role,
                Condidat_number: res.data.Condidat_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  

  onSubmit = (e)=> {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      role: this.state.role,
      Condidat_number: this.state.Condidat_number
    };
    axios.post('http://localhost:4000/Condidat/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
      <div>
        <div className="bg-gray-800 p-3 w-full text-xl text-center">
                <nav className="flex justify-between">
                        <Link to='/' className="">Human Resources Dept.</Link>
                        <div className="flex flex-row" >
                        <ul className='float-right flex'>
                            <li className="px-3">
                            <Link to='/' className="">Home</Link>
                            </li>
                            <li className="px-3">
                            <Link to='/create' className="">Create</Link>
                            </li>
                            <li className="px-3">
                              <li className="px-3">
                            <Link to='/rh' className="">Rh</Link>
                            </li>
                            <Link to='/index' className="">Index</Link>
                            </li>
                            
                        </ul>
                        </div>
                    </nav>
                    </div>
        <div className='container' style={{ marginTop: 10 }}>
            <h3 align="center">Update Condidat Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
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
                      className="form-control"
                      name='role'
                      value={this.state.role}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Condidat Number: </label>
                    <input type="text" 
                      className="form-control"
                      name='Condidat_number'
                      value={this.state.Condidat_number}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Condidat" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </div>
    )
  }
}