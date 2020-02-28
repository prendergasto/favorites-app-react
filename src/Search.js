import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        characters: [],
        input: '',
    }

    handleSearch = async () => {
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.input}`)

        // https://git.heroku.com/serene-taiga-94943.git/name=${this.state.input}

        // ${req.query.search} --> might go on line 12

        console.log(data.body)
        this.setState({
            characters: data.body.results,
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.handleSearch}>Search!</button>
                <List characters={this.state.characters} />
            </div>
        )
    }
}