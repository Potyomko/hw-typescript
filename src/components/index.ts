// Завдання 1. 
    // 1) задайте правильні ts типи для класичних js;

let age: number = 50;
let userName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => { return 100 + a }

	// 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = 'Text';
anything = {};

	// 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some: string;
some = 'Text';

let str: string;

str = some;


	// 5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

let person:[string, number] = ['Max', 21];

    // 6) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum LoadingStatus {
    Loading = 'LOADING',
    Read = 'READY'
}
    // 7) Зробіть змінну, яка може приймати або рядок, або число.

let stringNumber : string | number

    // 8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

type EnableDisable = 'enable' | 'disable'
    // 9) Вкажіть типи для наступних функцій



function showMessage(message: string): void {
 console.log(message);
}

function calc(num1: number, num2: number):number {
 return num1 + num2;
}

function customError(): never {
 throw new Error('Error');
}


    // 10) Створіть свій тип даних на основі наявних даних.

 interface Page1 {
title?: string,
likes?: number
accounts?: string[],
status?: string,
details?: {
    createAt?: Date,
    updateAt?: Date

}

 }
const page1: Page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
   }
    interface Page2{
        title?: string,
        likes?: number,
        accounts?: [string],
        status?:string
    }
   const page2: Page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
   }