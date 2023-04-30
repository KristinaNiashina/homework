class PrintEditionItem  {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }
    fix(){
        this.state*=1.5;
    } 

    set state(state1){
        if(state1 < 0){
            this._state = 0;
        }
        if(state1 > 100){
            this._state = 100;
        }
        else{
            this._state = state1;
        }
    }
    get state(){
        return this._state;
    }    
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";  
    } 
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";  
    } 
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


//Library


class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }


    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for (let e of this.books){
            if(e[type] === value){
                return e;
            }
        }
        return null;
    }

    giveBookByName(bookName){
        // debugger;
        for(let e in this.books){
            if(this.books[e].name === bookName){
                let book = this.books[e];
                this.books.splice(e, 1)
                return book;
            }
        }
        return null;
    }
}


const library = new Library("Библиотека УрФУ");

library.addBook(
    new DetectiveBook(
        "Конан Дойл",
        "Приключения Шерлока Холмса",
        1925,
        381
    )
)

library.addBook(
    new FantasticBook(
        "Джон Толкин",
        "Властелин колец",
        1957,
        3801
    )
)

library.addBook(
    new NovelBook(
        "Автор какой-то новеллы",
        "Какая-то новелла",
        1957,
        301
    )
)
