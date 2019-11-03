import React, { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import Image from '../../shared/Image';
import Typography from '@material-ui/core/Typography';
import UserResearchFindings from './UserResearchFindings';

const iconImgArr = [
  {
    imgSrc: '1',
    numImg: 'No1',
    content: 'Your complete school kit on magicskool website'
  },
  {
    imgSrc: '2',
    numImg: 'No2',
    content: 'Add your kit to the cart'
  },
  {
    imgSrc: '3',
    numImg: 'No3',
    content: 'Quick and easy payment'
  },
  {
    imgSrc: '4',
    numImg: 'No4',
    content: 'Get your kit delivered or pick up from your school'
  }
]
const dotArr = [
  { key: 1 }, { key: 2 }, { key: 3 }
]
const BoldTypography = styled.div`
  font-family: 'BwNistaGeo-Bd';  
  padding-top: 20px;
  padding-bottom:5px;
  font-size: 18px;
`;

const MainDiv = styled.div`
  /* width: 90%; */
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 0px;
  align-items: center;
 
`;

const ImageBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 200px;
`;

const ImageText = styled.div`
  padding: 0px 10px;
  width: 100px;
`;

const DotSeperator = styled.div`
  border-bottom: 2px dotted #4D007E;
  width: 50px;
  margin: 0px 30px;
`;
const ItalicTypography = styled.div`
  font-style: italic;
  padding: 10px 0px; 
`;

const BulletBox = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;

`;
const Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50% ;
  background-color: #2F2F2F;
`;

const BulletDesc = styled.div`
  font-family: Bw Nista Geometric;
  font-size: 18px;
  line-height: 30px;
  color: #2F2F2F;
  flex: 1;
`;
const BulletRow = styled.div`
  display: flex;
  padding-bottom: 15px;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;

`;

class ResearchTab extends Component {
  render() {
    let no = 0;
    return (
      <MainDiv>
        <Typography>
          Aside from online research, a meeting with the stakeholder was held with the team to get a better understanding of the product and users.
        </Typography>
        <BoldTypography>
          Stakeholder Meeting
        </BoldTypography>
        <Typography>
          MagicSkool brand under Sapna Book House (Bangalore, India) being the major dealer of selling school textbooks and related kinds of stuff collaborated with many schools in Bangalore and still counting, proposed an idea of an eCommerce website which would help them to smoothen out their offline operations to online. With MagicSkool, the parents/students would easily onboard, find their already pre-made school-kit/combo respective to their class upgrade, will have a smooth checkout, both online and pay on delivery options, lastly, gets the delivery of their kit/combo at home or self pick up service to their respective schools
        </Typography>
        <ImageRow>
          {
            iconImgArr.map(data => {
              no = no + 1;
              console.log("hello", no)
              return (
                <Fragment>
                  <ImageBox>
                    <Image path="LOCAL" src={`ms/${data.numImg}.png`} />
                    <ImageText>
                      <Image path="LOCAL" src={`ms/${data.imgSrc}.png`} />
                      <small>
                        {data.content}
                      </small>
                    </ImageText>
                  </ImageBox>
                  {
                    no == 4 ? null :
                      <DotSeperator />
                  }
                </Fragment>

              )
            })
          }

        </ImageRow>
        <BoldTypography>
          During the primary research I received some key insights:
        </BoldTypography>
        <ItalicTypography>
          The initial traditional lengthy process
        </ItalicTypography>
        <BulletRow>
          <BulletBox>
            <Bullet />
          </BulletBox>
          <BulletDesc>
          Parents go to the local booksellers to buy textbooks and other school necessities for their child’s next academic year
          </BulletDesc>
        </BulletRow>
        <BulletRow>
          <BulletBox>
            <Bullet />
          </BulletBox>
          <BulletDesc>
          Some schools used to provide only the class textbooks to the students for their next coming academic year. But the parents still had to go and buy other school-related items (school bags, notebooks, pens, etc.) outside
          </BulletDesc>
        </BulletRow>
        <ItalicTypography>
          The client had started selling pre-made school combos at their book store and parents really liked the initiative
        </ItalicTypography>
        <BulletRow>
          <BulletBox>
            <Bullet />
          </BulletBox>
          <BulletDesc>
          To benefit the parents, our client had already started to sell out pre-made school kits/combos for different classes like class 10, 9 (NCERT) and others in their stores. The combo not only contained the textbooks as per the subjects but also a set of required notebooks (single line, double line, ruled/unruled), school labels/stickers, brown sheets, and other things
          </BulletDesc>
        </BulletRow>
        <BulletRow>
          <BulletBox>
            <Bullet />
          </BulletBox>
          <BulletDesc>
          The outcome was a success and parents had less to worry on their plate as they just had to pay and leave.
          </BulletDesc>
        </BulletRow>
        <ItalicTypography>
          I also conducted a survey where a number of 60 participants and above participated to drive the research
        </ItalicTypography>
        <StyledImage path="LOCAL" src="ms/c.png" />
        <UserResearchFindings />
      </MainDiv>
    )
  }
}

export default ResearchTab;
