Do you want to run several websites with different domains and HTTPS on one machine with as little server setup as possible? All that is needed is Docker!  

This is a `docker-compose` setup that uses [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy) and [JrCs/docker-letsencrypt-nginx-proxy-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) to make an nginx proxy for your projects supporting HTTPS by automatically generating [letsencrypt](https://letsencrypt.org/) certificates for every virtual host.

### Usage

In order for your servers to be proxied they need to be on the `reverse-proxy` network. Create the docker network:  

    $ docker network create reverse-proxy

To start up the proxy server, just `cd` into the `nginx-proxy` directory and launch it with:  

    $ docker-compose up

Note: For localhost devleopment, you should only start the nginx-proxy without letsencrypt:  

    $ docker-compose up nginx-proxy

As soon as the proxy is running, you can `cd` into the example app directory and start it up:

    $ docker-compose up

Since the example app is in the same network as nginx-proxy (`reverse-proxy`), it will be proxied.  

To test the example, app edit your `/etc/hosts` file and point `example.dev` at `127.0.0.1` and go to [example.dev](http://example.dev). You should see the example app's output (Hello World!)  

To enable HTTPS and letsencypt, uncomment the lines `LETSENCRYPT_HOST` and `LETSENCRYPT_EMAIL` in the example app's `docker-compose.yml` file. Note that letsencrypt will only work for real domains (reachable from outside your local network). 

This is just my little setup! Thanks to [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy) and [JrCs/docker-letsencrypt-nginx-proxy-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion). Check them out for forther instructions.