import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { LeftAside } from "./LeftAside/LeftAside";
import { Content } from "./Content/Content";
import { RightAside } from "./RightAside/RightAside";
import styled from "styled-components";

const WrapperContainerApp = styled.div`
  height: 100vh;
  display: flex;
  overflow-x: hidden;
`;
const ContainerApp = () => {
  // Открыть панель с информацией о пользователе
  let [openRightAside, setOpenRightAside] = useState(false);
  // Открыть навигационную панель
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <WrapperContainerApp>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <LeftAside openMenu={setOpenMenu} />
      <Content setOpenRightAside={setOpenRightAside} />
      <RightAside
        openRightAside={openRightAside}
        setOpenRightAside={setOpenRightAside}
      />
    </WrapperContainerApp>
  );
};
export default ContainerApp;
