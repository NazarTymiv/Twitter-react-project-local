import React from 'react'

import './post-add-form.css'

export default class PostAddForm extends React.Component {
    state = {
        value: ''
    }

    onValueChanged = e => {
        this.setState({value: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
                <input value={this.state.value} onChange={this.onValueChanged} type="text" placeholder="What do you think now?" className="form-control new-post-label" />
                <button type="submit" className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}