const express = require("express");
const app = express();
const router = express.Router();
app.use(express.static("public"));
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`
El servidor esta levantado ${PORT}
http://localhost:${PORT}
`))


const mainRouter = require("./routers/main")


app.use("/", mainRouter);
app.use("/about", mainRouter);
