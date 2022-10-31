// 1) Створити функцію конструктор яка створює обєкт юзер інфо
// в функції повиний бути метод виводу інформації про юзера.
// Метод повинен бути винесений в прототип.
// Створити метод на прототайп для оновлення ключів обєкту.
// Створити функцію сорт яка посортує массив з створеними обєктами юзер по віку ( в порядку зростання і порядку зниження)

function user(Name , age){
    this.Name = Name;
    this.age = age;
}

user.prototype.Info = function (){
    return `Имя пользователя - ${this.Name} , Возраст пользователя - ${this.age} лет`
}

user.prototype.Update = function (Name, age){
    this.Name = prompt("Введите Имя")
    this.age = parseInt(prompt("Введите возраст"))
}

let userDima = new user('Dima' , 19)
let userMisha = new user('Misha' , 25)
let userNikita = new user("Nikita" , 29)
let userSasha = new user("Sasha" , 17)


userDima.Update()
console.log(userDima.Info())


let userArr = [userDima , userMisha , userNikita , userSasha]
console.log(userArr , "Не сортированный массив")

function sort() {
    console.log([...userArr].sort(function (a , b){
        return a.age - b.age;
    }), "Cортированный массив по Возрастанию")

    console.log([...userArr].sort(function (a , b){
        return b.age - a.age;
    }) , "Cортированный массив по Убыванию")
}
console.log(sort())



//2) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначити діагональ
function Rectangle(sizeA , sizeB){
    this.sizeA = sizeA
    this.sizeB = sizeB
}

Rectangle.prototype.getS= function (){
    return `Площадь Прямоугольника = ${this.sizeA * this.sizeB}`
}
Rectangle.prototype.getP= function (){
    return `Периметр Прямоугольника ${2 * (this.sizeA + this.sizeB)}`
}
Rectangle.prototype.getD= function (){
    return `Диагональ Прямоугольникка ${(Math.sqrt(this.sizeA * this.sizeA + this.sizeB * this.sizeB))}`
}

let valuesRec = new Rectangle(10 , 5)
console.log(valuesRec.getS())
console.log(valuesRec.getP())
console.log(valuesRec.getD())

// 3) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name. Якщо імя користувача довше 3 символів, то ще вивсести перші 3 літери + ...
let name = prompt("Введите имя")
function getName(arg1){

    console.log(arg1,  "- Полное Имя")
    console.log(arg1[0] , "- Первая Буква Именни")
    console.log(arg1.slice(-1) , "- Последняя Буква Именни")
    if (arg1.length > 3){
        console.log(arg1.substring(0 , 3) + "..." , "- Первые три буквы Именни и троеточие")
    }
}

console.log(getName(name))