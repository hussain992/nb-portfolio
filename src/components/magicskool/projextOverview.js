import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import Image from '../../shared/Image';

const MainDiv = styled.div`
  background-color: #F4FAFB;
`;

const Title = styled.div`
  font-family: 'BwNistaGeo-Bk';
  font-size: 22px;
  line-height: 30px;
  padding-bottom: 30px;
  padding-top: 15px;
`;

const Row = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

const Subtitle = styled.div`
  font-family: 'BwNistaGeo-Bd';
  font-size: 18px;
  line-height: 30px;
  color: #1F2234;
  width: 15%;
  font-weight: 600;
`;

const DescTitle = styled.div`
  font-family: 'BwNistaGeo-Bd';
  font-size: 18px;
  line-height: 30px;
  color: #1F2234;
  font-weight: 600;
  padding-bottom: 15px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #2F2F2F;
  width: 85%;
`;

const RoleBox = styled.div`
  width: 85%; 
`;

const BulletRow = styled.div`
  display: flex;
  padding-bottom: 15px;
  width: 100%;
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

const ImageRow = styled.div`
  display: flex;
  width: 85%;
`;

const ImageBox = styled.div`
  padding-right: 30px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
 
export default class projextOverview extends Component {
  render() {
    return (
      <MainDiv>
      <Container>
        <Title>
          Project Overview
        </Title>
        <Row>
          <Subtitle>
            Quick Brief
          </Subtitle>
          <Description>
          MagicSkool wanted to create a user experience for Parents and students, where either as a parent or student, they should be able to onboard on the website, find their already pre-made school-kit/combo according to their upgraded academic year, should be able to pay online or pay on delivery and finally receive their kit/combo at home or pick up from the school.
          </Description>
        </Row>
        <Row>
          <Subtitle>
            The Problem
          </Subtitle>
          <Description>
            <DescTitle>
              Missing of online experience
            </DescTitle>
            The missing of online experience where the parents can directly order their child's complete kit/set of school textbooks with the secondary language selected as per the class the academic year (according to the NCERT or CBSE syllabus in which the child studies).
          </Description>
        </Row>
        <Row>
          <Subtitle>
          The Challenge
          </Subtitle>
          <Description>
          How might we create a meaningful experience for the parents which minimizes their problem of rushing every year to buy textbooks and help them to find solutions for their child's every school-related nessecities?
          </Description>
        </Row>
        <Row>
          <Subtitle>
          My Role
          </Subtitle>
          <RoleBox>
            <Description>
              Owned the UX and UI part of the design
            </Description>
            <BulletRow>
              <BulletBox>
                <Bullet />
              </BulletBox>
              <BulletDesc>
              The efforts of discovering the user’s pain points and design better user experience.
              </BulletDesc>
            </BulletRow>
            <BulletRow>
              <BulletBox>
                <Bullet />
              </BulletBox>
              <BulletDesc>
              Brainstormed on design ideas that met both customer needs and business goals. Prioritizing and locking down the features needed for the first release.
              </BulletDesc>
            </BulletRow>
            <BulletRow>
              <BulletBox>
                <Bullet />
              </BulletBox>
              <BulletDesc>
              The design stages executed for this project: Research, User flows, Designing wireframes, Information architecture, Visual design, Prototypes, and initial Usability testing. Coordinated with developers to ensure proper implementation of the design.
              </BulletDesc>
            </BulletRow>
          </RoleBox>
        </Row>
        <Row>
          <Subtitle>Tools Used</Subtitle>
          <ImageRow>
            <ImageBox>
              <Image path="LOCAL" src="ms/notes.png" />
            </ImageBox>
            <ImageBox>
              <Image path="LOCAL" src="ms/Typeform_Logo.png" />
            </ImageBox>
            <ImageBox>
              <Image path="LOCAL" src="ms/invision-logo.png" />
            </ImageBox>
            <ImageBox>
              <Image path="LOCAL" src="ms/figma-1.png" />
            </ImageBox>
          </ImageRow>
        </Row>
      </Container>
      </MainDiv>
    )
  }
}
