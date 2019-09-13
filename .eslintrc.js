module.exports = {
    // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
    "env": {
        "browser": true,
        "es6": true
    },
    // 一个配置文件可以被基础配置中的已启用的规则继承。
    "extends": ["airbnb", "prettier", "prettier/react"],
    // 自定义全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "_": true,
        "$": true,
    },
    // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
    // "parser": "@typescript-eslint/parser",
    // 配置解析器支持的语法
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
    // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
    "plugins": [
        "prettier"
    ],
    // ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    "rules": {
        "no-debugger": 0,
        "no-unused-vars": [
            1,
            {
                argsIgnorePattern: "res|next|^err"
            }
        ],
        "arrow-body-style": [2, "as-needed"],
        "no-unused-expressions": [
            2,
            {
                allowTaggedTemplates: true
            }
        ],
        "no-param-reassign": [
            2,
            {
                props: false
            }
        ],
        "no-console": 0,
        "import/prefer-default-export": 0,
        import: 0,
        "func-names": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "react/display-name": 1,
        "react/react-in-jsx-scope": 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
        "react/no-unescaped-entities": 0,
        "jsx-a11y/accessible-emoji": 0,
        'jsx-a11y/label-has-for': 0,
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"]
            }
        ],
        radix: 0,
        "semi": [2, "never"],
        "no-shadow": [
            2,
            {
                hoist: "all",
                allow: ["resolve", "reject", "done", "next", "err", "error"]
            }
        ],
        quotes: [
            2,
            "single",
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "es5",
                singleQuote: true,
                printWidth: 80,
                semi: false
            }
        ],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                aspects: ["invalidHref"]
            }
        ]
    }
};