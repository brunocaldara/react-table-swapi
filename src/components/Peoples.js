import React, { Component } from 'react';
import ReactTable from "react-table";

class Peoples extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            loading: true,
            peoples: []
        }

        this.urlAPI = 'https://swapi.co/api/people/?page=1';

        this.columns = [
            {
                Header: 'Name',
                accessor: 'name',
                id: 'name',
                sortable: true                
            },
            {
                Header: 'Height',
                accessor: 'height',
                id: 'height',
                sortable: true
            }, 
            {
                Header: 'Mass',
                accessor: 'mass',
                id: 'mass',
                sortable: true
            }
        ]
    }

    componentDidMount() {
        fetch(this.urlAPI)
            .then(response => response.json())
            .then(response => this.setState({ count: response.count, loading: false, peoples: response.results }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Peoples - {this.state.count}</h1>

                {console.log(this.peoples)}

                <ReactTable 
                    data={this.state.peoples}
                    columns={this.columns}
                    defaultPageSize={10}
                    loading={this.state.loading}
                    filterable
                />
            </div>
        );
    }
}

export default Peoples;