const axios = require("axios");
async function getPincodeInfo(pincode) {
  if (!/^\d{6}$/.test(pincode)) {
    throw new Error("Invalid PIN code. It must be 6 digits.");
  }

  const url = `https://api.postalpincode.in/pincode/${pincode}`;
  const response = await axios.get(url);

  const data = response.data[0];

  if (data.Status !== "Success" || !data.PostOffice) {
    return null;
  }

  return data.PostOffice;
}
module.exports = { getPincodeInfo };
