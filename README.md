# VerterVpn Frontend - Dashboard Premium 🚀🛡️

VerterVpn es una solución de red mesh de última generación diseñada para ofrecer privacidad total, seguridad mTLS y una experiencia de usuario excepcional. Este repositorio contiene el frontend profesional construido bajo los más altos estándares de desarrollo moderno.

## 🚀 Stack Tecnológico

- **Framework**: React 19 + Vite 7
- **Lenguaje**: TypeScript (Strict Mode)
- **Estilos**: Tailwind CSS 4 (Sistema de diseño basado en tokens)
- **Animaciones**: Framer Motion (Micro-interacciones premium)
- **Iconografía**: Lucide React
- **Ruteo**: React Router Dom v7

## ✨ Características Principales

- **Dashboard High-Tech**: Monitoreo de estado del sistema y red mesh en tiempo real.
- **Navegación Inteligente**: Enlaces absolutos con sistema de scroll suave y limpieza automática de Hash (`#`) para una URL profesional.
- **Sección de Descargas**: Instaladores dedicados para Windows, macOS, Linux y Dispositivos Móviles.
- **Centro de Soporte**: Documentación técnica detallada y Centro de Ayuda con FAQ interactivo.
- **Seguridad**: Integración nativa con políticas de Zero-Logs y cifrado de grado militar.

## 🚀 Guía de Despliegue en VPS

Sigue estos pasos para poner la aplicación en producción de manera profesional.

### 1. Preparación y Permisos

Se recomienda desplegar en `/var/www/` para seguir los estándares de Linux. Asegura que el usuario de Nginx (`www-data`) tenga acceso de lectura.

```bash
# Crear directorio y asignar permisos (reemplaza $USER por tu nombre de usuario)
sudo mkdir -p /var/www/verter-vpn
sudo chown -R $USER:www-data /var/www/verter-vpn
sudo chmod -R 775 /var/www/verter-vpn

# Clonar e instalar
cd /var/www/verter-vpn
git clone https://github.com/proyectoskevinsvega/dashboard-vpn.git .
npm install
npm run build
```

O si ya tienes el repositorio, simplemente aplica los permisos al directorio actual:

```bash
sudo chown -R $USER:www-data .
sudo chmod -R 755 .
```

### 2. Configuración de Nginx

Utiliza la configuración optimizada incluida en `nginx.conf`. Para un despliegue estándar en Ubuntu, crea un archivo en `/etc/nginx/sites-available/verter-frontend`.

#### Contenido recomendado (Ajusta los paths):

```nginx
# Nginx Configuration for VerterVpn Frontend
# Optimized for High Performance and Security

user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/log/nginx/nginx.pid;

events {
    worker_connections  2048;
    multi_accept on;
    use epoll;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # Basic Settings
    sendfile        on;
    tcp_nopush      on;
    tcp_nodelay     on;
    keepalive_timeout  65;
    types_hash_max_size 2048;
    server_tokens off;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    server {
        listen 80;
        server_name vpn.tu-dominio.com; # Reemplaza por tu dominio real

        root /var/www/verter-vpn/dist; # Ruta recomendada para producción
        index index.html;

        # Security Headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;
        add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # SPA Routing
        location / {
            try_files $uri $uri/ /index.html;
            add_header Cache-Control "no-store, no-cache, must-revalidate";
        }

        # Cache Static Assets (Vite hashes filenames)
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf)$ {
            expires 1y;
            add_header Cache-Control "public, no-transform";
            access_log off;
            log_not_found off;
        }

        # Health Check
        location /health {
            access_log off;
            return 200 "healthy\n";
        }
    }
}
```

### 3. Habilitar el Sitio

```bash
sudo ln -s /etc/nginx/sites-available/verter-frontend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Configuración SSL (Certbot)

Para un servicio profesional, es obligatorio usar HTTPS. Recomendamos **Certbot** (Let's Encrypt):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d vpn.tu-dominio.com
```

Certbot configurará automáticamente la redirección de HTTP a HTTPS y añadirá los certificados a tu archivo de Nginx.

_Desarrollado con ❤️ para el ecosistema VerterVpn_
