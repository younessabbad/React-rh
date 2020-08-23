import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Welcome extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container text-xl text-center'>
            <div className='w-100 m-auto'>
                <h3 className='container text-xl-center pt-10'>Bienvenue au service des ressources humaines</h3>
                <span>Cliquez ici pour 
                    <Link className='text-blue-600 hover:text-red-600' to='/home'> Ouvrez l'application</Link>
                    </span>
                    </div>
            </div>
         );
    }
}
 
export default Welcome;