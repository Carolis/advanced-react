yarn create next-app
    name client
    default template
        yarn dev
        yarn build
        yarn start

remove unused files from the default template

touch tsconfig.json
    yarn dev
        yarn add --dev typescript @types/react @types/node

add .editorconfig

add ESlint  
    npx eslint --init
        syntax and problems only (we use prettier for code styling)
        import/export
        react
        TS
        browser
        json
        npm? nope - well use yarn (add manually)
        yarn add --dev {needed plugins}