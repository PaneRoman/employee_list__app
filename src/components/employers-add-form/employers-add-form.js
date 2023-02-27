import { Component } from 'react';

import './employers-add-form.css';
// import './employers-add-form.scss';


// Classoviu syntaksis
class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (event) => {
        this.setState(({
            [event.target.name]: event.target.value
        }))
        
    }

    onAdd = (event) => {// Mou variant Funkcii onAdd()
        event.preventDefault()
        console.log(this.state)
        this.props.onAdd(this.state)

        this.setState({
            name: '',
            salary: ''
        })
        console.log(this.state)
    }

    // onAdd = (event) => {// Variant Funkcii onAdd() iz kursa
    //     const {name, salary} = this.state;

    //     event.preventDefault()
    //     console.log(this.state)
    //     this.props.onAdd(name, salary)

    //     this.setState({
    //         name: '',
    //         salary: ''
    //     })
    //     console.log(this.state)
    // }


    render() {

        const {name, salary} = this.state;

         return (
            <div className="app-add-form">
                <h3>Add new employer</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут"
                        name="name"
                        value={name}                
                        onChange={this.onValueChange} />
                    <input 
                        type="number" 
                        className="form-control new-post-label"
                        placeholder="ЗП в $"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button 
                        type="submit" 
                        className="btn btn-outline-light"
                        onClick={this.onAdd}>Добавить</button>
                    <p>{name}{salary}</p>
                </form>
            </div>
        );
    }
}

// Funkcional'niu syntaksis
// const EmployersAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3></h3>
//             <form className="add-form d-flex">
//                 <input 
//                     type="text" 
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут" />
//                 <input 
//                     type="number" 
//                     className="form-control new-post-label"
//                     placeholder="ЗП в $" />
//                 <button 
//                     type="submit" 
//                     className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     );
// }

export default EmployersAddForm;