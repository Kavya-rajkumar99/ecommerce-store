import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const FilterSection = () => {
  const {filters : {searchText} , updateFilterValue,allProducts} = useFilterContext()
  const getUniqueData = (allProducts,criteria) => {
    return ["All",...new Set(allProducts.map((item)=>item[criteria]))]
  }
  const categoryData = getUniqueData(allProducts,"category")
  return (
    <Wrapper>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" name="searchText" value={searchText} onChange={updateFilterValue}/>
        </form>
      </div>
      <div>
        <h3>Category</h3>
        <div>
          {
            categoryData.map((category,index) => (
              <button type="button" key={index} value={category} name="category" onClick={updateFilterValue}>{category}</button>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding : 9rem 0;
`

export default FilterSection
