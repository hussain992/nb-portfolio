import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Image from '../shared/Image'

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
`;
const MainDiv = styled.div`
	background-color: #F4FAFB;
`;
const Logo = styled.div`
  height: 80px;
  width: 80px;
`;
const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
`;

const Menu = styled.div`
  width: 40%;
  text-align: right;
`;

const Item = styled.a`
  font-weight: 600;
  padding-left: 15px;
  text-decoration: none;
  color: black;
`;
export default class Header extends Component {
  render() {
    return (
      <MainDiv>
        <StyledContainer>
          <Logo>
            <StyledImage path="LOCAL" 
              src="logo.png"
              alt="nb-logo" />
          </Logo>
          <Menu>
            <Item>Work</Item>
            <Item>About</Item>
            <Item>Resume</Item>
          </Menu>
        </StyledContainer>
      </MainDiv>
    )
  }
}
