import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ComplexTitle from "./components/ComplexTitle";
import AlternativeTitle from "./components/AlternativeTitle";
import Random from "./components/Random";
const StyledBtn = styled(Button)`
	text-transform: capitalize;
`;

function App() {
	return (
		<>
			<div style={{ padding: "2rem" }}>
				<BasicTitle special>Styled components</BasicTitle>
				<BasicTitle>Styled components</BasicTitle>
				<DefaultButton>Click me</DefaultButton>
				<HipsterButton>Click me</HipsterButton>
				{/* <button className="btn">Click me</button> */}
				<Button color="primary" variant="contained">
					Hello World
				</Button>
				<StyledBtn color="secondary" variant="outlined">
					Hello World
				</StyledBtn>
			</div>
			<div style={{ padding: "2rem" }}>
				<ComplexTitle title="more complex title"></ComplexTitle>
				<Random></Random>
			</div>
			<div style={{ padding: "2rem" }}>
				<AlternativeTitle title="alternative title"></AlternativeTitle>
			</div>
		</>
	);
}

export default App;
