// // draw board as table 3x3
// // create p1 and p2 (class player?)
// // create X and O (class marker?)
// // render buttons, title, players, and score count
// // create event listener for each cell in table
// // on click mark w/player's symbol, deactivate cell, check for win, and advance state
// // at last state check for win, if none display tie

function Tile(class, id)




// let state = 0
// // let row = "";
// // let column = "";
// // let playerName = "";
// // let table = "";
// // let tableRow = "";
// // let tableCell0 = "";
// // let tableCell1 = "";
// // let tableCell2 = "";

// function makeRow() {
//     var row = [];
//     for (let i = 0; i <= 3; i++) {
//         row[i] = document.createElement("div")
//         this.classList = "row"
//         this.id = "row" + i;
//         console.log("row" + i);
//         console.log(row[i]);

//     }
// }


// function makePlayer() {
//     var playerName = [];
//     for (var i = 0; i <= 1; i++) {
//         console.log("player" + i);
//         playerName[i] = document.createElement("h2")
//         console.log(playerName[i]);
//         this.id = "player" + i
//         this.innerHTML = "Player " + i;
//     }

// }

// function makeTable() {
//     table = document.createElement("TABLE")
//     table.classList = "table table-responsive table-bordered";
//     table.id = "gameBoard";
//     for (var i = 0; i <= 2; i++) {
//         console.log(i);
//         var tableRow = table.insertRow(i);
//         var tableCell0 = tableRow.insertCell(0);
//         var tableCell1 = tableRow.insertCell(1);
//         var tableCell2 = tableRow.insertCell(2);

//         tableCell0.innerHTML = " ";
//         tableCell1.innerHTML = " ";
//         tableCell2.innerHTML = " ";
//         console.log(table);
//         console.log(tableRow);
//         console.log(tableCell0);
//     };
    
// }
//         function makeColumn() {
//             for (var i = 0; i <= 4; i++) {
//                 console.log("col" + i);
//                 var col = [];
//                 col[i] = document.createElement("div");
//                 // var column_test = document.createElement("div")
//                 console.log(col);
//                 console.log(col[i]);
//                 let mods = ["col", "col-6", "col-6", "col", "col"];
//                 col[i].classList = mods[i]
//                 col[i].id = "col" + i;
//             }
//         }

// function renderPage() {
//     container = document.createElement("div").classList = "container justify-content-center";
//     head = document.createElement("h1").innerHTML = "TIC TAC TOE";
//     button = document.createElement("button")

//     for (let i = 0; i <= 3; i++) {
//         row[i] = document.createElement("div")
//         this.classList = "row"
//         this.id = "row" + i;
//         console.log("row" + i);
//         console.log(row[i]);
//     // makeRow();
//     // makeColumn();
//     // makePlayer();
//     // makeTable();

//     button.classList = "btn btn-primary";
//     buttonText = document.createTextNode("Start");
//     // container>row>column>header
//     //          >row>column>player1>column>player2
//     //          >row>column>table
//     //          >row>column>button
//     button.appendChild(buttonText);
//     col4.appendChild(button);
//     row3.appendChild(col4);
//     container.appendChild(row3);
//     col3.appendChild(table);
//     row2.appendChild(col3);
//     container.appendChild(row2);
//     col2.appendChild(player1);
//     col1.appendChild(player0);
//     row1.appendChild(col2);
//     row1.appendChild(col1);
//     container.appendChild(row1);
//     col0.appendChild(head);
//     row0.appendChild(col0);
//     container.appendChild(row0);
//     document.body.appendChild(container);

// }
// renderPage();