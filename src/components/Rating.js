import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Rating = ({ stars, reviews }) => {
  const starRating = Array.from({ length: 5 }, (element, index) => {
    return (
      <span key={index}>
        {
          stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= index + 0.5 ? (
            <FaStarHalfAlt className="icon"/>
          ) : (
            <AiOutlineStar className="icon empty-icon"/>
          ) //3.8
        }
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {starRating}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
     .icon {
       font-size: 2rem;
       color: orange;
     }
    .empty-icon {
      font-size: 2.4rem;
    }
     p {
       margin: 0;
       padding-left: 1.2rem;
    }
  }
`;
export default Rating;
