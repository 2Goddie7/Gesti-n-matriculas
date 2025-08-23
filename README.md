# Gestión-matriculas
Primer caso de estudio examen final de carreara

# Configuración ambiente de desarrollo 

--------- PRIMER PASO ---------
Se abre la terminal y dentro de la carpeta que contiene el proyecto se ejecuta "npm init --y", el cual crea el archivo package.json

Además en la carpeta raíz creamos los archivos .env quien contendrá nuestras variables de entorno y . gitignore para evitar agregar archivos no deseados a github como .env y node_modules. 

--------- SEGUNDO PASO ---------
Se instala los modulos necesarios para el proyecto "npm i express bcryptjs mongoose dotenv cors", 

--------- TERCER PASO ---------
Se crea la carpeta src y dentro de ella los archivos "server.js" e "index.js". Además de las carpetas: config, controllers, middleware, models, routes, utils 

Dentro de cada carpeta se tendrá su propio archivo