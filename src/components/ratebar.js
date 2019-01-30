import React, { Component } from 'react';

import './ratebar.css';

class rate extends Component{
    
    render(){
        return(
            <div className='scrollbarbox'>
                <div className='sidebarcover clearfix'>
                <label>Overall</label>
                <input type="range" min="1" max="5" value='3' className="slider" id="myRange"/>
                </div>
                <div className='sidebarcover clearfix'>
                <label>Quality</label>
                <input type="range" min="1" max="5" value='4' className="slider" id="myRange"/>
                </div>
                <div className='sidebarcover clearfix'>
                <label>Design</label>
                <input type="range" min="1" max="5" value='2' className="slider" id="myRange"/>
                </div>
                <div className='sidebarcover clearfix'>
                <label>Packaging</label>
                <input type="range" min="1" max="5" value='1' className="slider" id="myRange"/>
                </div>
                <div className='sidebarcover clearfix'>
                <label>Delivery</label>
                <input type="range" min="1" max="10" className="slider" id="myRange"/>
                </div>
            </div>
        );
    } 
}
export default rate;