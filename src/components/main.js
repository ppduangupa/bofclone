import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import JobDetail from '../components/job_detail';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedJob: '',
      selectedSubJobs: ''
    };
  }

  componentDidMount() {
    this.props.fetchJobsAndSubJobs();
  }

  selectJob(event) {
    console.log(event);
    this.setState({
      selectedJob: event.target.value
    });
    console.log(this.state.selectedJob);
  }

  selectSubJob(event) {
    this.setState({
      selectedJob: event.target.value
    });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderJobs(field) {
    const { data } = field;

    return (
      <div>
        <label>{field.label}</label>
        <select onChange={this.selectJob.bind(this)} value={this.state.selectedJob}>
          {_.map(data, (value) => {
            return (
              <option value={value} key={value}>{value}</option>
            );
          })}
        </select>
      </div>
    );
  }

  renderSubJobs(field) {
    const { data } = field;

    return (
      <div>
        <label>{field.label}</label>
        <select>
          {_.map(data, (value) => {
            return (
              <option value={value} key={value}>{value}</option>
            );
          })}
        </select>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { jobs } = this.props;
    const { subJobs } = this.props;

    if(_.isEmpty(jobs) || _.isEmpty(subJobs)) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Charactor Name"
            name="name"
            component={this.renderField}
          />
          <Field
            label="Choose Jobs"
            name="jobs"
            data={jobs}
            component={this.renderJobs.bind(this)}
          />
          <Field
            label="Choose Sub Jobs"
            name="subJobs"
            data={subJobs}
            component={this.renderSubJobs.bind(this)}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name || values.name.length < 3) {
    errors.name = 'Enter a name that is atleast 3 characters';
  }

  return errors;
}

function mapStateToProps({ jobs, subJobs }) {
  return { jobs, subJobs };
}

export default reduxForm({
  validate,
  form: 'MainForm'
})(
  connect(mapStateToProps, actions)(Main)
);
