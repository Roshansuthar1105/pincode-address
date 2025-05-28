# 📦 pincode-address

Fetch Indian location details using a 6-digit PIN code via India Post's public API.

## 🌐 Description

`pincode-address` is a lightweight Node.js module that uses India Post’s public API to fetch detailed address information such as post office name, district, state, and region, based on the provided PIN code.

---

## 🚀 Installation

```bash
npm install pincode-address
```

---

## 📚 Usage

```js
const { getPincodeInfo } = require('pincode-address');

(async () => {
  const info = await getPincodeInfo('302022');
  console.log(info);
})();
```

### ✅ Output:

```json
[
  {
    Name: 'Bilwa',
    Description: null,
    BranchType: 'Branch Post Office',
    DeliveryStatus: 'Delivery',
    Circle: 'Rajasthan',
    District: 'Jaipur',
    Division: 'Jaipur City',
    Region: 'Jaipur HQ',
    Block: 'Sanganer',
    State: 'Rajasthan',
    Country: 'India',
    Pincode: '302022'
  },
  {
    Name: 'Shri Ram Ki Nangal',
    Description: null,
    BranchType: 'Branch Post Office',
    DeliveryStatus: 'Delivery',
    Circle: 'Rajasthan',
    District: 'Jaipur',
    Division: 'Jaipur City',
    Region: 'Jaipur HQ',
    Block: 'Jaipur',
    State: 'Rajasthan',
    Country: 'India',
    Pincode: '302022'
  },
  {
    Name: 'Sitapura Industrial Area',
    Description: null,
    BranchType: 'Sub Post Office',
    DeliveryStatus: 'Delivery',
    Circle: 'Rajasthan',
    District: 'Jaipur',
    Division: 'Jaipur City',
    Region: 'Jaipur HQ',
    Block: 'Jaipur',
    State: 'Rajasthan',
    Country: 'India',
    Pincode: '302022'
  }
]
```

---

## 🧪 Input Validation

The input must be a **6-digit** Indian PIN code, otherwise an error is thrown.

```js
await getPincodeInfo("123"); // ❌ Error: Invalid PIN code. It must be 6 digits.
```

---

## 📦 API Reference

### `getPincodeInfo(pincode: string): Promise<PostOffice[] | null>`

- **pincode** - a valid 6-digit string
- **returns** - an array of post office objects or `null` if not found

---

## 📄 License

MIT

---

## 👤 Author

**Roshan Suthar**  
GitHub: [Roshansuthar1105](https://github.com/Roshansuthar1105)

---

## 🛠️ Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## 🐛 Issues

If you encounter any issues or bugs, please report them [here](https://github.com/Roshansuthar1105/pincode-address/issues).
