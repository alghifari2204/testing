const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    chacheDirectory: join(__dirname, '.chache', 'puppeteer'),
};