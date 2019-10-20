/* eslint-disable import/first */
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Image from '../../shared/Image';

import ResearchTab from './ResearchTab';


const TabBlock = styled.div`
  padding: 20px 0px; 
`;
const Title = styled.div`

`;



class discovery extends Component {

  state = { activeIndex: 0 }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state;
    return (
      <Container>
        <Title> Discovery </Title>
        <TabBlock>
          <div
            style={{
              display: 'flex',
            }}
          >
            <VerticalTabs
              value={activeIndex}
              onChange={this.handleChange}
            >
              <MyTab label='Research' />
              <MyTab label='item two' />
            </VerticalTabs>

            {activeIndex === 0 && <TabContainer><ResearchTab/></TabContainer>}
            {activeIndex === 1 && <TabContainer>Item Two</TabContainer>}
          </div>
        </TabBlock>
      </Container>
    )
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    color: '#2B3EED',
    borderBottom: '2px solid #2B3EED',
  }
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24, width: '80%' }}>
      {props.children}
    </Typography>
  );
}

export default discovery;
