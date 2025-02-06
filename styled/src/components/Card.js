import React from "react";
import { styled } from "styled-components";
import CardItem from "./card/CardItem";

const card = () => {
	return (
		<CardWrapper>
			<div style={{ padding: "2rem" }}>
				<CardItem></CardItem>
			</div>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	height: 100vh;
	background-color: #f2f4f8;
`;

export default card;
