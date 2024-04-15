import cb from "./cb";

const {
  Promise,
  console
} = window ?? self ?? globalThis ?? global ?? this;
export const waitLastEventLoop = (callback: () => void = () => { }) => new Promise<void>(resolve =>
  cb?.(resolve)
)?.then?.(() =>
  cb?.(callback)
).catch?.(console?.error);