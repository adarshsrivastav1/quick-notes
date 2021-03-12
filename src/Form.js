import React, {Component} from 'react';


class Form extends Component {
    initialState = {
        name: '',
        job: ''
    };
    state = this.initialState;
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        if ((this.state.name==='') && (this.state.job==='')){
            alert("Don't add Empty fields");
        }
        else{
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        }
    }

    render() {
        const { name, job } = this.state; 
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Title</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Description</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <input type="button" value='Add' onClick={this.onFormSubmit} />
            </form>
        );
    }
}

export default Form;
