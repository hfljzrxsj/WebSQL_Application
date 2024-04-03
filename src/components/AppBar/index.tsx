import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, Popover, type AppBarProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './_index.module.scss';
import { enumAppBarTitle, useAppBarTitleTypedSelector } from '@/store/AppBarTitleRuducer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { adminIdString } from '@/actions/axios_instance';
import { StrictMode, useContext, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useNavigate } from 'react-router';
import { concatUrl, pathString } from '@/Route';
import * as classNames from 'classnames';
import LogoutIcon from '@mui/icons-material/Logout';
import { documentTitle } from '@/pages/Overview';
import Menu from '../Menu';
import { MediaQueryContext } from '@/App';
interface ButtonAppBarProps extends AppBarProps {
  setMenuToggle: () => void;
}
export const StyledButton = ({ ...props }) => <Button
  variant="contained"
  size="large"
  {...props} />;
const clearCache = () => window.caches?.keys()?.then(e => e.forEach(cacheName => window.caches?.delete(cacheName))).catch(console.error);
export const CommonDialog = (props: {
  readonly open: boolean;
  readonly handleClose: () => void;
  readonly onClick: () => void;
  readonly title: string;
  readonly content?: string;
}) => {
  const { open = false, handleClose, onClick, title, content } = props;
  return <Dialog
    open={open}
    keepMounted
    onClose={handleClose}
  >
    <DialogTitle>{title}</DialogTitle>
    {content && <DialogContent>{content}</DialogContent>}
    <DialogActions className={style['DialogActions'] ?? ''}>
      <Button
        variant='outlined'
        onClick={handleClose}
        size='large'
      >取消</Button>
      <StyledButton onClick={onClick}>确定</StyledButton>
    </DialogActions>
  </Dialog>;
};
export default function ButtonAppBar (props: ButtonAppBarProps) {
  const title = useAppBarTitleTypedSelector(state => state.AppBarTitle[enumAppBarTitle.title]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const PopoverOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const { setMenuToggle, ...others } = props;
  const matches = useContext(MediaQueryContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StrictMode>
      <AppBar
        position="sticky"
        className={style['AppBar'] ?? ''}
        {...others}>
        <IconButton onClick={matches ? setMenuToggle : setMenuOpen.bind(null, true)} className={style['menuIcon'] ?? ''} size='large'>
          <MenuIcon />
        </IconButton>
        <span>{title ?? documentTitle}</span>
        <Button className={classNames(style['Avatar'], { [style['open'] ?? '']: PopoverOpen })}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <AccountCircleIcon />
          <span>{localStorage.getItem(adminIdString)}</span>
          <KeyboardArrowDownIcon />
        </Button>
      </AppBar>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={PopoverOpen}
        onClose={() => {
          setAnchorEl(null);
        }}
        className={style['Popover'] ?? ''}
      >
        {/* <p>用户等级：<span>{getLevel()}</span></p>
        <p>用户权限：<span>{localStorage.getItem(regionName) ?? getLocalStorageFromJSON(orgId)}</span></p> */}
        <StyledButton
          onClick={() =>
            unstable_batchedUpdates(() => {
              setAnchorEl(null);
              setOpen(true);
            })
          }
          startIcon={< LogoutIcon />}
        >
          退出登录
        </StyledButton>
      </Popover>
      <CommonDialog
        open={open}
        handleClose={handleClose}
        title='确定要退出登录吗？'
        onClick={() => {
          clearCache();
          localStorage.clear();
          navigate(concatUrl(pathString.login));
        }}
      />
      <Drawer
        anchor='left'
        open={!matches && menuOpen}
        onClose={setMenuOpen.bind(null, false)}>
        <Menu />
      </Drawer>
    </StrictMode>
  );
}
