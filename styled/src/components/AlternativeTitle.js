import React from "react";
import { styled } from "styled-components";
import { colors, setupBorder } from "./Utils";
const ComplexTitle = ({ title, className }) => {
	return (
		<div className={className}>
			<h1>{title}</h1>
			<div className="underline"></div>
			<div className="box"></div>
		</div>
	);
};

const Wrapper = styled(ComplexTitle)`
	h1 {
		text-transform: capitalize;
		text-align: center;
	}
	.underline {
		width: 5rem;
		height: 0.25rem;
		/* background-color: var(--primary); */
		background-color: ${colors.secondary};
		margin: 0 auto;
	}
	.box {
		height: 30px;
		border: ${setupBorder({ width: 5, type: "dashed", color: "green" })};
	}
`;
export default Wrapper;
