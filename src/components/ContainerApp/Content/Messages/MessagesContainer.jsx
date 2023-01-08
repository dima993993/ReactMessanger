import Message from "./Message";
import styled from "styled-components";

const MessagesContainerWrapper = styled.div`
  width: 100%;
  height: var(--content-height);
  margin: 0 auto;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
  & > div {
    width: 70%;
    margin: 0 auto;
  }
`;

const MessagesContainer = ({ scrollContainer }) => {
  return (
    <MessagesContainerWrapper ref={scrollContainer}>
      <div>
        <div>Message</div>
      </div>
    </MessagesContainerWrapper>
  );
};
export default MessagesContainer;
