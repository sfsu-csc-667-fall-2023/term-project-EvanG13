const path = require("path")

// Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "static")))

// Route Imports
const rootRoutes = require("./routes/root")

// Middleware Imports
const { displayErrors } = require("./middleware/display-errors")


// Mount Routes
app.use("/", rootRoutes);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



// Display Error (End Middleware)
app.use(displayErrors);
