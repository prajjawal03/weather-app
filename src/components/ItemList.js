import React from 'react'
import Item from "./Item"
const ItemList=({data})=>{
console.log(data)
  return   <div className='container'>
    {data.map(data=><Item key={data.id} data={data}/>)}
    </div>

}
export default ItemList
