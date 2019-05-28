//Inner Function 5/20/2019 class-4

//What work result
function name(firstName, lastName, gender) {
    var output;
    if (gender === 'male') {
        output = 'Mr ' + firstName + ' ' + lastName;
    } else if (gender === 'female') {
        output = 'Ms ' + firstName + ' ' + lastName;
    }
    return output;
}

var result = name('Md_', 'Hasan Patwary', 'male');
console.log(result);

//what work return second example
function example() {
    return {
        name: 'MD_Hasan Patwary',
        skill: ['html', 'css', 'jquery', 'javascript'],
        print: function () {
            console.log(this.name, this.skill);
        }
    }
}
var object = example();
object.print();