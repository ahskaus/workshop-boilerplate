import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';



class List extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.items.map(function(item) {
						return <li key={item}>{item}</li>
					})
				}
			</ul>
		)  
	}
}

class FilteredList extends React.Component {


	constructor() {
		super();
		this.state = {
				initialItems: [
					"Apples",
					"Broccoli",
					"Chicken",
					"Duck",
					"Eggs",
					"Fish",
					"Granola",
					"Hash Browns"
				],
				items: [
				]
			};
	}


	filterList = (event) => {
		let updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item){
			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items: updatedList});
	}

	componentWillMount() {
		this.setState({items: this.state.initialItems});
	}

	render() {
		return (
			<div className="filter-list">
			<input type="text" placeholder="Search" onChange={this.filterList}/>
			<List items={this.state.items}/>
			</div>
		);
	}
}



export default class Search extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	render () {
		let proper = this.props;

	    return (
	    	<div className="search">
		    	<div className="pure-u-1-1 search-title">
			    	<div className="search-title">{"Autocomplete"}</div>
		    	</div>
		    	<div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-3">
		    	</div>
		    	<div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-3">
		    		<FilteredList />
		    	</div>
		    	<div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-3">
		    	</div>
	    	</div>
		);
	}
}


 // <List items={[1,2,3]} />
