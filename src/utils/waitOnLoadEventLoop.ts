const {
  addEventListener,
  queueMicrotask,
  setTimeout,
  Promise,
  requestIdleCallback,
  requestAnimationFrame,
  console,
  MessageChannel
} = window ?? self ?? globalThis ?? global ?? this;
export const waitOnLoadEventLoop = (callback: () => void = () => { }) => {
  const cb = (resolve: () => void = () => { }) =>
    requestIdleCallback?.(() =>
      setTimeout?.(() =>
        requestAnimationFrame?.(() =>
          queueMicrotask?.(() =>
            Promise?.resolve?.()?.then?.(() => {
              const { port1, port2 } = new MessageChannel();
              port2.onmessage = () => resolve?.();
              port1?.postMessage?.(null);
            }
            ).catch?.(console?.error)
          )
        )
      )
    );
  return addEventListener('load', () => new Promise<void>(resolve =>
    cb?.(resolve)
  )?.then?.(() =>
    cb?.(callback)
  ).catch?.(console?.error));
};