"use strict";

var money = prompt("Ваш бюджет на месяц", "10000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-4-12");


var appData = {
    money: money ? money : "100",
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
    budgetOneDay: function () {
        return this.money / 30;
    }

};

for (var i = 0; i<2; i++) {
    var moneyRequired = prompt("Введите обязательную статью расходов в этом месяце", ""),
        moneyPrice = prompt("Во сколько обойдется", "");

    if( moneyRequired != "" && moneyRequired != null && moneyPrice != "" && moneyPrice != null  ) {
        appData.expenses[moneyRequired] = moneyPrice;
    } else {
        --i;
    }




}



alert(appData.budgetOneDay() )


console.log(appData);