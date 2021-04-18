let text = 985
let data = text.toString().split('')

function GetAnswer(arr_data) {
    this.units = Number(arr_data[0]),
        this.dozens = Number(arr_data[1]),
        this.hundreds = Number(arr_data[2])
};

if (data.length > 3) {
    console.log(`Введено число ${text}, которое больше 999`)
} else {
    console.log(new GetAnswer(data));
}
