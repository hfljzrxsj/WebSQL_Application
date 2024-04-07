// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DBName: string;
  readonly VITE_sqlFolder: string;
  readonly VITE_configFile: string;
  readonly VITE_TRIGGER: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
