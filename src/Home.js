import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <img
        className='home__image'
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
         alt="banner"
         />

         {/*product */}
         <div className='home__row'>
         <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />

        <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />

         </div>

         <div className="home__row">
         <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />

        <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />

        <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />

         </div>

         <div className="home__row">
         <Product 
         id="1"
         title="The lean Startup"
         price={11.96}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXMHrCU57OlxcoCoWRRRPJhDaPbABzFIeI1wBaboUQ&s"
         />
         </div>

        

    </div>
  )
}

export default Home