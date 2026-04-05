import React, { useState } from 'react';

const ControlPanel = () => {
    const [apiKey, setApiKey] = useState('');

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };

    const handleTradeButtonClick = (action) => {
        console.log(`Trade action: ${action}, API Key: ${apiKey}`);
        // Implement trading logic here using the API key
    };

    return (
        <div className="control-panel">
            <input
                type="text"
                placeholder="Enter your API Key"
                value={apiKey}
                onChange={handleApiKeyChange}
            />
            <button onClick={() => handleTradeButtonClick('buy')}>Buy</button>
            <button onClick={() => handleTradeButtonClick('sell')}>Sell</button>
        </div>
    );
};

export default ControlPanel;