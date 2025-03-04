import React from "react";
import { styled, css } from "styled-components";
const fruits = ["orange", "apple", "banana", "peach"];
const Item = styled.li`
	list-style: none;
	${({ odd }) => {
		return odd
			? css`
					color: white;
					background: red;
					font-size: 1.5rem;
					padding: 1.5rem;
			  `
			: css`
					background: blue;
					padding: 1rem;
					color: rgba(255, 255, 255, 0.3);
			  `;
	}}
`;
const List = () => {
	return (
		<div>
			<h2>some random stuff</h2>
			<ul>
				{fruits.map((item, index) => {
					return (
						<Item key={index} odd={(index + 1) % 2 !== 0}>
							{item}
						</Item>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
