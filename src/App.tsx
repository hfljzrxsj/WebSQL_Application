import { createContext, StrictMode } from 'react';
import MyRoute from './Route';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SnackbarAlert from './components/SnackbarAlert';
import { CssBaseline, ScopedCssBaseline, StyledEngineProvider, useMediaQuery } from '@mui/material';
import { waitLastEventLoop } from './utils';
import { useMount } from 'ahooks';
// import './mock';

export const commonUseRequestParams = {
  loadingDelay: 300,
  throttleWait: 300,
};

export const MediaQueryContext = createContext(false);

export default () => {
  // const theme = useTheme();
  // console.log(theme.breakpoints.up('lg'), theme.mixins.toolbar);
  const matches = useMediaQuery('(orientation:landscape)');
  // const matches = innerWidth >= innerHeight;
  useMount(() => {
    console.time('s');
    waitLastEventLoop(() => console.timeEnd('s'));
    setTimeout(() => {
      console.time('ss');
      waitLastEventLoop(() => console.timeEnd('ss'));
    }, 1e3);
  });
  return <StrictMode><StyledEngineProvider injectFirst><ScopedCssBaseline><CssBaseline /><Provider store={store}>
    <MediaQueryContext.Provider value={matches}>
      <HashRouter>
        <MyRoute />
      </HashRouter>
      <SnackbarAlert />
    </MediaQueryContext.Provider>
  </Provider>
  </ScopedCssBaseline>
  </StyledEngineProvider>
  </StrictMode>;
};