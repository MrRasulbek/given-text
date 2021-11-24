function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               let r = random(0, 255)
               let g = random(0, 255)
               let b = random(0, 255)
               return `rgb(${r},${g},${b})`
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);


let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas velit quo voluptatibus ipsa molestias accusantium vel impedit autem illum?"
let vowels = "EUIOAeuioa"
let consonants = "QWRTYPSDFGHJKLZXCVBNMqwrtypsdfghjklzxcvbnm"
let numberOne = 0
let numberTwo = 0
for (let i = 0; i < text.length; i++) {
               const element = text[i];
               for (let j = 0; j < vowels.length; j++) {
                              const content = vowels[j];
                              if (element == content) {
                                             numberOne++
                              }
               }
}
for (let i = 0; i < text.length; i++) {
               const element = text[i];
               for (let j = 0; j < consonants.length; j++) {
                              const content = consonants[j];
                              if (element == content) {
                                             numberTwo++
                              }
               }
}
let information = `Hurmatli foydalanuvchi matn haqidagi malumotlar tayyor !
Matnda unli harflar soni: ${numberOne}ta
Matnda undosh harflar soni: ${numberTwo}ta
Jami harflar soni: ${numberOne+numberTwo}ta
Bu dasturdan foydalanganingiz uchun rahmat !`
console.log(information);