module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
        "semi": 0,  // 语句可以不需要分号结尾
        "eqeqeq": 2, // 必须使用全等
    }
}
