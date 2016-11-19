(function () {

    'use strict';

    var peopleDynamicProto = function (name, age, state) {

        this.age = age;
        this.name = name;
        this.state = state;

        if (typeof this.print !== 'function') {
            peopleDynamicProto.prototype.print = function () {
                console.log(this.name + ', ' + this.age + ', ' + this.state);
            };
        }

    };

    var person_one = new peopleDynamicProto('Ali', 23, 'CA');
    person_one.print();

})();