composer create-project roots/bedrock wordpress
cd wordpress
rm .env.example
Update WP_HOME in your .env file (for example define WP_HOME='http://local.wordpress:8000')
Define DB_HOST in your .env file : DB_HOST='mariadb'
Edit your /etc/hosts file adding : 127.0.0.1 local.wordpress
wpe (choose "Bedrock | WordPress Boilerplate", then all default values)
Your website is up and running at 👉 http://local.wordpress:8000
Install Wordpress
cd wpe-docker/
make shell
composer require wpextend/wp-advanced-block-theme