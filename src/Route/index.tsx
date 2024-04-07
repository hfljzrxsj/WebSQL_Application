import {
  Route, Routes, type RouteObject,
  // createHashRouter, useRoutes
} from 'react-router-dom';
import type { RRNstring } from '@/types';
import MainFrame from '@/pages';
// import Login from '@/pages/Login';
import { lazy, Suspense } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import WebSQL from '@/pages/WebSQL';
// import { renderRoutes } from 'react-router-config';

export enum pathString {
  login = 'login',
  overview = 'overview',
  order = 'order',
  product = 'product',
  stock = 'stock'
}
const Overview = lazy(() => import('@/pages/Overview'));
export const menuItems: Array<RouteObject> = ([
  { path: '', id: '目录', element: <Suspense fallback={<CircularProgress />}><Overview /></Suspense> },
]);
export const concatUrl = (...args: ReadonlyArray<RRNstring>) => (`/${args.join('/')}`);
// const UseRoutes = () => useRoutes(menuItems);
export default function MyRoute () {
  // const isLogin = true;
  // if (!isLogin) {
  //   return <Navigate to={concatUrl(pathString.login)} />;
  // }
  // return <UseRoutes />;
  return (
    <Routes>
      <Route
        element={<MainFrame />}
      >
        <Route
          index
          element={<Suspense fallback={<Backdrop open={true}><CircularProgress /></Backdrop>}><Overview /></Suspense>}
        />
        <Route
          path=':subtitle/:id'
          element={<WebSQL />}
        >
        </Route>
      </Route>
    </Routes>
  );
}