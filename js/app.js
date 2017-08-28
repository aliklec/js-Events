//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";


function moreContent(){
	var append = document.getElementById("more");
	append.innerHTML = bacon;


}


//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the paragraph with the id of `less` after clicking on the `Show Less` link.*/

function lessContent(){
	var remove = document.getElementById("less");
	remove.innerHTML = "";
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom(){
	var increase = document.getElementById("biggie");
	increase.style.fontSize = "xx-large";
} 

//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/


var menuItems = ["fries", " mcflurry", " hashbrowns"];

function valueMenu(){
	var special = document.getElementById("menu");
	special.innerHTML = menuItems;
}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/

function redFace(){
	var gin = document.getElementById("drink");
	gin.style.color = "red";
	gin.style.fontSize = "30px";
}

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

function showPrice(){
	var oreos = document.getElementById("price");
	oreos.innerHTML = "$5.55";
}


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

document.getElementById("Benjamin").addEventListener("click", function(){
	document.getElementById("displayQuote").innerHTML = myQuote;
});


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

document.getElementById("random").addEventListener("click", myFunction);

function myFunction(){

	var place = document.getElementById("displayQuote");
	var randomNum = Math.floor(Math.random() * 4); 
	place.innerHTML = quotes[randomNum];
}



//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/

document.getElementById("showHide").addEventListener("click", myFunction2);

function myFunction2(){
	var showMessage = document.getElementById("showmoney");
		showMessage.style.display = "block";
}


