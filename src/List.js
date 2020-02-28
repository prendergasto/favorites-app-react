import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(character => 
                        <li id="character-list">
                            <h1>{character.name}</h1>
                            <img src={character.image} alt="" id="character-images"/>
                            <h3>Species: {character.species}</h3>
                            
                        </li>
                )}
            </div>
        )
    }
}