// import styled from "styled-components/macro";
import styled from "styled-components";
import Loading from "./components/Loading";
import GlobalStyles from "./global-styles";
import { HipsterButton } from "./components/Buttons";
function App() {
	return (
		<>
			<GlobalStyles />
			<div style={{ padding: "2rem" }}>
				{/* <h2>Animation example</h2> */}
				{/* <Loading /> */}
				<HipsterButton>Click Me</HipsterButton>
				<HipsterButton as="a" href="https://www.naver.com">
					Click Me
				</HipsterButton>
				<HipsterButton>Click Me</HipsterButton>
			</div>
			<div
				css={`
					color: green;
				`}
			>
				<h2>Hello World</h2>
			</div>
		</>
	);
}

export default App;
