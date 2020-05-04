import React from 'react'
const Search=({setQuery,query,handleFetch})=>{

  return(
<div className='container'>
<input className="form-control mt-5"
type="text"
placeholder="Search..."
onChange={e => setQuery(e.target.value)}
value={query}
onKeyPress={handleFetch}/>
</div>

  )

}
export default Search
