import styled from "styled-components";

const BasicTitle = styled.h1`
	text-align: center;
	text-transform: capitalize;
	/* color: ${(props) => props.special && "red"}; */
	/* color: ${(props) => (props.special ? "red" : "blue")}; */
	color: ${({ special }) => (special ? "red" : "blue")};
`;

export default BasicTitle;
