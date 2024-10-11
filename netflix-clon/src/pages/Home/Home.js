/*import React, { components } from 'react'
import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () =>{
 
    return (
        <>

      <Header/>
      <Footer/>
      </>
    );
  };

export default Home */

/*import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Netflix Clone Home Page!</h1>
        </div>
    );
};

export default Home;*/ // Ensure this line is present

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <RowList />
            <Footer />
        </>
    );
};

export default Home;