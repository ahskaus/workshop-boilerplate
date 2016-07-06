import React from 'react';
import { GridContainer, Grid } from './Grid';
import shouldPureComponentUpdate from 'react-pure-render/function';


export default class App extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

  	render() {
		return (<GridContainer />);
  	}
};
