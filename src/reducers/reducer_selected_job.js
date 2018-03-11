import { SELECTED_JOB } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECTED_JOB:
      return action.payload;
    default:
      return state;
  }
}
