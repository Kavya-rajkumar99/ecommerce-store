import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images=[{url:""}]}) => {
    const [mainImage,setMainImage] = useState(images[0])
  return (
    <Wrapper>
     <div className="grid grid-four-column">
        {
         images.map((image,index)=>(
            <figure key={index}>
                <img src={image.url} alt={image.filename} onClick={()=>setMainImage(image)} />
            </figure>
         ))
        }
     </div>
     <div className ="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 0.4fr 1fr;
   gap: 1rem;
   .grid {
        width: 100%;
        gap: 1rem;
      img {
         max-width: 100%;
          max-height: 100%;
          background-size: cover;
          object-fit: contain;
          cursor: pointer;
          box-shadow: ${({ theme }) => theme.colors.shadow};
        }
   }
   .main-screen {
        display: grid;
        place-items: center;
        order: 1;
     img {
       max-width: 100%;
        height: auto;
       box-shadow: ${({ theme }) => theme.colors.shadow};
     }
   }
  .grid-four-column {
    grid-template-columns: 1fr;
    //  grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
     .grid-four-column {
       grid-template-rows: 1fr;
       grid-template-columns: repeat(4, 1fr);
     }
  }
`;
export default ProductImages
