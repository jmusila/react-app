import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Post_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <div>Add Post</div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" type="text" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit ">Submit</button>
                </form>
            </div>
        )
    }
}

Post_form.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Post_form);