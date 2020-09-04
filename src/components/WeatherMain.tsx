import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CitySelection from './CitySelection'
import City from '../interfaces/City';

interface MainState {
    currentCity?: City
}

class WeatherMain extends Component<{},MainState> {

    state: MainState = {}
    
    applyCity = (city: City) => {
        console.log(city)
        this.setState({currentCity: city})
    }

    render() {
        return (<>
            <Container>
                <CitySelection applyCity={this.applyCity}/>
                <Row>
                    <Col>

                    </Col>
                </Row>

            </Container>
        </>
        );
    }
}

export default WeatherMain;