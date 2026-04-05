// indicators.js

/**
 * Calculate Exponential Moving Average (EMA)
 * @param {Array<number>} prices - Array of price data
 * @param {number} period - The period of the EMA
 * @returns {number} - The calculated EMA value
 */
function calculateEMA(prices, period) {
    const k = 2 / (period + 1);
    let ema = prices[0]; // Start with the first price
    for (let i = 1; i < prices.length; i++) {
        ema = (prices[i] - ema) * k + ema;
    }
    return ema;
}

/**
 * Calculate Parabolic SAR
 * @param {Array<number>} high - Array of high prices
 * @param {Array<number>} low - Array of low prices
 * @param {number} af - Acceleration factor
 * @param {number} maxAf - Maximum acceleration factor
 * @returns {Array<number>} - The calculated PSAR values
 */
function calculatePSAR(high, low, af = 0.02, maxAf = 0.2) {
    const psar = [];  // Initialize PSAR array
    let isBullish = true;  // Trend direction
    let ep = low[0];  // Extreme point
    let sar = low[0];  // Start with the first low
    let afCurrent = af;  // Current acceleration factor

    for (let i = 1; i < high.length; i++) {
        if (isBullish) {
            sar = Math.min(sar + afCurrent * (ep - sar), low[i-1], low[i]);
            if (high[i] > ep) {
                ep = high[i];
                afCurrent = Math.min(afCurrent + af, maxAf);
            }
            if (low[i] < sar) {
                isBullish = false;
                sar = ep;
                ep = low[i];
                afCurrent = af;
            }
        } else {
            sar = Math.max(sar + afCurrent * (ep - sar), high[i-1], high[i]);
            if (low[i] < ep) {
                ep = low[i];
                afCurrent = Math.min(afCurrent + af, maxAf);
            }
            if (high[i] > sar) {
                isBullish = true;
                sar = ep;
                ep = high[i];
                afCurrent = af;
            }
        }
        psar.push(sar);
    }
    return psar;
}

/**
 * Calculate Fractal Indicator
 * @param {Array<number>} prices - Array of price data
 * @returns {Object} - Returns an object containing "high" and "low" fractals
 */
function calculateFractals(prices) {
    const highs = [];
    const lows = [];
    for (let i = 2; i < prices.length - 2; i++) {
        if (prices[i] > prices[i - 1] && prices[i] > prices[i + 1] && prices[i] > prices[i - 2] && prices[i] > prices[i + 2]) {
            highs.push(prices[i]);
        }
        if (prices[i] < prices[i - 1] && prices[i] < prices[i + 1] && prices[i] < prices[i - 2] && prices[i] < prices[i + 2]) {
            lows.push(prices[i]);
        }
    }
    return { high: highs, low: lows };
}

// Export functions for external use
module.exports = { calculateEMA, calculatePSAR, calculateFractals };