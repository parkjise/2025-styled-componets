import React from "react";
import styled, { css } from "styled-components";
import List from "./List";
import Products from "./Products";

const Button = styled.button.attrs((props) => {
	return {
		type: props.type || "button",
	};
})`
	background: var(--primary);
	border: none;
	color: #fff;
	padding: 0.25rem;
	cursor: pointer;
	${({ type }) => {
		return (
			type === "submit" &&
			css`
				display: block;
				width: 100%;
				margin-top: 1rem;
				border-radius: 0.25rem;
			`
		);
	}}
`;

const BasicInput = styled.input.attrs((props) => {
	return {
		type: props.type || "text,",
		placeholder: props.placeholder || "Please enter value",
	};
})`
	box-sizing: border-box;
	padding: 0.5rem;
	border: 2px solid #f2f4f8;
	border-radius: 0.25rem;
	width: 100%;
	margin-top: 1rem;
`;
const Form = () => {
	return (
		<div>
			<h2>some random stuff</h2>
			<Button>Click me</Button>
			<form
				css={`
					width: 300px;
					background: #fff;
					padding: 2rem;
					margin-top: 1rem;
				`}
			>
				<h2>Form</h2>
				<BasicInput />
				<BasicInput />
				<BasicInput type="email" placeholder="enter email" />
				<BasicInput type="submit" />
				<Button type="submit">submit here</Button>
				<List />
				<Products />
			</form>
		</div>
	);
};

export default Form;
