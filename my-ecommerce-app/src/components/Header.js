import React from 'react';

function Header(){
    return(
        <div>
            <header class="header">
                <img src="/images/logo.png" alt="Company Logo" class="logo" height="100px"></img>
                <div class="company-name">Company Name</div>
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