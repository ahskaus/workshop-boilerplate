import React from 'react';
import Image from './Image';
import shouldPureComponentUpdate from 'react-pure-render/function';



export default class Header extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	render() {
		let propjs = this.props.spread.toJS();
		return (
				<header>
					<div className="pure-g header back-color center-align-h">
					    <div className="pure-u-1-1"></div>
					    <div className="pure-u-1-1">
					    	<Image resp="true" CSS="center-align-h pure-img logo-image-style" src={propjs.logo} />
					    </div>
					    <h4 className="pure-u-1-1 center-align-h header-tagline">{propjs.tagline}</h4>
				    </div>
				</header>
		);
	}
}