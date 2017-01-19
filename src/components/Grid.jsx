import React from 'react'

const Grid = ({props}) => (
  <div className="container">
    <table className="table">
      <tbody>
        <tr className="track">
          <th className="row">Synth</th>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
        </tr>
        <tr className="track">
          <th className="row">Kick</th>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
          <td><button type="button" className="btn btn-outline-primary"></button></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Grid
