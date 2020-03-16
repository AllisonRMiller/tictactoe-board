let state = 0;
let turn = "X";


function add(parent, child) {
    console.log(parent, child)
    parent.element.appendChild(child.element)
}


function Element(element, classList, id) {
    this.element = document.createElement(element);
    this.element.classList = classList;
    this.element.id = id;
}
Element.prototype.constructor = Element;


// Stores all moves on board
board = [
    "", "", "",
    "", "", "",
    "", "", ""
];


// change turn and indicate active player
function changeTurn() {
    // if turn =x then turn =o else turn=x
    if (turn == "X") {
        turn = "O";
        document.getElementById("player_2_name").classList = "text-primary";
        document.getElementById("player_1_name").classList = "";
    } else { turn = "X";
        document.getElementById("player_1_name").classList = "text-primary"
        document.getElementById("player_2_name").classList = "";}
} console.log(turn);


function buildPage() {
    let element1 = new Element("div", "container", "toplevelcontainer");
    console.log(element1);
    let row1 = new Element("div", "row", "title_row");
    console.log(row1);
    let column1 = new Element("div", "col", "title_column");
    console.log(column1);
    let title = new Element("h1", "d-block", "title")
    console.log(title);
    let row2 = new Element("div", "row", "player_row");
    console.log(row2);
    let column2 = new Element("div", "col-6", "player_1_column");
    console.log(column2);
    let player1title = new Element("h2", "text-primary", "player_1_name")
    console.log(player1title);
    let px = new Element("h3", "", "p1_marker_indicator")
    console.log(px);
    let column3 = new Element("div", "col-6", "player_2_column");
    console.log(column3);
    let player2title = new Element("h2", "", "player_2_name")
    console.log(player2title);
    let px2 = new Element("h3", "", "p2_marker_indicator")
    console.log(px2);
    let container2 = new Element("div", "container-fluid", "grid");
    console.log(container2);


    for (var i = 0; i < 3; i++) {
        let gridRow = new Element("div", "row", "gridRow" + i);
        console.log(gridRow);
        for (j = 0; j < 3; j++) {
            let gridCol = new Element("div", "col-sm-3 border border-dark p-5", "gridCol_" + i + "_" + j);
            console.log(gridCol);
            gridCol.element.addEventListener("click", click, { once: true })
            gridRow.element.appendChild(gridCol.element);
        }
        container2.element.appendChild(gridRow.element);
    }
    let buttonTXT = document.createTextNode("Reset");
    console.log(buttonTXT);
    let button = new Element("button", "btn btn-primary", "reset button");
    button.element.addEventListener("click",reset);
    console.log(button);

    button.element.appendChild(buttonTXT);
    add(container2, button);
    add(column2, player1title);
    add(column2, px);
    add(row2, column2);
    add(column3, player2title);
    add(column3, px2);
    add(row2, column3);
    add(column1, title);
    add(row1, column1);
    add(element1, row1);
    add(element1, row2);
    add(element1, container2);
    document.body.appendChild(element1.element);

    document.getElementById("title").innerHTML = "Tic Tac Toe";
    document.getElementById("player_1_name").innerHTML = "Player 1";
    document.getElementById("p1_marker_indicator").innerHTML = "X"
    document.getElementById("player_2_name").innerHTML = "Player 2";
    document.getElementById("p2_marker_indicator").innerHTML = "O"


}

buildPage();






function click(e) {

    // mark square
    e.target.innerHTML = turn;
    // identify which square has been clicked
    var pos = e.target.id;
    // get row coordinates
    var charIndex1 = 8;
    console.log(pos.charAt(charIndex1));
    var rowIndex = pos.charAt(charIndex1);
    // get column coordinates
    var charIndex2 = 10;
    console.log(pos.charAt(charIndex2));
    var colIndex = pos.charAt(charIndex2);
    console.log(pos);
    // update board array
    var boardIndex = (3 * parseInt(rowIndex) + parseInt(colIndex));
    board[boardIndex] = turn;
    console.log(board);
    // check win or tie
    checkWin2();
    // update state
    state++;
    // change turn and indicate active player
    changeTurn();
}

winBoard = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Check for a win
function checkWin2(){
    for(i=0;i<winBoard.length;i++){
        if(turn==board[winBoard[i][0]] && turn==board[winBoard[i][1]] && turn==board[winBoard[i][2]]){
            document.getElementById("modal-title").innerHTML="Player "+turn+" wins!";
            $('#myModal').modal();
            console.log("win"+winBoard[i]);
        }
        else if (state == 8){
            document.getElementById("modal-title").innerHTML="Draw";
            $('#myModal').modal();
            console.log("lose")}
    }
}


// Reset the board
function reset(){
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            document.getElementById("gridCol_"+i+"_"+j).innerHTML = "";
            document.getElementById("gridCol_"+i+"_"+j).addEventListener("click", click, { once: true })
        }
    }
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    state = 0;
    document.getElementById("player_1_name").classList = "text-primary"
    document.getElementById("player_2_name").classList = "";
    turn = "X";
}



