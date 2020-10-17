import React from 'react';
import Login from '../../Login/Login';
import CarouselData from '../CarouselData/CarouselData';
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import MultiLogo from '../MultiLogo/MultiLogo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <MainHeader></MainHeader>
            <MultiLogo></MultiLogo>
            <Services></Services>

            <CarouselData></CarouselData>
            <ClientReview></ClientReview>

            <Footer></Footer>
            
          
            
        </div>
    );
};

export default Home;