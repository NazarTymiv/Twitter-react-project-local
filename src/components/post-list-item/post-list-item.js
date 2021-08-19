import React from 'react'

import './post-list-item.css'

export default class PostListItem extends React.Component {
    render() {
        const {label, onDelete, important, like, onToggleImportant, onToggleLiked} = this.props

        return (
            <div className={`app-list-item d-flex justify-content-between ${important ? 'important' : ''} ${like ? 'like' : ''}`}>
                <span onDoubleClick={onToggleLiked} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center alight-item-center">
                    <button onClick={onToggleImportant} type="button" className="btn-star btn-sm">
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button onClick={onDelete} type="button" className="btn-trash btn-sm">
                        <i className="bi bi-trash"></i>
                    </button>
                    <i className="bi bi-heart-fill"></i>
                </div>
            </div>
        )
    }
}