(function () {

    'use strict';

    var peopleFactory = function (name, age, state) {

        var factoryObj = {};

        factoryObj.name = name;
        factoryObj.age = age;
        factoryObj.state = state;

        factoryObj.print = function () {
            console.log(this.name + ', ' + this.age + ', ' + this.state);
        };

        return factoryObj;

    };


    var person_one = peopleFactory('John', 21, 'CA');
    var person_two = peopleFactory('Ali', 25, 'NY');

    person_one.print();
    person_two.print();

})();