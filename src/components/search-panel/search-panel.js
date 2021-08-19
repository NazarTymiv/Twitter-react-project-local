import React from 'react'

import './search-panel.css'

export default class SearchPanel extends React.Component {
    state = {
        value: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input onChange={this.onUpdateSearch} className="form-control serch-input" type="text" placeholder="Search by records" />
        )
    }
}