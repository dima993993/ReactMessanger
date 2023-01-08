import { useRef } from "react";
import { connect } from "react-redux";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

const ContentComponent = (props) => {
  let scrollContainer = useRef(null); // Выбор контейнера который нужно скролить
  // Скролл к последнему сообщению
  if (scrollContainer.current !== null) {
    setTimeout(function () {
      scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
    }, 100); // Задержка для скролла, нужна так как сначала происходит скролл к концу контейнера а потом добавление сообщения из за чего последнее сообщение не видно после рендера на странице.
  }

  return (
    <ContentWrapper>
      <HeaderContent openRightAside={props.setOpenRightAside} />
      <MessagesContainer scrollContainer={scrollContainer} />
      <EnterMessege />
    </ContentWrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export const Content = connect(mapStateToProps, {})(ContentComponent);
