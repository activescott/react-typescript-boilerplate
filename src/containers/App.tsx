import * as React from 'react'
import * as DOM from 'react-dom'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Provider, connect } from 'react-redux'
import * as _ from 'lodash'
import Vehicle from '../components/Vehicle'
import configureStore from '../configureStore'
import { fetchVehicles, FILTER } from '../actions/actions'
import { createInputChangeEventToActionMapper } from '../actions/actionHelpers'

const root = document.getElementById('app')
const store = configureStore()

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }
  public render () {
    const vehicleNodes = _.map(this.props.vehicles, v => <Vehicle key={v.key} vehicleType={v.type} color={v.color} numWheels={v.numWheels} age={v.age} />)
    return (
      <div>
        <div>
          <label htmlFor="filter">Filter:</label><input id="filter" type="text" onChange={createInputChangeEventToActionMapper(FILTER, 'filter', this.props.dispatch)}/>
        </div>
        <div>
          { vehicleNodes }
        </div>
      </div>
    )
  }
}

function filterClientSide (filter: string, vehicles: any[]): any[] {
  if (filter) {
    filter = filter.toLowerCase()
    vehicles = _.filter(vehicles, v => {
      return v.type.toLowerCase().indexOf(filter) >= 0 ||
        v.color.toLowerCase().indexOf(filter) >= 0 ||
        v.numWheels.toString().toLowerCase().indexOf(filter) >= 0 || 
        v.age.toString().toLowerCase().indexOf(filter) >= 0
    })
  }
  // add a key prop
  return vehicles
}

function mapStateToProps (state: any, ownProps: any) {
  return {
    vehicles: filterClientSide(state.filter, state.vehicles.vehicles),
    requestStatus: state.vehicles.status,
    filter: state.filter
  }
}

function mapDispatchToProps (dispatch: ThunkDispatch<any, any, Action>) {
  return {
    dispatch: dispatch,
    fetchVehicles: () => dispatch(fetchVehicles()),
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

DOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>, 
  root
)

store.dispatch(fetchVehicles())
