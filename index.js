import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("Halo eka, ini express pertama kamu");
});

app.get("/about", (req, res) => {
    res.send("Halo eka, ini halaman about");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/eka", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/eka", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/eka", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})