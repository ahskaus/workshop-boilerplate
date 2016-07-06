import React from 'react';
import Headline from './main/Headline';
import Search from './main/Search';
import shouldPureComponentUpdate from 'react-pure-render/function';



export default class Main extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		let proper = this.props;

		return (
			<div className="pure-g">
				<div className="pure-u-1 pure-u-lg-1-24 pure-hide sm-hide md-hide center-align-h"></div>
				<div className="pure-u-1 pure-u-lg-22-24 main-column-parent">
					<div className="pure-g main-column">
						<div className="pure-u-1">
							<Headline headline={"EXAMPLE"} />
						</div>
						<div className="pure-u-1">
							<Search />
						</div>
					</div>
				</div>
				<div className="pure-u-1 pure-u-lg-1-24 pure-hide sm-hide md-hide center-align-h"></div>
			</div>
		);
	}
}


