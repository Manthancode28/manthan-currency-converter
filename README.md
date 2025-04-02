# Manthan Currency Converter

A simple and lightweight currency converter for Node.js, using real-time exchange rates from FreeCurrencyAPI.

## 📦 Installation

Install the package via NPM:

```sh
npm install manthan-currency-converter
```

## 🚀 Usage

Import and use the `currencyConverter` function to convert currency values:

### **Example Usage**

```js
import { currencyConverter } from "manthan-currency-converter";

async function convertCurrency() {
    const amount = 100; // Amount to convert
    const fromCurrency = "USD";
    const toCurrency = "INR";
    
    const result = await currencyConverter(fromCurrency, toCurrency, amount);
    console.log(`Converted Amount: ${result} ${toCurrency}`);
}

convertCurrency();
```

## 🔗 API Reference

### `currencyConverter(fromCurrency, toCurrency, amount)`

| Parameter       | Type     | Description                                    |
|---------------|---------|--------------------------------|
| `fromCurrency` | `string` | The currency code to convert from (e.g., "USD"). |
| `toCurrency`   | `string` | The currency code to convert to (e.g., "INR").   |
| `amount`       | `number` | The amount to be converted.                    |

### **Returns:**
- A **number** representing the converted currency value.

## 🔥 Features
- ✅ Supports real-time exchange rates.
- ✅ Easy-to-use function for quick conversions.
- ✅ Lightweight and efficient.

## 📝 License
This package is licensed under the **MIT License**.

## 👨‍💻 Author
- **Manthan** - [GitHub](https://github.com/your-username)

---

Enjoy hassle-free currency conversions! 🚀

