let state= 0
// const append = function appendNew (parent){
//     parent.appendChild(this);
// }

function add (parent,child){
    parent.appendChild(child)
}


function Element(element, classList, id){
    this.element = document.createElement(element);
    this.element.classList = classList;
    this.element.id = id;
}
Element.prototype.constructor = Element;


function buildPage (){
let element1 = new Element ("div","container","toplevelcontainer");
console.log(Element1);
let row1 = new Element("div","row","title_row");
console.log(row1);
let column1 = new Element("div","col","title_column");
console.log(column1);
let title = new Element("h1","","title").innerHTML = "Tic Tac Toe";
console.log(title);
let row2 = new Element("div","row","title_row");
console.log(row2);
let column2 = new Element("div","col-6","player_1_column");
console.log(column2);
let player1title = new Element("h2","","player_1_name").innerHTML = "Player 1";
console.log(player1title);
let px = new Element("h3","","p1_marker_indicator").innerHTML = "X"
console.log(px);
let column3 = new Element("div","col-6","player_2_column");
console.log(column3);
let player2title = new Element("h2","","player_2_name").innerHTML = "Player 2";
console.log(player2title);
let px2 = new Element("h3","","p2_marker_indicator").innerHTML = "O"
console.log(px2);
let container2 = new Element("div","container","grid");
console.log(container2);
let gridRow = new Element("div", "row", "gridRow");
console.log(gridRow);
let  gridCol= new Element("div","col-3","gridCol");
console.log(gridCol);




add(document.body, element1);
}



// function newDiv(element, classList, id){
//     this.element = element;
//     this.classList = classList;
//     this.id = id;
// }

// function newContainer(element, classList, id){
//     newDiv.call(this, element, id);
//     this.classList = "container";
// }






// function newRow(element, classList, id){
//     newDiv.call(this,element,id);
//     this.classList = "row";
// }

// function newColumn(element, classList, id){
//     newDiv.call(this,element,id);
//     this.classList = "col"
// }

// function newThirdColumn(element,classList,){
//     newDiv.call(this,element);
//     this.classList = "col-3";
// }



// newContainer.prototype = Object.create(newDiv.prototype);
// newContainer.prototype.constructor = newContainer;

// newRow.prototype = Object.create(newDiv.prototype);
// newRow.prototype.constructor = newRow;

// newColumn.prototype = Object.create(newDiv.prototype);
// newColumn.prototype.constructor = newColumn;

// newThirdColumn.prototype = Object.create(newDiv.prototype);
// newThirdColumn.prototype.constructor = newThirdColumn;


// newDiv.prototype.add = function (){
// // append this thing inside of another thing
// document.createElement(this.element);
// document.body.appendChild(this.element);

// }




// let col = new newDiv(document.createElement("div"),"col-3","gridcols")
// let row3 = new newDiv(document.createElement("div"),"row","gridrow")
// let container1 = new newDiv("container", "container1")

for (j=0; j<3; j++){
    row3.add(container1);
    for (i=0; i<3; i++){
        col.add(row3);}
}
// container1.add();


// var tiles = Array.from(Document.querySelectorAll('#grid col-3'));


// // check win or tie
// for (n=0; n<3; n++){
//     if (turn == [0,n] || [1,n] || [2,n] || [n,0] || [n,1] || [n,2] || [n.n] || [n,2-n]){win}
//     else if (state == end){tie}
// }

// Turn change
// turn =x 
// if turn =x is true then turn =o else turn =x

// turn counter
// every click turn++


//     var gridContainer = document.createElement("div").className="container";
//     document.body.appendChild(gridContainer);
//     for (i=0; i<3; i++){
//     var gridRow = document.createElement("div").className="row";
//     gridContainer.appendChild(row);
//     for (j=0; j<3; j++){
//         var gridColumn = document.createElement("div").className="col-3 border";
//         gridRow.appendChild(column);
//     }
// }
// makeGrid();
