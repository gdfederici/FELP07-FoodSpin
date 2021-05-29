import '../css/style.scss';
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
function isFood() {
	// IT_ Creo i piatti prendendole dal file json esterno. | EN_ Create dishes taking them from the external json file.
	let listDishes = dishesJson.dishesList;
    let foodList = document.createElement("ul");
    foodList.className = "menu";
    let allDishes = listDishes.length;
    for (let i=0; i<allDishes; i++) {
        foodList.appendChild(createDish(listDishes[i].price, listDishes[i].title, listDishes[i].description, listDishes[i].image, i, allDishes));
    }
    document.getElementById("main").appendChild(foodList);
}

// IT_ Visualizza il singolo piatto della lista. | EN_ View the single dish on the list.
function createDish(itemPrice, itemTitle, itemDescription, itemImage, position, howMany) {
    let listItem = document.createElement("li");
    let color;
    (position %2) === 0 ?  (color = "a") : (color = "b");
    listItem.className = "spin spin__color-"+ color;
    listItem.appendChild(createSX(itemPrice, itemTitle, itemDescription));
    listItem.appendChild(createDX(itemImage, position, howMany));
    return listItem;
}

// IT_ Crea la parte SX con prezzo, titolo, descrizione e bottone d'ordine. | EN_ Create the SX part with price, title, description and order button.
function createSX(itemPrice, itemTitle, itemDescription) {
    let listItemSX = document.createElement("div");
    listItemSX.className = "spin-sx";
    // IT_ Prezzo. | EN_ Price.
    listItemSX.appendChild(createPrice(itemPrice));
    // IT_ Titolo. | EZ_ Title.
    listItemSX.appendChild(createTitle(itemTitle));
    // IT_ Descrizione. | EN_ Description.
    listItemSX.appendChild(createDescription(itemDescription));
    // IT_ Bottone. | EN_ Button.
    listItemSX.appendChild(createButton());
    //
    return listItemSX;
}
// IT_ Prezzo. | EN_ Price.
function createPrice(price) {
    let itemPrice = document.createElement("p");
    itemPrice.className = "spin-sx-price price";
    itemPrice.appendChild(document.createTextNode(price));
    return itemPrice;
}
// IT_ Titolo. | EZ_ Title.
function createTitle(title) {
    let itemTitle = document.createElement("h1");
    itemTitle.className = "spin-sx-title";
    itemTitle.appendChild(document.createTextNode(title));
    return itemTitle;
}
// IT_ Descrizione. | EN_ Description.
function createDescription(description) {
    let itemDescription = document.createElement("p");
    itemDescription.className = "spin-sx-text";
    itemDescription.appendChild(document.createTextNode(description));
    return itemDescription;
}
// IT_ Bottone. | EN_ Button.
function createButton() {
    let itemOrder = document.createElement("div");
    itemOrder.className = "spin-sx-button";
    let itemButton = document.createElement("button");
    itemButton.className = "button";
    itemButton.appendChild(document.createTextNode("Order Now"));
    itemOrder.appendChild(itemButton);
    return itemOrder;
}

// IT_ Crea la parte DX con ruota dei piatti e immagine piatto principale. | EN_ Create the DX part with the dishes wheel and main food image.
function createDX(itemImage, position, howMany) {
    let listItemDX = document.createElement("div");
    listItemDX.className = "spin-dx";
    // IT_Sfondo e ruota. | EN_ Background and wheel.
    listItemDX.appendChild(createWheel(position, howMany));
    // IT_ Piatto principale. | EN_ Single food.
    listItemDX.appendChild(createDishOne(itemImage));
    // IT_ Controlli per spin. | EN_ Spin controls.
    listItemDX.appendChild(createControls(imgArrow));
    //
    return listItemDX;
}
// IT_Sfondo e ruota. | EN_ Background and wheel.
function createWheel(index, howMany) {
    // IT_ Sfondo che nasconde. | EN_ Background and overflow hidden.
    let itemCircle = document.createElement("div");
    itemCircle.className = "spin-dx-infernalcircle background";
    // IT_ Ruota dei piatti. | EN_ Circle of dishes.
    itemCircle.appendChild(createCircle(index, howMany));
    return itemCircle;
}
// IT_ Crea il cerchio di cibi presente nello sfondo. | EN_ Create dishes'circle for background.
function createCircle(imgPosition, allFoods) {
    let itemWheel = document.createElement("div");
    itemWheel.className = "spin-dx-wheel";
    let itemWheel_back = document.createElement("div");
    itemWheel_back.className = "spin-dx-wheel_backcircle";
    itemWheel.appendChild(itemWheel_back);
    for (let j=0; j<allFoods; j++) {
        let itemWheel_dish = document.createElement("div");
        itemWheel_dish.className = "spin-dx-wheel_dish spin-dx-wheel_dish-" + j;
        itemWheel_dish.style.transform = "rotate(" + ((imgPosition-j) * (360/allFoods)) +"deg)";
        itemWheel.appendChild(itemWheel_dish);
    }
    return itemWheel;
}
// IT_ Piatto principale. | EN_ Single food.
function createDishOne(itemImage) {
    let itemFood = document.createElement("div");
    itemFood.className = "spin-dx-food";
    itemFood.appendChild(createImage("", "img/" + itemImage, "289", "295", "Main Food"));
    return itemFood;
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
// IT_ Controlli per spin. | EN_ Spin controls.
function createControls(imgArrow) {
    let itemControls = document.createElement("div");
    itemControls.className = "spin-controls arrows";
    itemControls.appendChild(createArrowControl(imgArrow, "prev", "arrowPrev", -1));
    itemControls.appendChild(createArrowControl(imgArrow, "next", "arrowNext", 1));
    return itemControls;
}
// IT_ Bottone freccia. | EN_ Arrow button.
function createArrowControl(imgArrow, classArrow, idArrow, x) {
    let itemArrow = document.createElement("button");
    itemArrow.className = classArrow;
    itemArrow.setAttribute("id", idArrow);
    itemArrow.onclick = function() { spinWheel(x); };
    itemArrow.appendChild(createImage("", imgArrow, "14", "14", "Spin arrow"));
    return itemArrow;
}



/*** SHOW START ***/
function showStart() {
    var startFoods = document.getElementsByClassName("spin");
    Array.from(startFoods).forEach(element => element.style.display = "none"); // IT_ Nascondo tutti gli elementi. | EN_ Hide list.
    startFoods[0].style.display = "flex"; // IT_ Mostro il primo elemento. | EN_ Show first dish.
}

/*** NEXT/PREV SPIN ***/
function spinWheel(n) {
    hideFood(foodIndex);
    setTimeout(function() { showFood(foodIndex += n, n)}, 500);
}
/*** HIDE OLD DISH ***/
function hideFood(index) {
    var foods = document.getElementsByClassName("spin");
    offAnimation(foods[foodIndex-1]);
}
function offAnimation(itemHide) {
    itemHide.getElementsByClassName("price")[0].classList.remove("in_text");
    itemHide.getElementsByClassName("price")[0].classList.add("out_text");
    itemHide.getElementsByClassName("spin-sx-title")[0].classList.remove("in_text");
    itemHide.getElementsByClassName("spin-sx-title")[0].classList.add("out_text");
    itemHide.getElementsByClassName("spin-sx-text")[0].classList.remove("in_text");
    itemHide.getElementsByClassName("spin-sx-text")[0].classList.add("out_text");
    itemHide.getElementsByClassName("spin-dx-food")[0].getElementsByTagName("img")[0].classList.remove("in_food");
    itemHide.getElementsByClassName("spin-dx-food")[0].getElementsByTagName("img")[0].classList.add("out_food");
    setTimeout( function() { offTotal(itemHide)}, 500);
}
function offTotal(itemHide) {
    itemHide.style.display = "none";
    itemHide.getElementsByClassName("price")[0].classList.remove("out_text");
    itemHide.getElementsByClassName("spin-sx-title")[0].classList.remove("out_text");
    itemHide.getElementsByClassName("spin-sx-text")[0].classList.remove("out_text");
    itemHide.getElementsByClassName("spin-dx-food")[0].getElementsByTagName("img")[0].classList.remove("out_food");
    itemHide.getElementsByClassName("spin-dx-wheel")[0].classList.remove("circle_next");
    itemHide.getElementsByClassName("spin-dx-wheel")[0].classList.remove("circle_prev");
}
/*** SHOW NEW DISH ***/
function showFood(index, n) {
    var foods = document.getElementsByClassName("spin");
    if ( index > foods.length ) { foodIndex = 1; }
    if ( index < 1 ) { foodIndex = foods.length; }
    onAnimation(foods[foodIndex-1], n);
}
function onAnimation(itemShow, n) {
    itemShow.style.display = "flex";
    itemShow.getElementsByClassName("price")[0].classList.add("in_text");
    itemShow.getElementsByClassName("spin-sx-title")[0].classList.add("in_text");
    itemShow.getElementsByClassName("spin-sx-text")[0].classList.add("in_text");
    itemShow.getElementsByClassName("spin-dx-food")[0].getElementsByTagName("img")[0].classList.add("in_food");
    console.log("n", n);
    if (n === 1) { spinNext(itemShow); }
    if (n === -1) { spinPrev(itemShow); }
}
function spinNext(itemNext) {
    itemNext.getElementsByClassName("spin-dx-wheel")[0].classList.add("circle_next");
}
function spinPrev(itemPrev) {
    itemPrev.getElementsByClassName("spin-dx-wheel")[0].classList.add("circle_prev");
}



/*** MAIN ***/
isFood();
showStart();
var foodIndex = 1;