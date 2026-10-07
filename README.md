# Proyecto Eventos

API REST para una **Plataforma de Eventos e Inscripciones**. Esta pre-entrega deja la base arquitectónica del proyecto de Backend II, organizada por capas y lista para escalar.

## Temática

Plataforma donde se publican eventos y los usuarios pueden inscribirse. En entregas posteriores se sumarán registro, login, JWT, cookies, Passport, roles, autorización, gestión de eventos, inscripciones, control de cupos y notificaciones.

## Tecnologías

- Node.js (módulos ESM)
- Express
- Mongoose (modelos base)
- dotenv

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd proyecto-eventos
npm install
```

## Variables de entorno

Copiar `.env.example` a `.env` y completar los valores:

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor (por defecto 8080) |
| `NODE_ENV` | Entorno de ejecución (`development`, `production`) |
| `MONGO_URL` | URL de conexión a MongoDB |
| `JWT_SECRET` | Secreto para firmar los JWT |

## Ejecución

```bash
npm start      # producción
npm run dev    # desarrollo con recarga automática
```

## Estructura de carpetas

```
proyecto-eventos/
├── src/
│   ├── app.js            # configura Express (no levanta el server)
│   ├── server.js         # levanta el servidor
│   ├── config/           # configuración y variables de entorno
│   ├── routes/           # definición de rutas
│   ├── controllers/      # manejo de request/response
│   ├── services/         # lógica de negocio
│   ├── repositories/     # abstracción de acceso a datos
│   ├── dao/              # acceso directo a la base de datos
│   ├── models/           # esquemas (User, Event)
│   ├── middlewares/      # middlewares (errores, etc.)
│   └── utils/            # utilidades
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Rutas disponibles

| Método | Ruta | Descripción | Respuesta |
|---|---|---|---|
| GET | `/api/health` | Estado del servidor | `200` `{ "status": "ok", "message": "Servidor activo" }` |
| GET | `/api/events` | Lista de eventos (vacía por ahora) | `200` `{ "status": "success", "payload": [] }` |
| POST | `/api/sessions/register` | Estructura inicial, sin lógica | `501` |
| POST | `/api/sessions/login` | Estructura inicial, sin lógica | `501` |
