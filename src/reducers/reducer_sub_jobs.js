import { FETCH_SUB_JOBS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SUB_JOBS:
      return action.payload;
    default:
      return state;
  }
}
