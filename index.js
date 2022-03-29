
// Influx - Node.js assignment
// Short summary of what you need to do
// Create a module that will help a group of people to split shared expenses during a trip or
// vacation.


// Name :- Suraj Kisanrao Ughade


class tripGroup {

    constructor() {
        this.group_name = "Suraj";
        this.member_list = [];
        this.expenses = {};
        this.split = {};

    }

    //function to add member
    addMember(name) {
        if (!this.member_list.includes(name.toUpperCase())) {
            this.member_list.push(name.toUpperCase())
            console.log(this.member_list)
        }
        else console.log("This member is already in the list.")
    }

    //function to add expenses
    addExpense(arr) {
        for (let i = 0; i < this.member_list.length; i++) {
            if (this.expenses[this.member_list[i]] === undefined) this.expenses[this.member_list[i]] = arr[i]
            else this.expenses[this.member_list[i]] += arr[i];
        }
        console.log(this.expenses)
    }

    //function to get total expense
    totalExpense() {
        let total = 0
        for (let key in this.expenses) {
            total += this.expenses[key];
        }
        return total
    }

    //function to get split expenses
    expenseSplit() {
        let myTotal = this.totalExpense();
        let onesSplit = myTotal / this.member_list.length;
        console.log(onesSplit)
        for (let key in this.expenses) {
            this.split[key] = Math.round(+this.expenses[key] - onesSplit)
        }
        console.log(this.split)
    }

}


//created Group 
let myGroup = new tripGroup();

//printing Default group_name
console.log(myGroup.group_name) // Suraj

// added 3 members
myGroup.addMember("Karan"); // [ 'karan' ]
myGroup.addMember("Suraj"); // [ 'KARAN', 'SURAJ' ]
myGroup.addMember("Malay"); // [ 'KARAN', 'SURAJ', 'MALAY' ]

// try to add another member with same name it will not append
myGroup.addMember("Karan"); // This Group member already in list

//added some expenses
myGroup.addExpense([30, 30, 30]) // { KARAN: 30, SURAJ: 30, MALAY: 30 }
myGroup.addExpense([50, 60, 70]) // { KARAN: 80, SURAJ: 90, MALAY: 100 }

//print who owes whom
myGroup.expenseSplit() // { KARAN: -10, SURAJ: 0, MALAY: 10 }


// added another seven member
myGroup.addMember("Ajay"); // [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY' ]
myGroup.addMember("Akshay"); // [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY' ]
myGroup.addMember("Sangram"); // [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY', 'SANGRAM' ]
myGroup.addMember("Akshit"); // [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY', 'SANGRAM', 'AKSHIT' ]
myGroup.addMember("Rohit");// [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY', 'SANGRAM', 'AKSHIT', 'ROHIT' ]
myGroup.addMember("Alagh");// [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY', 'SANGRAM', 'AKSHIT', 'ROHIT','ALAGH' ]
myGroup.addMember("Leela"); //  [ 'KARAN',  'SURAJ', 'MALAY',  'AJAY', 'AKSHAY', 'SANGRAM', 'AKSHIT', 'ROHIT','ALAGH', 'Leela' ]

//created function for random number generation
function random() {
    return Math.round(Math.random() * 10);
}

//created a function to make arr
function makeArr() {
    let arr = [];
    for (let i = 0; i < 10; i++)
        arr.push(random());
    return arr
}

//created a function to add random expenses
function addRandomExpenses() {
    for (let i = 0; i < 300; i++) {
        myGroup.addExpense(makeArr())
    }
}
addRandomExpenses(); //{KARAN: 1577,SURAJ: 1559,MALAY: 1690,AJAY: 1458,AKSHAY: 1486,SANGRAM: 1433,AKSHIT: 1496,ROHIT: 1493,ALAGH: 1560,LEELA: 1447}

//print who owes whom
myGroup.expenseSplit();// {KARAN: 44,SURAJ: 104,MALAY: 78,AJAY: -19,AKSHAY: -6,SANGRAM: -46,AKSHIT: -83,ROHIT: -68,ALAGH: -3,LEELA: -4}

//to get total expense during the trip
console.log(myGroup.totalExpense()); //15334