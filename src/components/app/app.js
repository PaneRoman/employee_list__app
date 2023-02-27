import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jonh C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 7000, increase: true, rise: false, id: 3},
                {name: 'Roman P.', salary: 25000, increase: false, rise: false, id: 4}, 
                {name: 'Jonh Doe.', salary: 1000, increase: false, rise: true, id: 5},  
            ],
            term: '',
            filter: 'all'
        }

        this.newId = 6;

        // this.employersCounter = null // Est' bolee prostoe rewenie. On nige v render() ;))
    }

    // deleteItem = (id) => { // Mou variant Funkcii deleteItem()
    //     const newData = this.state.data.filter(item => item.id != id)
    //     this.setState({
    //         data: newData
    //     })
    // }

    // deleteItem = (id) => { // Odin iz variantov Funkcii deleteItem() pokazanou v kyrse
    //     this.setState(({data}) => {
    //         const index = data.findIndex(item => item.id == id);
            
    //         const before = data.slice(0, index);
    //         const after = data.slice(index + 1);
    //         const newArr = [...before, ...after];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    deleteItem = (id) => { // !! Ly4wiu variant Funkcii deleteItem() pokazanou v kyrse
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id != id)
            }
        })

    }

    addItem = (employer) => {// Mou variant Funkcii addItem()
        // Validation Simple
        if (employer.name == '' || employer.salary == '') {
            return
        }

        employer.id = this.newId++;
        employer.increase = false;
        employer.rise = false;
        // this.newId++
        // console.log('employer', employer);
        // console.log('newId', this.newId);

        this.setState(({data}) => {
            const newData = [...data, employer];
            console.log(newData);
             return {
                data: newData
             }
        })

    }

    // addItem = (name, salary) => {// Variant Funkcii addItem() iz kursa
    //     const newItem = {
    //         name,
    //         salary,
    //         increase: false,
    //         rise: false,
    //         id: this.newId++
    //     }

    //     this.setState(({data}) => {
    //         const newArr = [...data, newItem];
    //         console.log(newArr);
    //          return {
    //             data: newArr
    //          }
    //     })
    // }

    // onToggleIncrease = (id) => { // Odin iz rasprostranennix(ne samiu korotkiu) sposobov sozdanija Funkcii onToggleIncrease()
    //     console.log(`Increase this ${id}`);

    //     this.setState(({data}) => {
    //         const index = data.findIndex(item => item.id === id);

    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
    //         console.log('newArr', newArr)

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    // onToggleIncrease = (id) => { // Vtorou luchwiu variant Funkcii onToggleIncrease()
    //     console.log(`Increase this ${id}`);

    //     // this.setState(({data}) => {
    //         // const newData = data.map((item) => {
    //         //     if (item.id == id) {
    //         //         return {...item, increase: !item.increase}
    //         //     }
    //         //     return item;
    //         // })
    //         // console.log('newData', newData)

    //         // return {
    //         //     data: newData
    //         // }

    //     // })

    //     this.setState(({data}) => ({// Sokrawennaja zapis' setState() s kodom viwe
    //         data: data.map((item) => {
    //             if (item.id == id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))

    // }

    // onToggleRise = (id) => {
    //     console.log(`Rise this ${id}`);

    //     this.setState(({data}) => ({
    //         data: data.map((item) => {
    //             if (item.id == id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))

        
    // }

    // Ob'edinjaem onToggleRise() i onToggleIncrease() v odny Funkciu

    onToggleProp = (id, prop) => {
        console.log(`id>`, id, 'prop>', prop);

        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id == id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))

        
    }

    searchEmp = (items, term) => { // searchEmp = (items, term, filter) dlja moeu realizacii Filtra
        if (term.length === 0) { // if (term.length === 0 && filter === '') yslovie dlja moeu realizacii Filtra
            return items;
        }
        
        if (term.length) {
            // return items.filter(item => item.name.toLowerCase().includes(term)) // Mou variant algoritma poiska
            return items.filter(item => item.name.indexOf(term) > -1); //Variant algoritma poiska iz kursa
        }

        // if (filter === 'rise') {   // Proverki dlja moeu realizacii Filtra
        //     return items.filter(item => item.rise);
        // }

        // if (filter === 'salary') {
        //     return items.filter(item => item.salary > 1000);
        // }

        // if (filter === 'all') {
        //     return items;
        // }
        
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term,
        });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
                // break; // break mogno opustit'. React i tak poumet chto nugno vipolnit' komandu break
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
                // break;
            default: 
                return items;
                // break;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }

    onSalaryChange = (id, salary) => {
        console.log(id, salary);
        
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary}
                }
                return item;
            })
        }))

    }

    // onFilter = (filter) => { // Mou variant realizacii Filtra
    //     this.setState({
    //         term: '',
    //         filter: filter
    //     })
    // }

    // employersCount = () => {  // Est' bolee prostoe rewenie. On nige v render() ;))
    //     // console.log('this.state.data.length', this.state.data.length);
    //     this.employersCounter = this.state.data.length;
    //     // console.log(this.employersCounter)
    // }


    render() {
        const {data, term, filter} = this.state;
        // this.employersCount(); // Est' bolee prostoe rewenie. On nige ;))
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        // const visibleData = this.searchEmp(data, term, filter); // Mou variant Ispol'zovanija odnou funkciu dlja Poiska i Filtra
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // Kompinirovaniu sposob Filtra i Poiska iz kursa
        console.log(this.state)
        
        return (
            <div className="app">
                 <AppInfo employers={employers} increased={increased}/>
     
                 <div className="search-panel">
                     <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                     {/* <AppFilter  onFilter={this.onFilter}/>  *Iz moeu realizacii Filtra*/}
                     <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                 </div>
     
                 <EmployersList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange}/>
                 {/* <EmployersList data={this.state.data} onDelete={(id) => console.log(id)}/> * testovaja props Funkcija */}
                 <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

// function App() {

//     let data = [
//         {name: 'Jonh C.', salary: 800, increase: false, id: 1},
//         {name: 'Alex M.', salary: 3000, increase: true, id: 2},
//         {name: 'Carl W.', salary: 7000, increase: true, id: 3},
//         {name: 'Roman P.', salary: 25000, increase: false, id: 4},
        
//     ]

//     console.log('data', data)

//     return (
//        <div className="app">
//             <AppInfo/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>

//             <EmployersList data={data} onDelete={(id) => {
//                 data = data.filter(item => item.id != id)
//                 console.log(data)
//             }}/>
//             <EmployersAddForm data={data}/>
//        </div>
//     )
// }

export default App;