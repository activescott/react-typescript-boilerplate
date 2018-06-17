import 'whatwg-fetch'
import { Dispatch } from 'redux'

export const REQUEST_VEHICLES = 'REQUEST_VEHICLES'
export const FILTER = 'FILTER'

interface GetStateFunc {
  (): any
}

export function fetchVehicles () {
  return (dispatch: Dispatch, getState: GetStateFunc) => {
    dispatch({
      type: REQUEST_VEHICLES,
      status: 'pending'
    })
    const { filter } = getState()
    let url = `/data/vehicles.json?filter=${filter}`
    fetch(url)
      .then(response => response.json() )
      .then(json => dispatch(receiveVehiclesSuccess(json)))
      .catch(err => dispatch(receiveVehiclesError(err)))
  }
}

function receiveVehiclesSuccess (data: any) {
  console.log('receiveVehiclesSuccess:', data)
  return { 
    type: REQUEST_VEHICLES,
    status: 'success',
    vehicles: data.vehicles
  }
}

function receiveVehiclesError (err: Error) {
  return { 
    type: REQUEST_VEHICLES,
    status: 'error',
    response: err && err.message ? err.message : 'unknown error'
  }
}

export function filter (filter: string) {
  return {
    type: FILTER,
    filter
  }
}
