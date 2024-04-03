import Menu from "@/components/Menu";
import { Paper } from "@mui/material";
import { StrictMode } from "react";
import style from './_index.module.scss';
const commonProps = { elevation: 24, className: style['Paper'] ?? '' };
export const documentTitle = '进销存管理系统';
const {
  addEventListener,
  queueMicrotask,
  setTimeout,
  Promise,
  requestIdleCallback,
  requestAnimationFrame,
  document,
  navigator,
  Object,
  console,
  MessageChannel
} = window ?? self ?? globalThis ?? this;
// addEventListener?.('DOMContentLoaded', () => {
// addEventListener?.('load', () =>
//   queueMicrotask?.(() =>
//     setTimeout?.(() =>
//       Promise?.resolve?.()?.then?.(() =>
//         requestAnimationFrame?.(() =>
//           requestIdleCallback?.(() =>
//             document.title = documentTitle
//           )
//         )
//       )
//     )
//   )
// );
const callbackEventLoop = (callback: () => void) => {
  const cb = (resolve: () => void) =>
    requestIdleCallback?.(() =>
      setTimeout?.(() =>
        requestAnimationFrame?.(() =>
          queueMicrotask(() =>
            Promise?.resolve?.()?.then?.(() => {
              const { port1, port2 } = new MessageChannel();
              port2.onmessage = () => resolve();
              port1.postMessage(null);
            }
            ).catch(console.error)
          )
        )
      )
    );
  addEventListener?.('load', () =>
    new Promise<void>(resolve =>
      cb?.(resolve)
    )?.then?.(() =>
      cb?.(callback)
    ).catch(console.error)
  );
};
callbackEventLoop(() => document.title = documentTitle);
//requestIdleCallback setTimeout requestAnimationFrame Promise queueMicrotask
// });
(() => {
  addEventListener?.('beforeunload', (_e) => {
    addEventListener?.('unload', () =>
      sessionStorage.clear()
    );
    navigator.sendBeacon('');
    // e.returnValue = true;
  }
  );
  document.onvisibilitychange ??= () =>
    console.log(document.hidden, document.visibilityState);
  const vavidValue = (v: unknown) => v !== undefined && v !== null && v !== '';
  const { getOwnPropertyDescriptor: Object_getOwnPropertyDescriptor, hasOwn, keys, prototype } = Object;
  const { get, getOwnPropertyDescriptor: Reflect_getOwnPropertyDescriptor, has, deleteProperty } = Reflect;
  // const props: Record<string, unknown> = new Object(Object(create({})));
  const props: Record<string, unknown> = {};
  const { hasOwnProperty, propertyIsEnumerable } = prototype;
  for (const i in props) {
    if (
      has(props, i) &&
      hasOwn(props, i) &&
      hasOwnProperty.call(props, i) &&
      i in props &&
      keys(props).includes(i) &&
      propertyIsEnumerable.call(props, i) &&
      props.hasOwnProperty(i) &&
      props.propertyIsEnumerable(i) &&
      vavidValue(get(props, i)) &&
      vavidValue(Object_getOwnPropertyDescriptor(props, i)?.value) &&
      vavidValue(props?.[i]) &&
      vavidValue(Reflect_getOwnPropertyDescriptor(props, i)?.value)
    ) {
      delete props?.[i];
      deleteProperty(props, i);
    }
  }
});
export default function Overview () {
  return (
    <StrictMode>
      <Paper {...commonProps}>{documentTitle}</Paper>
      <Paper {...commonProps}><Menu /></Paper>
    </StrictMode>
  );
}