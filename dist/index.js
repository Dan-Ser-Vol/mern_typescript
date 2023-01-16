import express from "express";
const app = express();
app.use('/', (req, res) => {
    res.send("Hello world!");
});
app.use('/auth', (req, res) => {
    res.send("Hello user!");
});
app.listen(3003, () => console.log("Server worked"));
//# sourceMappingURL=index.js.map