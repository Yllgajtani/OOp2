//clasa per librin 
function Libri(Titulli,autori,page){
this.Titulli = Titulli;
this.autori = autori;
this.page = page;
};
//Metoda per mi qit detajet per librat
Libri.prototype.displayDetalis = function(){
    console.log("Title:" + this.Titulli);
    console.log("Autori:" + this.autori);
    console.log("Faqet:" + this.page);
};
//klasa per librarin
function Libraria(){
    this.books = [];
};
//Metoda meshtu librin ne librari
Libraria.prototype.addbook = function(book){
this.books.push(book);
};
//Metoda me i qit krejt librant ne librari edhe me i shfaq
Libraria.prototype.displayBooks = function(){
console.log("Librat qe jon ne librari available");
for(var i = 0; i< this.books.length; i++){
    console.log("Libri " + (i + 1) + ":");
    this.books[i].displayDetalis();
    console.log("----------")
}

};

//Krijimi i objekteve
var book1 = new Libri("Think and grow rich" , "Napoleon Hill" , 89)
var book2 = new Libri("To kill a mocikingbird" , "harper Lee " , 110)

//krijimi i objektit te libraris
var librari = new Libraria();

//i kemi fut librat ne librari
librari.addbook(book1);
librari.addbook(book2);

//e kemi thirr metoden e librit displayBooks()
//ku qaty u kan for loop edhe me i iteru krejt librat 
//qe i kemi ne librari
librari.displayBooks();