/*
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  
    switch (ctx.url) {
        case '/':
            ctx.body ="<h1 style='text-align:center'>Welcome to Home Page</h1>"
            break;
        case '/about':
            ctx.body ="<h1 style='text-align:center'>Welcome to About Page</h1>"
            break;    
        case '/contact':
            ctx.body ="<h1 style='text-align:center'>Welcome to Contact Page</h1>"
            break;    
        default:
            ctx.body ="<h1 style='text-align:center'>404 Page Not Found</h1>"
            break;
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`PORT working on ${PORT} successfully `)
});