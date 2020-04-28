import React from 'react';

import {Link} from 'react-router-dom';




const Menu = () => {

         return(

            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li><Link to='/businesses'>Vendors</Link></li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>

        )

    
}

export default Menu;