export function loadMap(map) {
  return {
    type: 'LOAD_MAP',
    map
  };
}

export function initializeData(data) {
  return {
    type: 'INITIALIZE_DATA',
    data
  };
}

export function dataChange(component, data, key) {
  return {
    type: 'DATA_CHANGE',
    component,
    data,
    key
  };
}

export function changeTabState(component, tabState) {
  return {
    type: 'TAB_MIN_MAX',
    component,
    tabState
  };
}
