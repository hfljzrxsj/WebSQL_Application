import { Authorization } from "@/actions/axios_instance";
import ButtonAppBar from "@/components/AppBar";
import Menu from "@/components/Menu";
import { pathString } from "@/Route";
import { Collapse, Paper } from "@mui/material";
import { useBoolean, useMount } from "ahooks";
import { StrictMode, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import style from './_index.module.scss';
import { MediaQueryContext } from "@/App";
export default function MainFrame () {
  const navigate = useNavigate();
  const [menuOpen, { toggle: setMenuOpen }] = useBoolean(true);
  // useMount(() => {
  //   // testLogin().then(e => {
  //   //   if (!e) {
  //   //     navigate(pathString.login);
  //   //   }
  //   // });
  //   if (!localStorage.getItem(Authorization)) navigate(pathString.login);
  // });
  const matches = useContext(MediaQueryContext);
  return (
    <StrictMode>
      <ButtonAppBar setMenuToggle={setMenuOpen} />
      <div className={style["MainFrame"]}>
        <Collapse in={menuOpen && matches} orientation='horizontal'>
          <Paper elevation={24}>
            <Menu />
          </Paper>
        </Collapse>
        <div><Outlet /></div>
      </div>
    </StrictMode>
  );
}