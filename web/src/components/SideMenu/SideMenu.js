import { HideSideMenu } from "../HideSideMenu/HideSideMenu";
import "./SideMenu.css";

export const SideMenu = ({ handleToggleSideMenu, sideMenuActive }) => {
  return (
    <>
      <aside className="sidemenu">
        <div className="sidemenu-button">
          <span>+</span>
          Novo Chat
        </div>
      </aside>

      <HideSideMenu
        handleToggleSideMenu={handleToggleSideMenu}
        sideMenuActive={!sideMenuActive}
      />
    </>
  );
};
