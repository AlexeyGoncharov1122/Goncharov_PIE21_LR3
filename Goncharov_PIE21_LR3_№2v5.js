alert("Пользователю в первом окне нужно ввести вещественное число Price - цену 1 кг конфет (Price > 0), \
       Далее на экран последовательно (в отдельных окнах) выводится стоимость 0.1, 0.2, . . . , 1 кг конфет.")
var price = -1;   // Цена 1 кг конфет
/* Программа запрашивает значение Price, пока оно не соответствует условиям: оно не является числом или является целым числом 
или Price <= 0*/ 
do {
       price = prompt("Введите Price: ", -1);
} while (String(Number(price)) == 'NaN' || price / Math.floor(price) == 1 || price <= 0);
price = Number(price);   // Преобразование к типу данных "Number"
price = price.toFixed(2);   // Округление до сотых ("до копеек")
var list = [];   // Стоимость конфет разных весов
let portion;   // Стоимость порции
let i = 1;   // Счётчик повышения веса
let j;   // Вывод i в качестве веса
while (i <= 10) {
       portion = (price / 10 * i).toFixed(2);
       j = i / 10;
       alert(j + " кг - " + portion + " рублей")
       list.push(j + " кг - " + portion + " рублей" + "\ ");
       i++;
}
alert(list);