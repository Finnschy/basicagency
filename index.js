const express = require("express")
const app = express()
const navData = require("./nav.json")

const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

navData.forEach(navi => {
    app.get(`${navi.url}`, (req, res) => {
        res.render(`${navi.render}`, {title: `${navi.name}`, navData})
    })
})




app.listen(PORT, () => console.log(`http://localhost:${PORT}`))