module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // 使用 Prettier 插件
    // 'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    indent: ['error', 2], // 强制使用两个空格缩进
    'linebreak-style': ['error', 'unix'], // 强制使用 UNIX 换行符
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'always'], // 强制使用分号
    camelcase: 'error',
    eqeqeq: 'error',
    'no-unused-vars': 'error', // 禁止定义未使用的变量
    'no-use-before-define': 'error', // 禁止在变量声明之前使用它们
    'react/prop-types': 'off', // 禁用对 PropTypes 的检查
    '@typescript-eslint/no-unused-vars': 'error', // 强制在 TypeScript 中检查未使用的变量
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-check': false,
        minimumDescriptionLength: 0,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: 'Use object instead.',
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    'react/prop-types': 'error', // Props are not required for a propTypes definition. 将不应在class components中定义props的PropTypes声明。或者
    'no-useless-escape': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-unreachable': 'error',
    'no-empty-pattern': 'error',
    'no-duplicate-case': 'error',
    'no-fallthrough': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    'no-unused-vars': 'off', // 禁用 ESLint 默认的未使用变量规则，使用 TypeScript 来处理
    'no-use-before-define': 'off', // 禁用 ESLint 默认的使用前定义规则，使用 TypeScript 来处理
    'react/prop-types': 'off', // 禁用对 PropTypes 的检查，推荐使用 TypeScript 的类型检查代替
    '@typescript-eslint/no-unused-vars': 'error', // 强制在 TypeScript 中检查未使用的变量
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }], // 强制在 TypeScript 中检查使用前定义
    '@typescript-eslint/explicit-module-boundary-types': 'error', // 强制在导出函数和类的公共 API 中显式声明类型
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }], // 禁止空函数，但允许箭头函数为空
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description', // 禁止使用 @ts-ignore，但允许添加描述
        'ts-expect-error': 'allow-with-description', // 禁止使用 @ts-expect-error，但允许添加描述
        'ts-check': false, // 禁止使用 @ts-check 注释
        minimumDescriptionLength: 0, // 设置最小描述长度为 0
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: 'Use object instead.', // 使用 object 来代替空对象类型 {}
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/no-var-requires': 'error', // 禁止使用 require() 导入模块，推荐使用 import 来替代
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-check': false,
        minimumDescriptionLength: 0,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: 'Use object instead.',
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/no-var-requires': 'error',
  },
};
