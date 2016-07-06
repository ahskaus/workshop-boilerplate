import React from 'react';
import Header from './Header';
import Main from './Main';
import {connect} from 'react-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
import * as actionCreators from './../redux/action_creators';


export class Grid extends React.Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
    render() {
      return (
        <div>
          <Header spread={this.props.header}   />
  		  	<Main />
    		</div>
      );
    }
}

          // <Main   spread={this.props.main} models={this.props.models} dataChange={this.props.dataChange} 
          //         changeTabState={this.props.changeTabState} />

function mapStateToProps(state) {
  return {
    header: state.get('header'),
    main:   state.get('main'),
  };
}

export const GridContainer = connect(mapStateToProps, actionCreators)(Grid);