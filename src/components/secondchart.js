import React, { Component } from 'react';
import './secondchart.css';
import { Chart } from "react-google-charts";
class secondchart extends Component{
    render(){
        return(
            <div class='secchart'>
               <Chart
                width={'400px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', 'Popularity'],
                    ['Overall', 33],
                    ['Quality', 26],
                    ['Design', 22],
                    ['Packaging', 10], // Below limit.
                    ['Delivery', 9], // Below limit.
                ]}
                options={{
                    title: '',
                    sliceVisibilityThreshold: 0.2, // 20%
                }}
                rootProps={{ 'data-testid': '7' }}
                />
            </div>
        );
    }
}
export default secondchart;