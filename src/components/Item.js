import React from 'react'
const Item=({data})=>{
console.log(data)
  return(
<div className="container mt-5">
  <div className="card">
  <div className="card-body">
    <h5 className="card-title">{}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{}</h6>
    <p className="card-text">{}</p>
  </div>
</div>
</div>
)
}
export default Item
