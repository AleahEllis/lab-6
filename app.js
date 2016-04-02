var grocery=[
	
	{
		name:"Chocolate Chips" ,
		price:3
	},
	{
		name:"Bacon",
		price:4
	},
	{
		name:"Salad Things",
		price:12
	},
	{
		name:"Ice Cream",
		price:5
	},
	{
		name:"Almonds",
		price:12
	},
	{
		name:"Raspberries",
		price:2
	}];


var total=0;


grocery.forEach(function(items){ //loop through array
		total += items.price; //
		var listEle = document.createElement('div'); //makes the div
		listEle.innerHTML = items.name + "= " + "$" + items.price;//			
		document.body.appendChild(listEle);
		listEle.setAttribute("class", "bombae");
		});
		
		

//putting everything on the html... Dom Manipulation
var totalEle = document.createElement('div'); //makes the div
totalEle.innerHTML = "Total = " + "$" + total; //total goes to the html
document.body.appendChild(totalEle); //appending the price total to the div
totalEle.setAttribute("class", "fancy");//setting style attributes to the div

var addIt = function(){
	var inputFood=document.getElementById('inputFood').value;//need dot value or else you will get the whole node
	var inputPrice=document.getElementById('inputPrice').value;
	var priceToNum=Number(inputPrice);//input price from string to number. important
	
	var foodItem=document.createElement('div');
	foodItem.innerHTML=inputFood;
	document.body.appendChild(foodItem);
	foodItem.setAttribute("class", "werk");
	
	grocery.push(inputFood);
	
	// appendChild
};

addIt();



