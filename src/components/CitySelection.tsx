import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import City from '../interfaces/City';
import locationEndpoint from '../consts/endpoints'
import { queryAllByAltText } from '@testing-library/react';


interface SelectionState {
    showModal: boolean,
    query: string
}

class CitySelection extends Component<{applyCity: (city: City) => void},SelectionState> {

    state: SelectionState = {
        showModal: false,
        query: ""
    }

    typing = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement
        if (target) this.setState({
            query: target.value
        })
    }

    displayModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    loadCities = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(this.state.query)
        let query = `&q=${this.state.query}`
        let endpoint = locationEndpoint + query
        console.log(endpoint)
        fetch(endpoint)
            .then( response => )

        let cities = await response.json()

        console.log(cities)
    }

    render() {
        return (<>
            <Button variant="primary" onClick={this.displayModal}>
                Change city
            </Button>

            <Modal show={this.state.showModal} onHide={this.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={this.loadCities}>
                    <Form.Control
                        type="text"
                        value={this.state.query}
                        onChange={this.typing} />
                    {/* load cities here  */}
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}>
                        Close
          </Button>
                    <Button variant="primary" onClick={this.hideModal}>
                        Save Changes
          </Button>
                </Modal.Footer>

            </Modal>
            </>
        );
    }
}

export default CitySelection;