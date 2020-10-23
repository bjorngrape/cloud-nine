import React from 'react'
import { BrowserRouter as useParams } from "react-router-dom";

function Salon () {

const {id} = useParams()

    // Tried several different solutions but was unable to make it work properly

    // const {SalonData} = this.props
    // const rows = SalonData.map((row, index) => {
    // this.props.route.params.id
    // {`/${match.params.id}`}

  return (
    <table>
      <tbody >
        <tr>
          <td>{this.props.id}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Salon