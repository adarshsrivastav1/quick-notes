import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: (JSON.parse(localStorage.getItem('key'))) ? (JSON.parse(localStorage.getItem('key')).characters) : []
    };
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }
    handleSubmit = character => {
        let newstate = { characters: [...this.state.characters, character] };
        this.setState(newstate);
        localStorage.setItem('key',JSON.stringify(newstate))
    }

    removeAll=()=>{
        let data = {
            characters:[]
        }
        localStorage.removeItem('key')
        this.setState(data)
    }

    render() {
        const { characters } = this.state;
        return (
            <div className="container">
                <h1>quick-notes</h1>
                <p>Add a character with a Title and a Description to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <input
                type='button'
                value='Remove All'
                onClick={this.removeAll}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;