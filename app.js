/*
CleanBlog proje klasörünü oluşturalım.
Package.json dosyasını oluşturalım.
Prettier ayarlarını yapalım.(İsteğe bağlı)
Express ve Nodemon modüllerini indirelim.
git init ile lokal repomuzu oluşturalım.
get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
.gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.
*/

const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.get('/', (req,res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.status(200).send(blog)
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port is working on ${PORT} successfully.`)
})