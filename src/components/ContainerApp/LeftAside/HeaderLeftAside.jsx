import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./../../Common/Search";
import styled from "styled-components";

const WrapperLeftAsideHeader = styled.div`
  height: var(--height-header);
  display: flex;
  align-items: center;
  padding: 0 var(--pd-sm);
  & > div:first-child {
    width: 15%;
    cursor: pointer;
    color: var(--color-icon);
  }
  div:last-child {
    width: 90%;
  }
`;

const HeaderLeftAside = ({ openMenu }) => {
  return (
    <WrapperLeftAsideHeader>
      <div onClick={() => openMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <Search />
      </div>
    </WrapperLeftAsideHeader>
  );
};
export default HeaderLeftAside;
