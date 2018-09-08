var title = document.getElementById("title"); 
var image = document.getElementById("image");
var options = document.getElementById("options");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var textArea = document.getElementById("text");
var txt = document.getElementById("text")
var small = 5;
var medium = 7;
var large = 10;


function SmallPizzaPrize(){
	textArea.innerHTML = "Hoeveel Small pizza's wilt u kopen? De prijs per small pizza is €5"
	link1.setAttribute("onclick", "SmallPrompt()");
	link1.innerHTML = "Aantal:"
	link2.style.display = "none"
	link3.style.display = "none"
}

function SmallPrompt(){
	var number;
    var pizzaAmount = prompt("Hoeveel pizza's wilt u Bestellen?", );
    if (pizzaAmount == null || pizzaAmount == "") {
        number = "User cancelled the prompt.";
    } else {
        number = "  " + pizzaAmount + "";
        var pizzaPrice  = pizzaAmount* small;
        alert (" € " +pizzaPrice) 
    } 
    document.getElementById("demo").innerHTML = number;
}


function MediumPizza(){
	textArea.innerHTML = "Hoeveel medium pizza's wilt u kopen? De prijs per medium pizza is €7"
	link1.innerHTML = "Aantal:"
	link1.setAttribute("onclick", "MediumPrompt()");
	link2.style.display = "none"
	link3.style.display = "none"	

}

function MediumPrompt(){
	var number;
    var pizzaAmount = prompt("Hoeveel pizza's wilt u Bestellen?", );
    if (pizzaAmount == null || pizzaAmount == "") {
        number = "User cancelled the prompt.";
    } else {
        number = " " + pizzaAmount + "";
        var pizzaPrice  = pizzaAmount* medium;
        alert (" € " +pizzaPrice) 
    } 
    document.getElementById("demo").innerHTML = number;
}

function LargePizza(){
	textArea.innerHTML = "Hoeveel large pizza's wilt u kopen? De prijs per large pizza is €10"
	link1.innerHTML = "Aantal:"
	link1.setAttribute("onclick", "LargePrompt()");
	link2.style.display = "none"
	link3.style.display = "none"	

}

function LargePrompt(){
	var number;
    var pizzaAmount = prompt("Hoeveel pizza's wilt u Bestellen?", );
    if (pizzaAmount == null || pizzaAmount == "") {
        number = "User cancelled the prompt.";
    } else {
        number = " " + pizzaAmount + "";
        var pizzaPrice  = pizzaAmount* large;
        alert (" € " +pizzaPrice) 
    } 
    document.getElementById("demo").innerHTML = number;
}


