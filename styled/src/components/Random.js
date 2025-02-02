import React from "react";
import { styled } from "styled-components";
const Random = () => {
	return (
		<Wrapper>
			<div className="underline"></div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.underline {
		width: 5rem;
		height: 0.5rem;
		background-color: red;
		margin: 2rem auto;
	}
`;
export default Random;
