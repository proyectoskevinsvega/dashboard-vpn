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

### 1. Preparación del Entorno

```bash
git pull origin main
npm install
npm run build
```

### 2. Configuración de Nginx

Utiliza la configuración optimizada incluida en `nginx.conf`. Para un despliegue estándar en Ubuntu, crea un archivo en `/etc/nginx/sites-available/verter-frontend`:

```nginx
server {
    listen 80;
    server_name vpn.tu-dominio.com;

    root /home/ubuntu/dashboard-vpn/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache agresiva para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

### 3. Activación

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

## 🛡️ Estándares de Código

Este proyecto utiliza un sistema de linting riguroso para garantizar la calidad del código:

- **ESLint**: Configuración avanzada para React y TypeScript.
- **Prettier**: Formateo de código consistente.
- **Zero-Unused-Imports**: Todas las importaciones innecesarias son removidas automáticamente para optimizar el bundle.

---

_Desarrollado con ❤️ para el ecosistema VerterVpn_
