(function () {

    'use strict';

    var peopleConstructor = function (name, age, state) {

        this.name = name;
        this.age = age;
        this.state = state;

        this.print = function () {
            console.log(this.name + ', ' + this.age + ', ' + this.state);
        };
    };


    var person_one = new peopleConstructor('John', 21, 'CA');
    var person_two = new peopleConstructor('Ali', 25, 'NY');

    person_one.print();
    person_two.print();

})();