'use strict';

let mission = +prompt('Сколько нужно накопить?'); // Необходимо накопить
console.log('Необходимо накопить:', mission);
let money = +prompt('Ваш месячный доход?'); // Доход в месяц
console.log('Доход в месяц:', money);

// Возможные расходы
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возмодные расходы:', addExpenses.split(','));

// Депозит в банке (да / нет)
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('Есть ли депозит в банке:', deposit);

// Расход в месяц
let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost2 = +prompt('Во сколько это обойдется?');

// Функция возвращающая сумму всех расходов за месяц
let getExpensesMonth = function() {
    let sum = 0;

    return sum;
};

let expensesAmount = getExpensesMonth(); //Расход
console.log('Расходы:', expensesAmount);

// Доход за месяц
let budgetMonth = money - cost1 - cost2;

// Доход за день (округлив в меньшую сторону)
let budgetDay =  Math.floor(budgetMonth / 30);

// Функция возвращающая накопления за месяц
let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let capital = getAccumulatedMonth(); // Накопления
console.log('Накопления:', capital);

// Функция возвращающаяя период достижения цели
let getTargetMonth = function() {
    return Math.floor(mission / capital);
};

console.log('Период накопления:', getTargetMonth());

// Функции показывающая тип данных
let showTypeof = function(data) {
    return typeof(data);
};

console.log('Переменная money:', showTypeof(money));
//console.log('Переменная income:', showTypeof(income));
console.log('Переменная deposit:', showTypeof(deposit));

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