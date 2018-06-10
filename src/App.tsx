import * as React from 'react'
import * as DOM from 'react-dom'
import Vehicle from './components/Vehicle'

const root = document.getElementById('app')

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }
  public render () {
    return (
      <div>
        <Vehicle vehicleType="Car" color="red" numWheels={4} age={1} />
        <Vehicle vehicleType="Truck" color="red" numWheels={4} age={1} />
      </div>
    )
  }
}

DOM.render(<App />, root)
