//Javascript Behind The Scene This keyword Initialization  /  lecture-7

var obj = {
    name: 'Adhara',

    print: function() {
        console.log('Hello ' + this.name);
        console.log(this);
        function another() {
            console.log(this);
        }
        another();
        
    }
}

var person = {
    name: 'Trishan',
}

person.print = obj.print;

person.print();