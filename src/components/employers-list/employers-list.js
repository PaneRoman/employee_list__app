import { Component  } from "react";

import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

// Classoviu syntaksis
// class EmployersList extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const elements = this.props.data.map(item => {
//             const {id, ...itemProps} = item;
//             return (
//             // <EmployersListItem name={item.name} salary={item.salary}/>
//             <EmployersListItem key={id} {...itemProps}/> // identi4naja zapis' zapisi viwe  
//             );
//         })

//         return (
//             <ul className="app-list list-group">
//                 {elements}
//             </ul>
//         );
        
//     }
// }


// Funkcional'niu syntaksis
const EmployersList = ({data, onDelete, onToggleProp, onSalaryChange}) => { //onToggleIncrease, onToggleRise

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/> // identi4naja zapis' zapisi nige
            <EmployersListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(value) => onSalaryChange(id, value)} /> 
        );
    })

    console.log(elements)

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;

