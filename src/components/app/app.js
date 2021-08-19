import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends React.Component {
    state = {
        data: [
            {id: 1, label: 'Going to learn React', like: false, important: true},
            {id: 2, label: 'Going to learn JS', like: true, important: false},
            {id: 3, label: 'Going to learn nodejs', like: false, important: false}
        ],
        term: '',
        filter: 'all'
    }

    maxId = 4

    onDelete = id => this.setState(({data}) => ({data: [...data.filter(item => item.id !== id)]}))

    onToggleImportant = id => this.setState(({data}) => ({data: data.map(item => item.id === id ? {...item, important: !item.important} : {...item})}))

    onToggleLiked = id => this.setState(({data}) => ({data: data.map(item => item.id === id ? {...item, like: !item.like} : {...item})}))

    onAdd = body => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => ({data: [...data, newItem]}))
    }

    searchPost = (items, term) => term.length === 0 ? items : items.filter(item => item.label.indexOf(term) > -1)

    filterPost = (items, filter) => filter === 'like' ? items.filter(item => item.like) : items

    onUpdateSearch = term => this.setState({term})

    onUpdateFilter = filter => this.setState({filter})

    render() {
        const {data, term, filter} = this.state

        return(
            <AppBlock>
                <AppHeader 
                    liked={data.filter(item => item.like).length} 
                    allPosts={data.length}
                />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
                </div>
                <PostList posts={this.filterPost(this.searchPost(data, term), filter)} onDelete={this.onDelete} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked} />
                <PostAddForm onAdd={this.onAdd} />
            </AppBlock>
        )
    }
}