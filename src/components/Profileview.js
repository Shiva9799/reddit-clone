// ProfileView.js
import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from './components/redux/actions';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bio: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, bio } = this.state;
    this.props.updateProfile({ name, bio });
    this.setState({
      name: '',
      bio: '',
    });
  };

  render() {
    const { name, bio } = this.state;
    const { profile } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>
        ) : (
          <p>No profile available.</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
