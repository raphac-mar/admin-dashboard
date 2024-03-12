# App Admin Dashboard

## Dados gerais

- Nome: `admin-dashboard`
- Git:  `https://github.com/raphac-mar/admin-dashboard-app`

## Nextjs with docker

- Copy the `Dockerfile` into the root of the project
  - Alterar os comandos `FROM`
  - Adicionar ARG's e ENV's

```
ARG VERSION_ARG
ENV VERSION_ENV=$VERSION_ARG
```

- Add the following to the next.config.js file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
  env: {
    NEXT_PUBLIC_VERSION_ENV: process.env.VERSION_ENV,
  },
};
```
