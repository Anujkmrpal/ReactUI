import React, { Component } from 'react';
import './chartbox.css';
import { Chart } from "react-google-charts";

class chart extends Component{
    render(){
        return(
            <div className='chartboxsection'>
                <h1>All Review (168)</h1>
                <div className='chartbox'>
                <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', 'Overall', 'Quality', 'Design','Packaging','Delivery'],
                    ['1 Star', 1, 2,5,3,4],
                    ['2 Star', 2, 4,5,2,3],
                    ['3 Star', 4, 2,1,3,2],
                    ['4 Star', 1, 5,3,4,5],
                    ['5 Star', 4, 6,4,2,1],
                ]}
                options={{
                    title: '',
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: '',
                    minValue: 0,
                    },
                    vAxis: {
                    title: '',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
                />
                </div>
            </div>
        );
    }
}
export default chart;