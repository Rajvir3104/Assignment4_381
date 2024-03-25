import React from 'react';
import  './HomeComponents.css';

function Header(){
    return(
        <div>
            <header>
                <img src="/images/logo.png" alt="Company Logo" height="100px"></img>
                <div>Company Name</div>
            </header>

            <nav>
                <a href='/'>Home</a>
                <a href='/Products'>Products</a>
                <a href='/Login'>Login</a>
            </nav>
        </div>
    );
}

export default Header;