import React from "react";
import styled from "styled-components";

const NewBtn = ({ title, color }) => {
	return <BtnNew className={color}>{title}</BtnNew>;
};

const BtnNew = styled.button`
	background-color: yellow;
	&.primary {
		background-color: #000;
		color: #fff;
	}
	&.secondary {
		background-color: red;
		color: #fff;
	}
`;

export const DefaultButton = styled.button`
	background: var(--primary);
	color: #fff;
	border: none;
	border-radius: 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
	padding: 0.25rem;
	display: block;
	width: 200px;
	margin: 1rem auto;
`;

export const HipsterButton = styled(DefaultButton)`
	width: 400px;
	background: transparent;
	color: var(--primary);
	border: 1px solid var(--primary);
`;

export default NewBtn;
