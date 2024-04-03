import {
  Route, Routes, type RouteObject,
  // createHashRouter, useRoutes
} from 'react-router-dom';
import type { RRNstring } from '@/types';
import MainFrame from '@/pages';
import Login from '@/pages/Login';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import Order from '@/pages/Order';
import Product from '@/pages/Product';
import PersistentDrawerLeft from '@/pages/Test/MUIMenu';
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
  { path: pathString.order, id: '订单管理', element: <Suspense fallback={<CircularProgress />}><Order /></Suspense> },
  { path: pathString.product, id: '商品管理', element: <Suspense fallback={<CircularProgress />}><Product /></Suspense> },
  { path: pathString.stock, id: '库存管理' },
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
        path={pathString.login}
        element={<Login />}
      />
      <Route
        // path='/'
        element={<MainFrame />}
      >
        {
          menuItems.map((item, index) => (
            <Route key={index} path={item.path ?? ''} element={item.element}
            >
              {
                item.children?.map((child, index) =>
                  <Route key={index} path={child.path ?? ''} element={child.element}
                  // loader={e => {
                  //   console.log(e);
                  //   return e;
                  // }}
                  // action={e => {
                  //   console.log(e);
                  //   return e;
                  // }}
                  // shouldRevalidate={e => {
                  //   console.log(e);
                  //   return Boolean(e);
                  // }}
                  />
                )
              }
            </Route>
          ))
        }
        {/* {renderRoutes(menuItems)} */}
      </Route>
      <Route path='hjx' element={<PersistentDrawerLeft />} />
    </Routes>
  );
}