# Taller UniSabana - Micro Frontends y su Integración con Microservicios

Bienvenido al repositorio del Taller UniSabana - Micro Frontends y su Integración con Microservicios. Aquí encontrarás tres aplicaciones creadas con React y Vite. Este tutorial te guiará paso a paso para poner en funcionamiento estos micro frontends y observar su integración.

## Proyectos

Los proyectos incluidos en este repositorio son los siguientes:
- **shell -> Orquestador de los MFE's**
- **weather-app**
- **news-app**

## Configuración Inicial

Para comenzar, debes instalar las dependencias de cada proyecto. Sigue estos pasos:

1. **Clona este repositorio** en tu máquina local:
    ```bash
    git clone https://github.com/CristianMelgarejo94/CristianMelgarejo94-taller-uni-sabana-mfe.git
    ```

2. **Accede a cada proyecto** y ejecuta el comando de instalación de dependencias:
    ```bash
    # Para el proyecto shell:
    cd shell
    npm install
    cd ..

    # Para el proyecto weather-app:
    cd weather-app
    npm install
    cd ..

    # Para el proyecto news-app:
    cd news-app
    npm install
    cd ..
    ```

## Ejecución de las Aplicaciones

Una vez instaladas las dependencias, debes ejecutar las aplicaciones siguiendo estos pasos:

1. **shell**: Inicia el servidor de desarrollo con el siguiente comando:
    ```bash
    cd shell
    npm run dev
    ```
    Esto iniciará la aplicación shell en modo desarrollo.

2. **weather-app**: Inicia el micro frontend de la aplicación del clima con el siguiente comando:
    ```bash
    cd weather-app
    npm run start-mf
    ```
    Esto iniciará el micro frontend de la aplicación del clima.

3. **news-app**: Inicia el micro frontend de la aplicación de noticias con el siguiente comando:
    ```bash
    cd news-app
    npm run start-mf
    ```
    Esto iniciará el micro frontend de la aplicación de noticias.

## Visualización de la Aplicación

Para observar el funcionamiento de los micro frontends integrados, abre tu navegador y dirígete a la siguiente URL:

[http://localhost:5000](http://localhost:5000)

