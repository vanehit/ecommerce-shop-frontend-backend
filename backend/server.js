const express = require ('express')
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const mercadopagoRoute = require("./routes/mercadopago");


dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB se conectó satisfactoriamente!"))
.catch((err) => {
  console.log(err);
});

// Initialize express
const app = express();

//Settings
//middlewares
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use('/static', express.static(__dirname + '../frontend-react'));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", mercadopagoRoute);





app.listen(process.env.PORT || 8080, () => {
    console.log("Backend server is running!");
  });
  
