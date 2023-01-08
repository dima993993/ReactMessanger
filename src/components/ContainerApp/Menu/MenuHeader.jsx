import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserPhoto from "../../Common/UserPhoto";
import styled from "styled-components";
const WrapperMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > div {
    margin: var(--mr-md);
    .user {
      .block_photo {
        width: 100%;
      }
    }
    .name_user {
      margin-top: var(--mr-sm);
    }
  }
  .theme_icon {
    cursor: pointer;
    font-size: var(--fs-lg);
    color: var(--color-icon);
  }
`;
const MenuHeader = ({ theme, switchTheme }) => {
  return (
    <WrapperMenuHeader>
      <div className="user">
        <div className="block_photo">
          <UserPhoto
            photo={undefined}
            firstName={"Name"}
            lastName={"lastName"}
          />
        </div>
        <div className="name_user">{"Name LastName"}</div>
      </div>
      <div
        className="theme_icon"
        onClick={() =>
          theme === "light" ? switchTheme("dark") : switchTheme("light")
        }
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </div>
    </WrapperMenuHeader>
  );
};
export default MenuHeader;
