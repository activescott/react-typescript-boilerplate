import * as React from 'react'

type Props = {
  vehicleType: "Car" | "Truck" | "Motorcycle",
  color: string,
  numWheels: 2 | 4,
  age: number,
}
type State = {}

export default class Vehicle extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <div style={{border: '1px solid blue'}}>
        <div><b>VehicleType</b>: {this.props.vehicleType}</div>
        <div>Color: <span style={{color: this.props.color}}>{this.props.color}</span></div>
        <div>Wheels: {this.props.numWheels}</div>
        <div>Age: {this.props.age}</div>
      </div>
    )
  }
}
