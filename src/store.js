import {createStore} from 'redux';

function reduce (state, action) {
  console.log(1)
}

const store = createStore(reduce);

export default store;