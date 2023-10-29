export default {
    printWidth: 140,
    semi: true,
    vueIndentScriptAndStyle: true,
    singleQuote: true,
    trailingComma: 'all',
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'auto',
    overrides: [
        {
            files: '.*rc',
            options: {
                parser: 'json',
            },
        },
    ],
}