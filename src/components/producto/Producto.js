import React from 'react';
import Black from './black.png';
import Green from './green.png';
import Logo from './logo.png';
import Orange from './orange.png';
import Red from './red.png';
import Blue from './blue.png';
import './producto.css';
import './fonts.css';
import { FaShareAlt} from 'react-icons/fa';

const Productocard = () => {
    
    return(
        <>
           <div className="container">
               <div className=" row">
               <div class="shoeBackground col-6">
                    <div class="gradients">
                            <div class="gradient second" color="blue"></div>
                            <div class="gradient" color="red"></div>
                            <div class="gradient" color="green"></div>
                            <div class="gradient" color="orange"></div>
                            <div class="gradient" color="black"></div>
                    </div>
                    <h1 class="nike">nike</h1>
                    <img src={Logo} alt="" class="logo"/>
                    <a href="#" class="share" target="_blank"><FaShareAlt className="m-3"/></a>

                    <img src={Blue} alt="" class="shoe show" color="blue"/>
                    <img src={Red} alt="" class="shoe" color="red"/>
                    <img src={Green} alt="" class="shoe" color="green"/>
                    <img src={Orange} alt="" class="shoe" color="orange"/>
                    <img src={Black} alt="" class="shoe" color="black"/>
                </div>
                <div className="col-6">
                <div className="shoeName">
                    <div>
                        <h1 class="big">Nike Zoom KD 12</h1>
                        <span class="new">new</span>
                    </div>
                    <h3 class="small">Men's running shoes</h3>
                </div>
                <div class="description">
                    <h3 class="title">Product Info</h3>
                    <p class="text">The Nike Zoom KD 12 is a great performer with outstanding cushioning and no real weaknesses!</p>
                </div>
                <div class="color-container">
                    <h3 class="title">Color</h3>
                    <div class="colors">
                        <span class="color active" primary="#2175f5" color="blue"></span>
                        <span class="color" primary="#f84848" color="red"></span>
                        <span class="color" primary="#29b864" color="green"></span>
                        <span class="color" primary="#ff5521" color="orange"></span>
                        <span class="color" primary="#444" color="black"></span>
                    </div>
                </div>
                <div class="size-container">
                    <h3 class="title">size</h3>
                    <div class="sizes">
                        <span class="size">7</span>
                        <span class="size active">8</span>
                        <span class="size">9</span>
                        <span class="size">10</span>
                        <span class="size">11</span>
                    </div>
                </div>
                <div class="buy-price">
                    <a href="#" class="buy"><i class="fas fa-shopping-cart"></i>Add to card</a>
                    <div class="price">
                        <i class="fas fa-dollar-sign"></i>
                        <h1>189.99</h1>
                    </div>
                </div>
                </div>
               </div>
           </div>
            
        </>
)};


export default Productocard;