// npm install styled-components

import React from "react";
import styled from "styled-components";

// 스타일 정의
const Button = styled.button`
	background-color: blue;
	color: white;
	font-size: 16px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: darkblue;
	}
`;

// 컴포넌트 사용
function App() {
	return <Button>Click Me</Button>;
}

export default App;

// props를 사용하여 스타일을 동적으로 변경할 수 있습니다.
const Button01 = styled.button`
	background-color: ${(props) => (props.primary ? "blue" : "gray")};
	color: ${(props) => (props.primary ? "white" : "black")};
`;

function App01() {
	return (
		<div>
			<Button01 primary>Primary Button</Button01>
			<Button01>Default Button</Button01>
		</div>
	);
}


// 전역 스타일은 createGlobalStyle을 사용하여 설정할 수 있습니다.
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;

function global() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello, Styled-Components!</h1>
    </>
  );
}

export default global;


// 스타일 확장 기존 스타일을 확장하여 새로운 스타일을 만들 수 있습니다.
const Button02 = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
`;

const LargeButton = styled(Button)`
  font-size: 20px;
  padding: 15px 30px;
`;

function App() {
  return (
    <div>
      <Button02>Normal Button</Button02>
      <LargeButton>Large Button</LargeButton>
    </div>
  );
}

// 테마 사용 ThemeProvider를 사용하면 앱 전체에서 일관된 테마를 적용할 수 있습니다.


import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "blue",
    secondary: "gray",
  },
  fontSizes: {
    small: "12px",
    large: "18px",
  },
};

const Button03 = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button03>Theme Button</Button03>
    </ThemeProvider>
  );
}

export default App;

// 반응형 실무예제
const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <Container>
      <div>Item 1</div>
      <div>Item 2</div>
    </Container>
  );
}

// 애니메이션

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 2s ease-in;
`;

function App() {
  return <AnimatedDiv>Hello, Animation!</AnimatedDiv>;
}


