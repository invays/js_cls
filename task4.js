//task 4
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = 9

switch (a) {
    case 0:
        console.log(0)
        break;
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
        console.log(3)
        break;
    case 4:
        console.log(4)
        break;
    case 5:
        console.log(5)
        break;
    case 6:
        console.log(6)
        break;
    case 7:
        console.log(7)
        break;
    case 8:
        console.log(8)
        break;
    case 9:
        console.log(9)
        break;
    case 10:
        console.log(10)
        break;
    case 11:
        console.log(11)
        break;
    case 12:
        console.log(12)
        break;
    case 13:
        console.log(13)
        break;
    case 14:
        console.log(14)
        break;
    case 15:
        console.log(0)
        break;
    default:
        console.log(`Вы ввели число не от 0 до 15! Но для вас я сделаю исключение и выведу число ${a}`)
        break;
}