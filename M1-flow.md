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

        add script at package json for the linter (yarn lint)

adding prettier with eslint

     yarn add --dev eslint-config-prettier eslint-plugin-prettier
        
        add prettier config file

        add prettier to eslint configs

        makes prettier run inside linter at vscode config

adding husky 

     yarn add --dev lint-staged husky
     
     add configs on package.json for husky and stage lint

adding jest

    yarn add --dev jest @babel/preset-typescript @types/jest

    add config files and script for testing

adding react testing lib

    yarn add --dev @testing-library/react @testing-library/jest-dom

    add the lib and the jest matchers and imports jest-dom on the jest setup file

    add basic placeholder tests just to run 

    add snapshot and watch script for the tests on the linter

styles

    styled-components

            add styles components types yarn add --dev @types/styled-components babel-plugin-styled-components

            add babel setup

            add styled-components per se with yarn add styled-components