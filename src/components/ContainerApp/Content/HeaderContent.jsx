import UserPhoto from "./../../Common/UserPhoto";
import styled from "styled-components";

const HeaderContentWrapper = styled.div`
  width: 100%;
  height: var(--height-header);
  background-color: var(--color-basic);
  display: flex;
  .user {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 20px;
    & > div:last-child {
      margin-left: 10px;
    }
  }
`;

const HeaderContent = ({ openRightAside }) => {
  return (
    <HeaderContentWrapper>
      <div className="user" onClick={() => openRightAside(true)}>
        <UserPhoto photo={undefined} firstName={"Name"} lastName={"lastName"} />
        <div>{"Name LastName"}</div>
      </div>
      <div className="menu"></div>
    </HeaderContentWrapper>
  );
};
export default HeaderContent;
