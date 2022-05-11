import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://m.media-amazon.com/images/I/91YP7DfuOsL._SX3000_.jpg" alt="" />
            <div className="home_row">
                <Product id='12321341' title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' price={29.98} rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"/>
                <Product id='49538094' title="Roll over image to zoom in Kenwood Kitchen Machine kMix KMX750WH - 1000W|5L mixing bowl | K-beater, Whipping Tool & Dough Kneading Tool | 1 Year Warranty | White"
                price={499.23} rating={4}
                image="https://m.media-amazon.com/images/I/51yd+TT6YuL._SX679_.jpg"/>
            </div>
            <div className="home_row">
                <Product id='32193826' title='Noise ColorFit Ultra Smart Watch with 1.75" HD Display, Aluminium Alloy Body, 60 Sports Modes, Spo2, Lightweight, Stock Market Info, Calls & SMS Reply (Space Blue)' 
                price={82.98} rating={3}
                image="https://m.media-amazon.com/images/I/71MO+TXgPBL._SX679_.jpg"/>
                <Product id='12342931' title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)' price={59.38} rating={4}
                image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX679_.jpg"/>
                <Product id='93871624' title='Microsoft Surface GO 3 8VA-00013 10.5" (26.67 cms) Laptop (Intel Pentium T6600 Processor/8GB/128GB SSD/Windows 11 Home), Platinum' price={129.98} rating={5}
                image="https://m.media-amazon.com/images/I/71lkDaWTa8L._SX679_.jpg"/>
            </div>
            <div className="home_row">
                <Product id='782056219' title='Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q60AAKLXL (Black) (2021 Model)' price={189.18} rating={5}
                image="https://m.media-amazon.com/images/I/61NmgnB8MaL._SX679_.jpg"/>
            </div>
            <div className="home_row">
                <Product id='721656219' title='Samsung 676 L Side by Side Refrigerator (RS74R5101SL, Silver)' price={3089.18} rating={3}
                image="https://m.media-amazon.com/images/I/81zm2tvUtKL._SX679_.jpg"/>
                <Product id='297020422' title='Nike Youth Air Jordan 1 Mid Se GS Brushstroke Sail/Black/Cide/Chile Red' price={80.03} rating={4}
                image="https://m.media-amazon.com/images/I/71xuDEe-NPL._UX695_.jpg"/>
            </div>
            <div className="home_row">
                <Product id='780006209' title='Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) with Canon 24-105mm is II USM Lens and Sigma 150-600 mm f/5-6.3 DG OS HSM Lens' price={5007.18} rating={5}
                image="https://m.media-amazon.com/images/I/71tTLhIWn+L._SX679_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home