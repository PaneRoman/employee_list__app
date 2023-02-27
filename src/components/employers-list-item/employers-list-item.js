import { Component } from 'react';

import './employers-list-item.css';

// Classoviu syntaksis
class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     increase: false,
        //     rise: false
        // }

        this.state = { // Dlja ypravljaemogo Componenta
            value: props.salary + '$'
        }
    }

    // onIncrease = () => {    // Otslegivaetsja na Verxnem yrovne pri pomowi onToggleIncrease
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onRise = () => {    // Otslegivaetsja na Verxnem yrovne pri pomowi onToggleRise
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }

    onSalaryChange = (event) => {
        console.log(event.target.value);
        // const currentValue = event.target.value;
        // const value = Number(currentValue.slice(0, currentValue.length - 1));
        
        this.setState({ // Dlja ypravljaemogo Componenta
            value: event.target.value
        })

        this.props.onSalaryChange(event.target.value);
       
    }

    onBlur = () => {
        console.log('onBlur');
        this.setState({ // Dlja ypravljaemogo Componenta
            value: this.props.salary + '$'
        })
    }

    // onFocus = () => {
    //     console.log('onFocus')
    // }

    onClick = (event) => {
        console.log(event.target.value);
        // const currentValue = event.target.value;
        // const value = Number(currentValue.slice(0, currentValue.length - 1))
        this.setState({
            value: this.props.salary
        })
    }


    render() {

        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props;
      
        // const {increase, rise} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';

        if (increase) classNames += ' increase';
        if (rise) classNames += ' like';

        return(
            <li className={classNames}>
                {/* <span className="list-group-item-label" onClick={onToggleRise}>{name}</span> */}
                <span 
                    className="list-group-item-label" 
                    onClick={onToggleProp} 
                    data-toggle="rise"
                    style={{fontSize: '40px', transition: 'all', WebkitTransition: 'all', msTransition: 'all'}}>{name}</span>
                <input 
                    type="text"
                    className="list-group-item-input"
                    // defaultValue={salary + '$'}
                    onChange={this.onSalaryChange}
                    onBlur={this.onBlur}
                    // onFocus={this.onFocus}
                    onClick={this.onClick}
                    value={this.state.value} // Dlja ypravljaemogo Componenta
                    />
                <div className="d-flex justify-content-center align-item-center">
                    <button 
                        type="button"
                        className="btn-cookie btn-sm"
                        // onClick={onToggleIncrease}
                        onClick={onToggleProp}
                        data-toggle="increase">
                            <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

// Funkcional'niu syntaksis
// const EmployersListItem = (props) => {

//     const {name, salary, onDelete, onToggleProp, increase, rise} = props; //onToggleIncrease, onToggleRise

//     let classNames = 'list-group-item d-flex justify-content-between';

//         if (increase) classNames += ' increase';
//         if (rise) classNames += ' like';

//     return(
//         <li className={classNames}>
//             {/* <span className="list-group-item-label" onClick={onToggleRise}>{name}</span> */}
//             <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
//             <input 
//                 type="text"
//                 className="list-group-item-input"
//                 defaultValue={salary + '$'} />
//             <div className="d-flex justify-content-center align-item-center">
//                 <button 
//                     type="button"
//                     className="btn-cookie btn-sm"
//                     // onClick={onToggleIncrease}
//                     onClick={onToggleProp}
//                     data-toggle="increase">
//                         <i className="fas fa-cookie"></i>
//                 </button>
//                 <button 
//                     type="button"
//                     className="btn-trash btn-sm"
//                     onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     );
// }

export default EmployersListItem;