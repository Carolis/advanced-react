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
    add react-hooks plugin
    yarn add eslint-plugin-react-hooks --dev
    add to rules at eslint file
    add extra rules (specified at eslint file)
    finally add the eslint plugin
    eslint commands for the cli -> 
        eslint folder
        eslint foldername --fix
