// Boshlang'ich arrayni yaratamiz va unga 4 ta element qo'shamiz
let myArray = [1, 2, 3, 4];

// Arrayning uzunligini console va alertda chiqaramiz
console.log("Array uzunligi: " + myArray.length);
alert("Array uzunligi: " + myArray.length);

// confirm orqali foydalanuvchidan elementni o'chirishni so'raymiz
if (confirm("Arraydan bitta element o'chirilsinmi?")) {
    myArray.pop(); // Oxirgi elementni olib tashlaymiz
}

// Natijani console'da chiqaramiz
console.log("Yangi array: " + myArray);
alert("Yangi array uzunligi: " + myArray.length);
