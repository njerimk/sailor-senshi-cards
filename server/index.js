const path = require('path');
const express = require("express");
//To serve backend to port 3001
const PORT = process.env.PORT || 3001;

const app = express();
//Displays react app when requested from user using express.static
app.use(express.static(path.resolve(__dirname, '..client/build')))
//api endpoint 
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
})

//All other GET requests not handled by api route the server will respond with the React app
app.get('*', (req,res) => {
    const index = path.join(__dirname, 'build', 'index.js')
    res.sendFile(index);
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});