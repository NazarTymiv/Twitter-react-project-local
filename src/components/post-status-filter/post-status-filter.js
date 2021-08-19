import React from 'react'

import './post-status-filter.css'

export default class PostStatusFilter extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'}
    ]

    render() {
        const {filter, onUpdateFilter} = this.props

        return (
            <div className="btn-group">
                {this.buttons.map(({name, label}) => <button key={name} onClick={() => onUpdateFilter(name)} type="button" className={filter === name ? 'btn btn-info' : 'btn btn-outline-secondary'}>{label}</button>)}
            </div>
        )
    }
}