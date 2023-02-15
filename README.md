    composer create-project roots/bedrock wordpress
    cd wordpress
    rm .env.example

**Update .env file :**

 - WP_HOME='http://local.wordpress:8000'
 - DB_HOST='mariadb'

**And add :**

    THEME_FRONT_END_RELATIVE_PATH='front-end'
    # Frontspec json file location in current theme
    THEME_FRONTSPEC_JSON_FILENAME='frontspec.json'
    # Template location in current theme (default: views/)
    THEME_VIEW_ROOT_LOCATION='src/views/'
    # Component sub-location (default: components/)
    COMPONENTS_RELATIVE_PATH='components/'
    # Section container class name (default: container)
    CONTAINER_CLASS_NAME='container_test2'
    # Used for scripts enqueue. If doesn't exists, WP_ENV used instead.
    FRONT_ENV='production'

**Update /etc/hosts file :**

- add : 127.0.0.1 local.wordpress

`wpe`

- choose "Bedrock | WordPress Boilerplate"
- then all default values
- "Missing local database. Do you want to add it" > No


**Edit config/application.php - Add :**

    Config::define('THEME_FRONT_END_RELATIVE_PATH', env('THEME_FRONT_END_RELATIVE_PATH'));
    Config::define('THEME_FRONTSPEC_JSON_FILENAME', env('THEME_FRONTSPEC_JSON_FILENAME'));
    Config::define('THEME_VIEW_ROOT_LOCATION', env('THEME_VIEW_ROOT_LOCATION'));
    Config::define('COMPONENTS_RELATIVE_PATH', env('COMPONENTS_RELATIVE_PATH'));
    Config::define('CONTAINER_CLASS_NAME', env('CONTAINER_CLASS_NAME'));
    Config::define('FRONT_ENV', env('FRONT_ENV'));

*Your website is up and running at 👉 http://local.wordpress:8000*

    cd wpe-docker/
    make shell
    composer require wpextend/wp-advanced-block-theme
    composer require wpextend/demo-theme
    composer install --working-dir=web/app/plugins/wp-advanced-block-theme

- **Install Wordpress**

- Activate "WP advanced block theme" plugins
- Activate "Customize Theme Details 01-basic" theme