import React, {useEffect} from 'react';

export const Banner = () => {
    useEffect(() =>{
      console.log("UseEffect is called")
    })
    return(
      <section className="banner-section">
          <img src={process.env.PUBLIC_URL + '/images/banner.jpg'} className="img-fluid" alt="En Banner"/>  
      </section>
    );
}