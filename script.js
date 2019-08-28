'use strict';

let mission = +prompt('Сколько нужно накопить?'); // Необходимо накопить
console.log('Необходимо накопить:', mission);
let money = +prompt('Ваш месячный доход?'); // Доход в месяц
console.log('Доход в месяц:', money);

// Расход в месяц
let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost2 = +prompt('Во сколько это обойдется?');

// Вычислить доход за месяц, сохранить в переменную budgetMonth и вывести результат в консоль
let budgetMonth = money - cost1 - cost2;

// Поправить budgetDay учитывая бюджет, а не доход. Вывести в консоль округлив в меньшую сторону
let budgetDay =  Math.floor(budgetMonth / 30);

// Функция возвращающая сумму всех расходов за месяц
let getExpensesMonth = function() {
    return cost1 + cost2;
};

let allExpenses = getExpensesMonth(); //Расход
console.log('Расходы:', allExpenses);

// Функция возвращающая накопления за месяц
let getAccumulatedMonth = function() {
    return money - allExpenses;
};

let capital = getAccumulatedMonth(); // Доход
console.log('Накопления:', capital);

// Функция возвращающаяя период достижения цели
let getTargetMonth = function() {
    return Math.floor(mission / capital);
};

console.log('Период накопления:', getTargetMonth());

// Функции showTypeof
let showTypeof = function(data) {
    return typeof(data);
};

console.log('Тип данных ', showTypeof(mission));
console.log('Тип данных ', showTypeof(money));

// Функции getStatusIncome
let getStatusIncome = function() {
    if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay > 300 && budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay <= 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 0) {
        return ('Что то пошло не так');
    }
};

console.log('Уровень дохода: ', getStatusIncome());