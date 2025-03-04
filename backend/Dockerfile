# syntax = docker/dockerfile:1

# Definir la versión de Ruby (debe coincidir con Gemfile)
ARG RUBY_VERSION=3.2.7
FROM registry.docker.com/library/ruby:$RUBY_VERSION-slim as base

# Directorio de la app
WORKDIR /rails

# Configurar entorno de producción
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development"

# ---------------------
# Etapa de Construcción
FROM base as build

# Instalar dependencias del sistema
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential git libvips pkg-config libyaml-dev && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copiar el archivo de dependencias y realizar instalación de gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 4 --retry 3 && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git

# Copiar el código de la aplicación
COPY . .

# ---------------------
# Imagen final para la ejecución
FROM base

# Instalar dependencias en la imagen final
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    curl libsqlite3-0 libvips libyaml-dev && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copiar archivos compilados de la etapa de construcción
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

# Crear usuario sin privilegios para ejecutar la app
RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails db log storage tmp
USER rails:rails

# Configurar punto de entrada
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar el servidor
CMD ["./bin/rails", "server"]
