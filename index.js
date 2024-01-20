require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

const warehouseRoutes = require('./routes/warehouseRoute');
const inventoryRoutes = require('./routes/inventoryRoute');

app.get('/', (_req, res) => {
  res.send("Welcome to my API");
});

app.use('/warehouses', warehouseRoutes);
app.use('/inventories', inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
