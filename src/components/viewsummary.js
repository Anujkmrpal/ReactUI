import React, { Component } from 'react';
import './viewsummary.css';
import Icon from 'react-icons-kit';
import newimg from '../assets/images/img1.jpg';
import {thumbsUp} from 'react-icons-kit/fa/thumbsUp';
import {thumbsDown} from 'react-icons-kit/fa/thumbsDown'

class summary extends Component{
    render(){
        return(
            <div className='viewsummarysection'>
            <div className='sectionone'>
            <p className='person'>Shelly B.</p>
                <div className='pera'>
                    <p className='peraheading'>Comfy, budget friendly, simple</p>
                    <p className='perasummary'>
                        We took our survey, determined our mattress type and ordered it with a simple process. We've been sleeping on the matress for serval months now and have absolutely no complaints. Super compy!

                    </p>
                    <img src={newimg}/>
                    <div>
                    <span><Icon icon={thumbsUp}/></span> <span className='unlike'> <Icon icon={thumbsDown}/></span>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default summary;