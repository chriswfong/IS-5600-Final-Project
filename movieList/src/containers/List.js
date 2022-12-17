import React, { Component } from 'react';
import Card from '../components/Card/Card';

class List extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			loading: true,
		};
	}
	//attempts to load the JSON data 
	async componentDidMount() {
		const stocks = await fetch('../assets/data.json');
		const stocksJSON = await stocks.json();
		
		if (stocksJSON) {
			this.setState({
				data: stocksJSON,
				loading: false,
			});
		}
	}
	
	render(){
		const { data, loading } = this.state;
	//leave a loading message if JSON data is still loading or fails to load
	if (loading) {
		return <div>Loading...</div>
	}
	
	return (
	<div className='row'>
		{data.map(stock =>
		<div className='col-sm-2'>
			<Card key={ stock.id } stock={ stock} />
		</div>
		)}
	</div>
	);
	
	}
};

export default List;