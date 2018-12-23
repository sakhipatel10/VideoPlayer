import React from 'react';


class SearchBar extends React.Component{
	
	state = {myinput : ''};

	onInputChange = (event) => {

		this.setState({ myinput: event.target.value});
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.myinput);

	};

	render(){
		
		return(
			<div>
				<div className="search-bar ui segment">
				<form onSubmit= {this.onFormSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input type="text" value={this.state.myinput} onChange={this.onInputChange}/>
				</div>	
				</form>
			</div>
			</div>
			);


	}
}

export default SearchBar;