import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { setDocumentTitle, renderErrorsFor} from '../../utils';
import Actions from '../../actions/registrations';

class RegistrationsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign up');
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value
    };

    dispatch(Actions.sign_up(data));
  }

  render() {
    const {errors} = this.props;

    return (
      <div className="view-container registrations new">
        <main>
          <header>
            <div className="logo" />
          </header>
        </main>
      </div>
    )
  }
}
