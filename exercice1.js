// creation of multidimensional table "fishList" (question 1)
let fishList = [
  ["Aulopiformes","Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes","Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
]
// creation of a function who pick an multidimensional array as parameter with string elements
// the function return an HTML table of this array
function arrayDisplay (multidimensionalArrayString) {
  let elementTable = document.createElement("table");
  document.body.appendChild(elementTable);
  let elementThead = document.createElement("thead");
  elementTable.appendChild(elementThead);
  let elementTr = document.createElement("tr");
  elementThead.appendChild(elementTr);
  // creation of tHead with double loop to create tr and th from htmlArray
  let htmlArray = [
    ["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"]
  ]
  let i = 0;
  let j = 0;
  let currentElement;
  let currentElement2
  while (i < htmlArray.length) {
    currentElement = htmlArray[i];
    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      let elementTh = document.createElement("th");
      elementTr.appendChild(elementTh);
      elementTh.textContent = currentElement2;
      j++;
      // to change the color of th
      elementTh.style.color = "red";
    }
    i++
  }
  // creation of the body and double loop on multidimensionalArrayString to create tr and td
  let elementTbody = document.createElement("tbody");
  elementTable.appendChild(elementTbody);
  let k = 0;
  let l = 0;
  let currentElement3;
  let currentElement4;
  while (k < multidimensionalArrayString.length) {
    currentElement3 = multidimensionalArrayString[k];
    let elementTr2 = document.createElement("tr");
    elementTbody.appendChild(elementTr2);
    while (l < currentElement3.length) {
      currentElement4 = currentElement3[l];
      let elementTd = document.createElement("td");
      elementTr2.appendChild(elementTd);
      elementTd.textContent = currentElement4;
      l++;
      // if (currentElement4 == 3) {
      //   elementTd.style.fontStyle = "italic";
      // }
    }
    k++;
    l = 0;
  }
}
arrayDisplay(fishList);
