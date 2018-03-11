import db from '../firebase';

const ROOT_URL = 'http://fstestingdb.xyz/gamestats/';

export const FETCH_JOBS = 'fetch_jobs';
export const FETCH_SUB_JOBS = 'fetch_sub_jobs';
export const SELECTED_JOB = 'selected_job';

export function fetchJobsAndSubJobs() {
  return (dispatch, getState) => {
    return dispatch(fetchJobs()).then(() => {
      const firstJob = getState().jobs[0];
      return dispatch(fetchSubJobs(firstJob))
    })
  }
}

export function fetchJobs() {
  const jobs = db.collection("Jobs");

  return (dispatch) => {
    return jobs.get().then((snapshot) => {
      var data = [];
      _.forEach(snapshot.docs, (doc) => {
          data = [ ...data, doc.id];
      });

      dispatch({
          type: FETCH_JOBS,
          payload: data
      })
    });
  }
}

export function fetchSubJobs(job) {
  const subJobs = db.collection("Jobs").doc(job).collection('SubJobs');

  return (dispatch) => {
    subJobs.get().then((snapshot) => {
      var data = [];
      _.forEach(snapshot.docs, (doc) => {
          data = [ ...data, doc.id];
      });

      dispatch({
          type: FETCH_SUB_JOBS,
          payload: data
      })
    });
  }
}

export function selectedJob(job) {
  return {
      type: SELECTED_JOB,
      payload: job
  };
}
