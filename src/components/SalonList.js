import React from 'react'
import SalonData from "../SalonData"
import { BrowserRouter as Router, Link } from "react-router-dom";

function SalonList () {

const salonList = SalonData.map((row, index) => {
    
  return (
    <Router key={index}>
      <Link to={`/salon/${index+1}`}>
        <table key={index}>
          <tbody>
            <tr>
              <td>{row.time}</td>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.adress}</td>
            </tr>
          </tbody>
        </table>
      </Link>
    </Router>         
    )
})

return (    
    <>{salonList} </>
    )
}

export default SalonList