// signalEngine.js

// Function to generate a BUY or SELL signal
function generateSignal(currentPrice, previousPrice) {
    if (currentPrice > previousPrice) {
        return 'BUY';
    } else if (currentPrice < previousPrice) {
        return 'SELL';
    } else {
        return 'HOLD';
    }
}

// Example usage
const currentPrice = 150;
const previousPrice = 145;
const signal = generateSignal(currentPrice, previousPrice);
console.log(`Signal: ${signal}`); // Output will be 'BUY' if the current price is higher

module.exports = generateSignal;