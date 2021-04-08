import React from 'react';

export const Banner = () => {
    return(
      <section className="banner-section">
          <img src={process.env.PUBLIC_URL + '/images/banner.jpg'} className="img-fluid"/>  
      </section>
    );
}