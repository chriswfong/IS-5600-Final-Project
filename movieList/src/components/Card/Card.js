import React from 'react';



//Creates main card component that for each stock
const Card = ({ stock }) => {
	
	//html elements for creating card components
	return (
		<div className='card'>
			<img src={stock.img.src} className='card-img-top' alt={stock.img.alt} />
			<div className='card-body'>
				<h2 className='card-title'>{`#${stock.ranking} - ${stock.title} (${stock.ticker})`}</h2>
			</div>
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>{`Exchange: ${stock.exchange}`}</li>
				<li className='list-group-item' id={"v"+`${stock.id}`}> {`Per Share: $${stock.amount}`}</li>
				<li className='list-group-item' id={stock.id}>{'Quantity: 0'}</li>
				<li className='list-group-item' id={"t"+`${stock.id}`}>{'Total Value: $0'}</li>
				<button id={stock.id} onClick={buystock} type="button">Buy </button>
				<button id={stock.id} onClick={sellstock} type="button">Sell</button>
			</ul>
		</div>
	);
};
//onclick handeler for the buy button
function buystock(){
	//event.target.getAttribute('id') code snippet gets the id of the button clicked which allows me to target specific stocks
	
	
	//get current quantity and only keep numerical and decimal
	var quantity = document.getElementById(event.target.getAttribute('id')).innerHTML.replace(/[^\d.-]/g, '');
	//increment the quantity by 1
	quantity++;
	//update the html element for quantity specifically targeting the specific stock
	document.getElementById(event.target.getAttribute('id')).innerHTML = 'Quantity: ' + quantity;
	
	//recalculate total value and formats the total value integer to two decimal
	const stockValue = document.getElementById("v"+event.target.getAttribute('id')).innerHTML.replace(/[^\d.-]/g, '');
	document.getElementById("t"+event.target.getAttribute('id')).innerHTML = 'Total Value: $' + (quantity*stockValue).toFixed(2);
	
	
}
//on click handler for the sell button
function sellstock(){
	
	//get current quantity and only keep numerical and decimal
	var quantity = document.getElementById(event.target.getAttribute('id')).innerHTML.replace(/[^\d.-]/g, '');
	
	//Prevents the user from owning negative stocks
	if(quantity > 0)
	{
		//decremenet quantity by 1
		quantity--;
		//update the html element for quantity specifically targeting the specific stock
		document.getElementById(event.target.getAttribute('id')).innerHTML = 'Quantity: ' + quantity;
		//recalculate total value and formats the total value integer to two decimal
		const stockValue = document.getElementById("v"+event.target.getAttribute('id')).innerHTML.replace(/[^\d.-]/g, '');
		document.getElementById("t"+event.target.getAttribute('id')).innerHTML = 'Total Value: $' + (quantity*stockValue).toFixed(2);
	}
}

export default Card;