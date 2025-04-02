import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_yVq8HwNOsw6DHfkUhodRWZRW9sl8mIRgLFf89QHU');


export async function currencyConverter(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    const convertedAmount = units * multiplier;
    return convertedAmount;
}