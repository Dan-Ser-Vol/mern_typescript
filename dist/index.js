import express from "express";
const app = express();
app.use('/', (req, res) => {
    res.send("Hello world!");
});
app.listen(3002, () => console.log("Server worked"));
//# sourceMappingURL=index.js.map