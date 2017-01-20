import React from 'react'

import Track from './Track'

const Grid = (props) => {
  const tracks = props.tracks.map((track, index) => <Track key={index} track={track} />)
  return (
    <div className="container">
      <table className="table">
        <tbody>
          {tracks}
        </tbody>
      </table>
    </div>
  )
}

export default Grid

// <tr className="track">
//   <th className="row">Synth</th>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
// </tr>
// <tr className="track">
//   <th className="row">Kick</th>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
//   <td><button type="button" className="btn btn-outline-primary"></button></td>
// </tr>
