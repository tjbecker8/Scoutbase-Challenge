import React, {Component} from 'react';









class CountrySearch extends Component {
	//data


	//functions












	//render
	render() {
    console.log('props', this.props.data);
    //two objects showing, query is still going on in the background,
		return (
      <div>
        Country Code <input type="text" name="code"/><br/>
      <button id="code-button" type="submit" >Send</button>
      </div>
    )
	}
}




export default CountrySearch;
