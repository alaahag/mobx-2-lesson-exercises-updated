import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{
    addRes = () => {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name, this.props.GeneralStore.numPeople)
    }

    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>
                {/* Add in # of people in restaurant */
                    this.props.RestaurantStore.restPopulation
                }
                </div>
                <div>
                {/* Add in # of completed tables with id "completedTables*/
                    this.props.RestaurantStore.completedTables
                }
                </div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */
                    this.props.RestaurantStore.reservations.map((m) => <Reservation key={m.id} res={m} />)
                }
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))