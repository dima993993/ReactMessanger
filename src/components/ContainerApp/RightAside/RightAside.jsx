import { connect } from "react-redux";
import HeaderRightAside from "./HeaderRightAside";
import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";

const RightAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  margin-right: ${(props) =>
    props.openRightAside ? "0" : "var(--width-aside-invers)"};
  transition: var(--tr-slow);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
`;

export const RightAsideComponent = ({ openRightAside, setOpenRightAside }) => {
  return (
    <RightAsideWrapper openRightAside={openRightAside}>
      <HeaderRightAside closeRightAside={setOpenRightAside} />
      {/* <UserInfo  /> */}
    </RightAsideWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
  };
};

export const RightAside = connect(mapStateToProps, {})(RightAsideComponent);
