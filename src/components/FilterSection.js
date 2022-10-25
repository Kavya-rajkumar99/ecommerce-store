import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const FilterSection = () => {
  const {filters : {searchText} , updateFilterValue} = useFilterContext()
  return (
    <Wrapper>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" name="searchText" value={searchText} onChange={updateFilterValue}/>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding : 9rem 0;
`

export default FilterSection
