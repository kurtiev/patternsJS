(function () {

    'use strict';

    var peopleProto = function () {
    };

    peopleProto.prototype.age = 0;
    peopleProto.prototype.name = 'no name';
    peopleProto.prototype.city = 'no city';

    peopleProto.prototype.print = function () {
        console.log(this.name + ', ' + this.age + ', ' + this.city);
    };

    var person_one = new peopleProto();

    person_one.age = 22;
    person_one.name = 'John';
    person_one.city = 'CA';

    person_one.print();

})();