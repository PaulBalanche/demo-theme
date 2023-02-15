    composer create-project roots/bedrock wordpress
    cd wordpress
    rm .env.example

**Update .env file :**

 - WP_HOME='http://local.wordpress:8000'
 - DB_HOST='mariadb'

**Update /etc/hosts file :**
- add : 127.0.0.1 local.wordpress

    wpe

- choose "Bedrock | WordPress Boilerplate"
- then all default values
- "Missing local database. Do you want to add it" > No

*Your website is up and running at 👉 http://local.wordpress:8000*

    cd wpe-docker/
    make shell
    composer require wpextend/wp-advanced-block-theme
    composer require wpextend/demo-theme
    composer install --working-dir=web/app/plugins/wp-advanced-block-theme

- **Install Wordpress**
- Activate "WP advanced block theme" plugins
- Activate "Customize Theme Details 01-basic" theme