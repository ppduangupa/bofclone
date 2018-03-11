import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReducerJobs from './reducer_jobs';
import ReducerSubJobs from './reducer_sub_jobs';
import ReducerSelectJob from './reducer_selected_job';

const rootReducer = combineReducers({
  jobs: ReducerJobs,
  subJobs: ReducerSubJobs,
  selectedJob: ReducerSelectJob,
  form: formReducer
});

export default rootReducer;
