// creation of a display with anonymous function : h1, p and button
function interfaceDisplay (booleen){
  if (booleen == true) {
  // h1 creation and display
  let elementH1 = document.createElement("h1");
  document.body.appendChild(elementH1);
  elementH1.textContent = "Cinéma Le Dauphin";
  // p creation and display
  let elementP = document.createElement("p");
  document.body.appendChild(elementP);
  elementP.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11H30 à 23H du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";
  // buttton creation and display
  let elementButton = document.createElement("button");
  document.body.appendChild(elementButton);
  elementButton.textContent = "Voir les films à l'affiche cette semaine";
  elementButton.setAttribute("id", "btn")
  }
}
// i create a parameter boolen to control the display
let = displayCondition = true;
// i call function to display
interfaceDisplay(displayCondition);

// i create the multidemnsional array
let filmList = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2H", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03","vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]
// i create the function who use as parameter multidimensional array to display on HTML a table with thead, tr, th, tbody, td // i add a second parameter booleen to control display
function displayElementArrayOnArray(arrayString, booleen) {
  if (booleen == true) {
  // i put i = 1 because i want to start the loop with this variable at the second array (the first array is the header)
  let i = 1;
  let j = 0;
  let k = 0;
  let currentElement;
  let currentElement2;
  let currentElement3;
  let firstElement = arrayString[0];
  // i create html element table, thead, tbody, and tr of thead
  let createElementTable = document.createElement("table");
  createElementTable.style.border = "solid 2px"
  document.body.appendChild(createElementTable);
  let createElementThead = document.createElement("thead");
  createElementTable.appendChild(createElementThead);
  let createElementTbody = document.createElement("tbody");
  createElementTable.appendChild(createElementTbody);
  let createElementTr2 = document.createElement("tr");
  createElementThead.appendChild(createElementTr2);
  // i loop on the first array to create th in tr
  while (k < firstElement.length) {
    let createElementTh = document.createElement("th");
    createElementTr2.appendChild(createElementTh);
    currentElement3 = firstElement[k];
    createElementTh.textContent = currentElement3
    k++;
  }
  // i double loop the following content to generate tr for each array and his content with td
  while (i < arrayString.length) {
    currentElement = arrayString[i];
    let createElementTr = document.createElement("tr");
    createElementTbody.appendChild(createElementTr);

    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      let createElementTd = document.createElement("td");
      createElementTr.appendChild(createElementTd);
      createElementTd.textContent = currentElement2;
      j++;
    }
    // don't forget to put j=0 for loop on each array
    j = 0;
    i++;
  }

}
}
// i create a booleen to control array display
let = displayCondition2 = false;
displayElementArrayOnArray(filmList);
// let actionButton = document.getElementById("btn");
// actionButton.addEventListener("click", function() {
// displayCondition2 = true;
// displayCondition = false;
// }
