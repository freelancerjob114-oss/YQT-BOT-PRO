import React from 'react';

const SignalPanel = ({signalType, confidence}) => {
    return (
        <div className="signal-panel">
            <h1>{signalType === 'BUY' ? '💰 Buy Signal' : '📉 Sell Signal'}</h1>
            <p>Confidence Level: {confidence}%</p>
            <style jsx>{` 
                .signal-panel { 
                    border: 2px solid ${signalType === 'BUY' ? 'green' : 'red'};
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    color: ${signalType === 'BUY' ? 'green' : 'red'};
                }
            `}</style>
        </div>
    );
};

export default SignalPanel;