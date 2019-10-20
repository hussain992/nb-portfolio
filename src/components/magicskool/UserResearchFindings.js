import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Image from '../../shared/Image';

let CardsArr = [
  {
    content: "Only the parents/guardians who went to Sapna Book Store to buy the school textbooks came to know that they facilitate a complete pre-made school kit."
  },
  {
    content: " The client wanted to give an online experience, where the parents can directly order their child's complete school kit as per their academic year. "
  },
  {
    content: " Tie-up with the schools where they can fetch the data of the students moving forward in the next grade and create a school kit for those students. "
  },
  {
    content: " The survey also showed a positive response where the parents do like when they’re referred to a preferred book store by the school to buy all school textbooks in one place "
  }
]

const BoldTypography = styled.div`
  font-weight: 600;
  padding-top: 20px;
  padding-bottom:5px;
`;
const Card = styled.div`
  background: #F4FAFB;
  box-shadow: -8px 12px 18px rgba(25, 42, 70, 0.12);
  border-radius: 18px;
  padding: 10px;
  width: 50%;
  border-radius: 10px;
  margin: 60px 0px;
  display: flex;
  align-items: flex-start;
  border: 1px solid #eee;
`;

export default class UserResearchFindings extends Component {
  render() {
    let cardNo = 0
    return (
      <Fragment>
        <BoldTypography>
          User Research Findings
        </BoldTypography>
        {
          CardsArr.map(data => {
            cardNo = cardNo + 1;

            return(
              <Card style={{marginLeft:cardNo%2 == 0 ? '20%': 0}}>
                <Image path="LOCAL" src="ms/pin.png" />
                {data.content}
              </Card>
            )
          })
        }
      </Fragment>
    )
  }
}
