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
	width: 90vw;
	max-width: 300px;
	background-color: var(--white);
	border-radius: 0.25rem;
	img {
		max-width: 100%;
		height: auto;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		h4 {
			text-transform: capitalize;
			&::before {
				content: "Name : ";
				color: red;
			}
		}
		p {
			color: var(--pramary);
			font-weight: 700;
		}
		&:hover {
			background-color: red;
		}
	}
	transition: all 0.5s ease-in-out;
	&:hover {
		box-shadow: 0 3px 3px #222;
		cursor: pointer;
	}
	@media (min-width: 768px) {
		max-width: 600px;
	}
`;

export default CardItem;
