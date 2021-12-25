/*
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkımda ve iletişim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log("url: ",url)

    if(url === '/'){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write('<h1>Welcome to Homepage</h1>')
    }
    else if(url === '/about'){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write('<h1>Welcome to About Page </h1>')
    }
    else if(url === '/contact'){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write('<h1>Welcome to Contact Page</h1>')
    }
    else {
        res.writeHead(200, {'Content-type':'text/html'})
        res.write('<h1>404 Page Not Found!</h1>')
    }

    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Port is working on ${PORT} successfully`)
});
