import React, { Component } from 'react';
import './imageheader.css';
import image1 from '../assets/images/img1.jpg';
import image3 from '../assets/images/img3.jpg';
import image2 from '../assets/images/img2.jpg';

class ImageHeading extends Component{
    render(){
        return(
            <div className='imagebox'>
               <h1 className='imagelistlabel'>Photo Reviews (35)</h1>
               <div>
                   <ul className='imagemenu'>
                        <li>
                        <img src={image1} />
                        </li>
                        <li>
                        <img src={image2} />
                        </li>
                        <li>
                        <img src={image3} />
                        </li>
                        <li>
                        <img src={image1} />
                        </li>
                        <li>
                        <img src={image2} />
                        </li>
                        <li>
                        <img src={image3} />
                        </li>
                        <li>
                        <img src={image1} />
                        </li>
                        <li>
                        <img src={image2} />
                        </li>
                   </ul>
                </div>
            </div>
        );
    }
}
export default ImageHeading;