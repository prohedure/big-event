module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 允许单引号和反引号
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 去掉函数名和括号之间的空格检查
    'space-before-function-paren': 0,
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
    // 下划线
    camelcase: 'off'
  }
}
