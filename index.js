/*
employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/
const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log("Dosya yazılırken hata oluştu.");
    else console.log("Dosya başarıyla yazıldı.");
  }
);

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log("Dosya okunurken bir hata oluştu: ", err);
  else console.log("Dosya okundu: ", data);
});

//veriyi güncelleme
fs.writeFile(
  "employees.json",
  '{"name": "Employee 2 Name", "salary": 5000}',
  "utf8",
  (err, data) => {
    if (err) console.log("Dosya güncelenirken hata oluştu.");
    else console.log("Dosya başarıyla güncellendi.");
  }
);

//veri eklemek
/*fs.appendFile('employees.json', ',{"name": "Employee 3 Name", "salary": 5000}', 'utf8', (err) => {
    if(err) console.log("Dosyaya data eklerken hata oluştu.")
    else console.log("Dosyaya  data başarıyla eklendi.")
})*/

fs.unlink("employees.json", (err) => {
  if (err) console.log("Dosya silinirken bir hata oluştu.");
  else console.log("Dosya başarıyla silindi.");
});
