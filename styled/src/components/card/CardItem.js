import React from "react";
import { styled } from "styled-components";

const CardItem = () => {
	return (
		<StyledCard>
			<img
				src="http://www.rsenm.kr/uploads/banner/66cd1bfae6f15.jpg"
				alt="product"
			/>
			<footer>
				<h4>product name</h4>
				<p>$15</p>
			</footer>
		</StyledCard>
	);
};

const StyledCard = styled.article`
	img {
		max-width: 100%;
		height: auto;
	}
`;

export default CardItem;
