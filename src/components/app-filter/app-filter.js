import { Component } from 'react';

import './app-filter.css'


// Funkcional'niu syntaksis
const AppFilter = (props) => { // Variant realizacii komponenta Filtra iz kursa cherez funkcionalniu syntaksis 
    const buttonsData = [ // Na praktike knopki chasto formiryutsa is dannix
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'ЗП больше 1000$', colored: true},
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name; // takaja zapis' vozmogna. Xot' i ne ochevidna
        const clazz = active ? 'btn-light' : 'btn-outline-light'; // takaja zapis' vozmogna. Xot' i ne ochevidna
        const style = colored ? {color: 'yellow'} : null

        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => {props.onFilterSelect(name)}}
                // style={colored ? {color: 'yellow'} : null} // Mogno vstavljat' logiky vo vnutr'
                style={style} // Ili vinesti otdel'nou peremennou
                >
                    {label}
            </button>
        );
    })
    
    return (
        <div className="btn-group">

        {buttons}

            {/* <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
                name='rise'>
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
                name='moreThen1000'>
                    ЗП больше 1000$
            </button> */}
        </div>
    );
}

// Classoviu syntaksis
// class AppFilter extends Component{ // Mou variant realizacii komponenta Filtra cherez classoviu syntaksis
//     constructor(props) {
//         super(props);
//     }

//     onFilter = (event) => {
//         this.props.onFilter(event.target.name)
//     }

//     render() {
//         return(
//             <div className="btn-group">
//                 <button 
//                     className="btn btn-light"
//                     type="button"
//                     name='all'
//                     onClick={this.onFilter}>
//                         Все сотрудники
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     name='rise'
//                     onClick={this.onFilter}>
//                         На повышение
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     name='salary'
//                     onClick={this.onFilter}>
//                         ЗП больше 1000$
//                 </button>
//             </div>
//         );
//     }
// }

export default AppFilter;