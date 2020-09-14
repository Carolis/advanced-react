Creating a new client based on the previous created boilerplate

    yarn create next-app -e https://github.com/React-Avancado/boilerplate and names it as "client"

    renames the project at package.json

    bugfix  - fix the jest test path to a better coverage

    bugfix  - "build-storybook": "build-storybook -s ./public"

        yarn build-storybook

        cd storybook-static

        http-server

PostgreSQL Installation

    Using WSL on Windows

        Enables windows linux subsystem and virtual machine platform

        Install ubuntu at windows

        Istall wsl 2 with powershell

        wsl -l -v

        finally install postgres with wsl ubuntu

            sudo apt install postgresql postgresql-contrib

            psql --version

            useful commands:

                sudo service postgresql status

                sudo service postgresql start

                sudo service postgresql stop    

                sudo passwd postgres

                sudo -u postgres psql

        initializing postgres

                sudo service postgresql start
        
        creating a user 

                sudo -u postgres createuser strapi

        creating a db 

                sudo -u postgres createdb strapi

        entering postgres own interface

                sudo -u postgres psql

                listing users 

                    \du

                listing dbs

                    \l
                
                setting a password for a user

                    alter user <username> with encrypted password 'password';    then it must return ALTER ROLE
                
                setting up privileges for user

                    grant all privileges on database <database> to <username>;        then it must return GRANT

                \q  to quit interface