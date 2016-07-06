import {List, Map, Repeat, fromJS} from 'immutable';
import {containsAll} from 'strman';
import cloneDeep from 'lodash/cloneDeep';


function loadMap(state, newState) {

	return state.merge(newState);
}


export default function(state = Map(), action) {
	switch (action.type) {
		case 'LOAD_MAP':
			return loadMap(state, action.map);
		case 'INITIALIZE_DATA':
			return initializeData(state, action.data);
		case 'DATA_CHANGE':
			return dataChange(state, action.component, action.data, action.key);
		case 'TAB_MIN_MAX':
			return state.updateIn(["main", "search", "params"], 
				params => changeTabState(params, action.component, action.tabState));
	}
	return state;
}