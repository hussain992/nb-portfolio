import React, { Component } from 'react'
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Image from '../../shared/Image';


const PageTitle = styled.div`
  font-family: 'BwNistaGeo-Bd';
	font-size: 48px;
	line-height: 63px;
`;

const Banner = styled.div`
	display: flex;
	align-items: center;
`;
const BannerText = styled.div`
	/* background-color: #ddd; */
	flex: 1;
	font-size: 36px;
	@media only screen and (max-width: 767px) {
		font-size: 18px;
	}
`;

const BannerImage = styled.div`
	flex: 1;
`;

const MainDiv = styled.div`
	background-color: #F4FAFB;
`;

export default class magicBanner extends Component {
  render() {
    return (
      <MainDiv>
			<Container>
				<PageTitle>
					MagicSkool
				</PageTitle>
				<Banner>
					<BannerText>
					Redesigning a web platform for an easy use for parents to order school kits
					</BannerText>
					<BannerImage>
						{/* <img src="../assets/img/Banner 1 (Back to School).png" alt="banner-image" /> */}
						<Image path="LOCAL" src="magic-banner.png"
						alt="magicskool" />
					</BannerImage>
				</Banner>
			</Container>
			</MainDiv>
    )
  }
}
