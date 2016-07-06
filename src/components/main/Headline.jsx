import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';



export default class Headline extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		let proper = this.props;

		return (
			<div className="pure-g headline-top">
				<div className="pure-u-1-1 headline">
					<div className="centered-headline">
						{proper.headline}
					</div>
				</div>
			</div>
		);
	}
}