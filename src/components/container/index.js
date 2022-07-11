import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 100px 300px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
