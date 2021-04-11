/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 —
 значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить
 одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

let a = 67, b = 46;
let operator = 'gg' // сложение, вычитание, деление, умножение

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2
        case 'вычитание':
            return arg1 - arg2
        case 'деление':
            return arg1 / arg2;
        case 'умножение':
            return arg1 * arg2;
        default:
            return `Проверьте корректность операции! Вы ввели операцию: ${operation}`
    }
}
console.log(mathOperation(a, b, operator))