import { connect } from "react-redux";
import DialogsContainer from "./Dialogs/DialogsContainer";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";

const LeftAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  transition: var(--tr-slow);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
  .left_aside_container {
    margin: var(--mr-md) var(--mr-xs);
  }
`;

const LeftAsideComponent = (props) => {
  return (
    <LeftAsideWrapper>
      <HeaderLeftAside openMenu={props.openMenu} />
      <div className="left_aside_container">
        <DialogsContainer />
      </div>
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export const LeftAside = connect(mapStateToProps, {})(LeftAsideComponent);
