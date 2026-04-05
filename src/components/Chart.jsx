import React from 'react';
import { Chart } from 'react-chartjs-2';

const CandlestickChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Candlestick Data',
                data: data.values,
                type: 'candlestick',
                backgroundColor: 'rgba(75,192,192,1)',
            }
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Candlestick Chart with Technical Indicators</h2>
            <Chart type='candlestick' data={chartData} options={options} />
        </div>
    );
};

export default CandlestickChart;
