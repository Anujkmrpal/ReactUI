import React, { Component } from 'react';
import './writereview.css';
import Heading from '../components/heading';
import Rate from '../components/ratebar';
import Imagespace from '../components/imageupload';
class writereview extends Component{
    render(){
        return(
            <div className='writereviewstyle clearfix'>
                <div className='left'>
                <Heading/>
                <Rate/>
                </div>
                <div className='right'>
                <Imagespace/>
                </div>
            </div>
        );
    }
}
export default writereview;