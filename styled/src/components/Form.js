import React from "react";
import styled from "styled-components";

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
				<input type="text" />
				<Button type="submit">submit here</Button>
			</form>
		</div>
	);
};

export default Form;
