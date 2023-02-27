import { Component } from 'react';

import './search-panel.css';

// Funkcional'niu syntaksis
// const SearchPanel = () => {
    // return (
    //     <input 
    //         type="text"
    //         className="form-control search-input"
    //         placeholder="Найти сотрудника" />
    // );
// }

// Classoviu syntaksis
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (event) => {
        const term = event.target.value;

        this.setState({
            term: term
        });
        
        this.props.onUpdateSearch(term);
    }

    render() {

        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onUpdateSearch}
                value={this.state.term}/>
        );
    }
}

export default SearchPanel;