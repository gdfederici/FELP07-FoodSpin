import '../css/style.scss';
import imgFoodCircle from '../img/food-circle.png';
import imgFood0 from '../img/food-big_0.png';
import imgFood1 from '../img/food-big_1.png';
import imgFood2 from '../img/food-big_2.png';
import imgFood3 from '../img/food-big_3.png';
import imgFood4 from '../img/food-big_4.png';
import imgFood5 from '../img/food-big_5.png';
import imgFood6 from '../img/food-big_6.png';
import imgFood7 from '../img/food-big_7.png';
import imgFood8 from '../img/food-big_8.png';
import imgFood9 from '../img/food-big_9.png';
import imgArrow from '../img/arrow-down.png';
import dishesJson from './dishes.json';

/*** ------------------------- *** ------------------------- *** ------------------------- *** ------------------------- ***/

/*** DISHES ***/
window.isDishes = function() {
	// IT_ Creo i piatti prendendole dal file json esterno. | EN_ Create dishes taking them from the external json file.
	let listDishes = dishesJson.dishesList;
	console.log("listDishes", listDishes);
    let ringaRinga = document.createElement("ul");
    ringaRinga.className = "menu";
    let allDishes = listDishes.length;
    console.log("allDishes", allDishes);
    for (let i=0; i<allDishes; i++) {
        ringaRinga.appendChild(createDish(listDishes[i].price, listDishes[i].title, listDishes[i].description, listDishes[i].image, listDishes[i].link, i));
    }
    document.getElementById("main").appendChild(ringaRinga);
}

// IT_ Visualizza il singolo piatto della lista. | EN_ View the single dish on the list.
function createDish(itemPrice, itemTitle, itemDescription, itemImage, position) {
    let listItem = document.createElement("li");
    let color;
    (position %2) === 0 ?  (color = "a") : (color = "b");
    console.log("color", color);
    listItem.className = "spin spin__color-"+ color;
    listItem.appendChild(createSX(itemPrice, itemTitle, itemDescription));
    listItem.appendChild(createDX(itemImage));
    return listItem;
}

// IT_ Crea la parte SX con prezzo, titolo, descrizione e bottone d'ordine. | EN_ Create the SX part with price, title, description and order button.
function createSX(itemPrice, itemTitle, itemDescription) {
    let listItemSX = document.createElement("div");
    listItemSX.className = "spin-sx";
    let listItemPrice = document.createElement("p");
    listItemPrice.className = "spin-sx-price price";
    listItemPrice.appendChild(document.createTextNode(itemPrice));
    listItemSX.appendChild(listItemPrice);
    let listItemTitle = document.createElement("h1");
    listItemTitle.className = "spin-sx-title";
    listItemTitle.appendChild(document.createTextNode(itemTitle));
    listItemSX.appendChild(listItemTitle);
    let listItemDescription = document.createElement("p");
    listItemDescription.className = "spin-sx-text";
    listItemDescription.appendChild(document.createTextNode(itemDescription))
    listItemSX.appendChild(listItemDescription);
    let listItemOrder = document.createElement("div");
    listItemOrder.className = "spin-sx-button";
    let listItemButton = document.createElement("button");
    listItemButton.className = "button";
    listItemButton.appendChild(document.createTextNode("Order Now"));
    listItemOrder.appendChild(listItemButton);
    listItemSX.appendChild(listItemOrder);
    return listItemSX;
}

// IT_ Crea la parte DX con ruota dei piatti e immagine piatto principale. | EN_ Create the DX part with the dishes wheel and main food image.
function createDX(itemImage) {
    let listItemDX = document.createElement("div");
    listItemDX.className = "spin-dx";
    let listItemCircle = document.createElement("div");
    listItemCircle.className = "spin-dx-infernalcircle background";
    let listItemWheel = document.createElement("div");
    listItemWheel.className = "spin-dx-wheel";
    listItemWheel.appendChild(createImage("ruotacibo", "img/food-circle.png", "657", "657", "Circle food"));
    listItemCircle.appendChild(listItemWheel);
    listItemDX.appendChild(listItemCircle);
    let listItemFood = document.createElement("div");
    listItemFood.className = "spin-dx-food";
    listItemFood.appendChild(createImage("", "img/" + itemImage, "289", "295", "Main Food"));
    listItemDX.appendChild(listItemFood);
    let listItemControls = document.createElement("div");
    listItemControls.className = "spin-controls arrows";
    let listItemPrev = document.createElement("a");
    listItemPrev.className = "prev";
    let listItemNext = document.createElement("a");
    listItemNext.className = "next";
    listItemPrev.appendChild(createImage("", imgArrow, "14", "14", "Spin arrow"));
    listItemNext.appendChild(createImage("", imgArrow, "14", "14", "Spin arrow"));
    listItemControls.appendChild(listItemPrev);
    listItemControls.appendChild(listItemNext);
    listItemDX.appendChild(listItemControls);
    return listItemDX;
}
// IT_ Crea l'elemento immagine da inserire. | EN_ Create the image element to insert.
function createImage(imgClass, imgSrc, imgWidth, imgHeight, imgAlt) {
    let newImage = document.createElement("img");
    newImage.className = imgClass;
    newImage.src = imgSrc;
    newImage.width = imgWidth;
    newImage.height = imgHeight;
    newImage.loading = "lazy";
    newImage.alt = imgAlt;
    return newImage;
}


/*** NEXT/PREV SPIN ***/
window.spinWheel = function(n) {
    showFood(foodIndex += n, n);
}

/*** SHOW FOOD ***/
window.showFood = function(index, n) {
    var foods = document.getElementsByClassName("spin");
    //for (let i = 0; i < foods.length; i++) { foods[i].style.display = "none"; }
    //Array.from(foods).forEach(element => element.style.display = "none");
    Array.from(foods).forEach(hideWheel);
    if ( index > foods.length ) { foodIndex = 1; }
    if ( index < 1 ) { foodIndex = foods.length; }
    magicabula(foods[foodIndex-1], n);
}
window.hideWheel = function(itemHide) {
    itemHide.style.display = "none";
}
window.magicabula = function(itemShow, n) {
    itemShow.style.display = "flex";
    //itemShow.getElementsByClassName("price")[0].classList.add("zoom__in");
    //itemShow.getElementsByClassName("spin-sx-title")[0].classList.add("zoom__in");
    //itemShow.getElementsByClassName("spin-sx-text")[0].classList.add("zoom__in");
    //itemShow.getElementsByClassName("spin-dx-wheel")[0].classList.add("rotate__next");
}
window.spinNext = function(itemNext) {
    itemNext.getElementsByClassName("spin-dx-wheel")[0].classList.add("rotate__next");
}


/*** MAIN ***/
isDishes();
var foodIndex = 1;
showFood(foodIndex);