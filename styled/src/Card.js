import styled from "styled-components";
import Loading from "./components/Loading";
import GlobalStyles from "./global-styles";

function App() {
	return (
		<>
			<GlobalStyles />
			<div style={{ padding: "2rem" }}>
				{/* <h2>Animation example</h2> */}
				<Loading />
			</div>
		</>
	);
}

export default App;
