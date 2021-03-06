import random from "./mock/random";

export default {
  ...random,
  "/example": "https://easy-mock.com/mock/5c36fa23c0fe6620a6a800be",
  "/api/array": [
    { name: "apple", value: 1.2 },
    { name: "orange", value: 0.95 }
  ],
  "/api/object": {
    shop: {
      taxPercent: 8,
      items: [{ name: "apple", value: 1.2 }, { name: "orange", value: 0.95 }]
    }
  },
  "/api/function": function(req, res) {
    res.end("Mock Function.");
  }
};
