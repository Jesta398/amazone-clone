import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/51xWkwraNgL._SX1500_.jpg" alt=
                    ""></img>
                <div className="home_row">

                <Product title="Iphone 12 Pro Max" price={100000} image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
                    <Product title="HP 680 Original Ink Advantage Cartridge" price={3000} image="https://m.media-amazon.com/images/I/71kSLhL3NDL._AC_UL480_QL65_.jpg" rating={5} />

                </div>
                <div className="home_row">
               
                <Product title="MI Smart Band 5" price={1300} image="https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL480_QL65_.jpg" rating={4} />
                <Product title="Samsung Galaxy M31" price={20000} image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UL480_QL65_.jpg" rating={4} />
                <Product title="Sony Bravia" price={25000} image="https://m.media-amazon.com/images/I/91QD0vRZdVL._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                </div>
                <div className="home_row">
                <Product title="MI Earbuds" price={489} image="https://m.media-amazon.com/images/I/71mQ9oKDMLL._AC_UL480_FMwebp_QL65_.jpg" rating={3} />
                <Product title="LG Smart TV" price={30000} image="https://m.media-amazon.com/images/I/81e0B7ek-8L._AC_UL480_FMwebp_QL65_.jpg" rating={4} />

                 </div>
    
            </div>

        </div>

    )
}

export default Home
