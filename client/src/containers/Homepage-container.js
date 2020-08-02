import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel/Carousel-homepage';

const styles = { marginTop: '-33px' };

const Homepage = () => (
  <div>
    <Helmet>
      <title>Project-K</title>
      <meta name="Project-K" content="Project-K" />
    </Helmet>
    <HeroBanner />
    <div style={styles}>
      <CarouselHomepage />
    </div>
  </div>
);

export default Homepage;
