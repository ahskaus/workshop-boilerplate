import React from 'react';
import classNames from 'classnames';


export default class Image extends React.Component {
	classCSS() {
		let responsive = this.props.resp || false;
		return classNames(this.props.CSS, {'pure-img': responsive});
	}

	render() {
		return(<img className={this.classCSS()} src={this.props.src}  />);
	}
}