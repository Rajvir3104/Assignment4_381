import React from 'react';
import Header from './components/Header.js';
import HomeMainSection from './components/HomeMainSection.js';
import Footer from './components/Footer.js';

function HomePage(){
    return(
    <div>
        <Header />
        <HomeMainSection />
        <Footer />
    </div>  
    );
}

export default HomePage;