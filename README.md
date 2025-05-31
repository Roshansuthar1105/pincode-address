# 📦 pincode-address

[![npm version](https://img.shields.io/npm/v/pincode-address.svg)](https://www.npmjs.com/package/pincode-address)
[![npm downloads](https://img.shields.io/npm/dt/pincode-address.svg)](https://www.npmjs.com/package/pincode-address)
[![MIT License](https://img.shields.io/npm/l/pincode-address.svg)](LICENSE)

> A lightweight Node.js module to fetch Indian location details using a 6-digit PIN code via India Post’s public API.

---

## 🌐 Overview

`pincode-address` allows developers to retrieve detailed address data — including post office names, branch types, delivery status, district, state, and more — using a valid Indian PIN code.

Useful for:
- Auto-filling forms
- Validating delivery zones
- Enriching location-based features

---

## 🚀 Installation

```bash
npm install pincode-address
```

---

## 🔍 Live Demo

Try it live: [pincode-address.netlify.app](https://pincode-address.netlify.app)

🔹 Features:
- Input validation for 6-digit PIN codes  
- Real-time fetch of address data  
- User-friendly output format  
- Built using React.js

---

## 📚 Usage

```js
const { getPincodeInfo } = require('pincode-address');

(async () => {
  const info = await getPincodeInfo('302022');
  console.log(info);
})();
```

### ✅ Example Output:

```json
[
  {
    "Name": "Bilwa",
    "BranchType": "Branch Post Office",
    "DeliveryStatus": "Delivery",
    "District": "Jaipur",
    "State": "Rajasthan",
    "Country": "India",
    "Pincode": "302022"
  },
  ...
]
```

---

## 🧪 Input Validation

```js
await getPincodeInfo("123"); 
// ❌ Error: Invalid PIN code. It must be 6 digits.
```

---

## 📦 API Reference

### `getPincodeInfo(pincode: string): Promise<PostOffice[] | null>`

| Parameter | Type     | Description                      |
|-----------|----------|----------------------------------|
| `pincode` | `string` | A valid 6-digit Indian PIN code  |

Returns:  
- `Array` of post office objects, or  
- `null` if no results are found

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 👤 Author

**Roshan Suthar**  
📦 GitHub: [@Roshansuthar1105](https://github.com/Roshansuthar1105)

---

## 🛠️ Contributing

Contributions are welcome!  
Feel free to fork the repo, create a branch, and submit a pull request.

> For major changes, please [open an issue](https://github.com/Roshansuthar1105/pincode-address/issues) first to discuss your ideas.

---

## 🐛 Reporting Issues

Found a bug or issue?  
Please report it here → [GitHub Issues](https://github.com/Roshansuthar1105/pincode-address/issues)

---

## 💡 Like this package?

Give it a ⭐ on [GitHub](https://github.com/Roshansuthar1105/pincode-address) and share it with your network!
