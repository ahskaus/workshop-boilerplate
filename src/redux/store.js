import settings from './../data/settings';
import {List, Map, fromJS} from 'immutable';
import {createStore, compose} from 'redux';
import {loadMap, initializeData} from './action_creators';
import reducer from './reducer';


const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

store.dispatch(loadMap(fromJS(settings)));


export default store;