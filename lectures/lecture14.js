//Javascript Basic Object Creation  /  lecture-14

// var obj = {};
// var obj1 = new Object;

// console.log(obj);
// console.log(obj1);





var book = {
    name: 'Amr Ache Jol',
    author: 'Humayun Ahmed',
    publisher: 'Murchona',
    page: 250,
    price: 120,

    print: function() {
        console.log(this.name, this.price);
    }
};

// console.log(book);
// book.print();

// console.log('Author Name = ' + book.author); // dot notation
// console.log('Author Name = ' + book['author']); // bracket notation

// console.log('publishYear = ' + book.publishYear);
book.publishYear = 2016;  //push in book object
// console.log('publishYear = ' + book.publishYear);

book['doller'] = 30;  //push in book object
// console.log('Doller = ' + book['doller']);


for(var props in book) {
    // console.log(props);
    // console.log(props + ' = ' + book.props);  //return undefined value
    console.log(props + ' = ' + book[props]); 
}



// console.log(book);