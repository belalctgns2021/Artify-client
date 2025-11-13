import React from 'react';
import Navbar from '../components/Navbar';
import Banner from './Banner';
import Artists from './Artists';
import CommunityHighlights from './CommunityHighlights';
import FeaturedArtworks from './FeaturedArtworks';
const FeaturedArtpromise=fetch('http://localhost:3000/latest-artifys')
.then(res=>res.json());
const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <FeaturedArtworks FeaturedArtpromise={FeaturedArtpromise}></FeaturedArtworks>
    <Artists></Artists>
    <CommunityHighlights></CommunityHighlights>
        </div>
    );
};

export default Home;