import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    completeRes = () => {
        this.props.RestaurantStore.completeRes(this.props.res.id);
    }

    seatRes = () => {
        this.props.RestaurantStore.seatRes(this.props.res.id);
    }

    render() {
        return (
            <div id={this.props.res.key} className={this.props.res.completed ? "conditional" : null}>
                <span>{this.props.res.name}</span>
                &nbsp;<span>{this.props.res.numPeople}</span>
                &nbsp;<span>{this.props.res.seated}</span>
                &nbsp;<button onClick={this.completeRes}>Complete Reservation</button>
                &nbsp;<button onClick={this.seatRes}>Seat Reservation</button>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should have a complete reservation button to complete the reservation

        )
    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation))