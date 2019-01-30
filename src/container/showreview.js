import React, { Component } from 'react';
import './showreview.css';
import Imageheading from '../components/imageheader';
import Chartbox from '../components/chartbox';
import Summary from '../components/viewsummary';
import Secondchart from '../components/secondchart';
class showreview extends Component{
    render(){
        return(
            <div className='showreviewsection'>
                <div>
                <Imageheading/>
                </div>
                <div className='showreviewcolumn'>
                <div className='chart'>

                <Chartbox/>
                </div>
                <div className='summary'>
                <Summary/>
                </div>
                <div className='secnchart'>
                    <Secondchart/>
                </div>
                </div>
            </div>
        );
    }
}
export default showreview;