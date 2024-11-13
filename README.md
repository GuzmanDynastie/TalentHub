# TalentHub
## Documentacion

> TalentHub es una red social privada orientada a la interacción académica entre estudiantes y graduados de la universidad. Su enfoque inicial es la comunidad de Ingeniería en Computación, aunque su diseño escalable permite la integración de otras carreras en el futuro. La plataforma facilita la participación mediante foros privados, donde los usuarios pueden realizar publicaciones, comentarios, y dar likes, además de contar con un sistema de nivel que premia la interacción. Con roles específicos de administradores, moderadores y usuarios, TalentHub asegura una gestión efectiva y organizada. Para unirse, los usuarios necesitan invitación de un moderador y deben aprobar pruebas que varían según su grado académico. La plataforma, accesible tanto en web como en dispositivos móviles, busca fortalecer la colaboración académica y el aprendizaje dentro de un entorno exclusivo y controlado.

> Funcionalidades <br>
En la aplicación existen dos roles fundamentales:
+ [Administrador](#administrador)
+ [Moderador](#moderador)
+ [Usuario General](#usuario-general)
  
---

### Tabla de contenidos
+ [¿Cómo ejecutar el programa?](#como-ejecutar-el-programa)
+ [¿Cómo detener un proceso de servidor?](#como-detener-proceso-servidor)
+ [Tecnologias](#tecnologias)
+ [Imagenes e Iconos](#imagenes)

---

### ¿Cómo ejecutar el programa?
<a name="como-ejecutar-el-programa"></a>
- Para ejecutar el código, simplemente abre la terminal y utiliza el siguiente comando: `npm run dev`. Este comando ejecuta el código, y lo más interesante es que el servidor se reinicia automáticamente con cada modificación, eliminando la necesidad de reiniciarlo manualmente con `CTRL + C` y luego ejecutar `node src/index.js`.

### ¿Cómo detener un proceso de servidor? - UBUNTU
<a name="como-detener-proceso-servidor"></a>
- Si necesitas detener un proceso del servidor que se te olvidó cerrar, sigue estos pasos:
- 1-. Obtén la información del proceso con el comando:  `lsof -i :TU_PUERTO`.
- 2-. Localiza el valor de la propiedad PID.
- 3-. Finaliza el proceso ejecutando: `kill <VALOR_PID>`.

### ¿Cómo detener un proceso de servidor? - Windows
<a name="como-detener-proceso-servidor"></a>
- Para detener un proceso del servidor en Windows, sigue estos pasos:
- 1-. Abre la terminal (símbolo del sistema o PowerShell).
- 2-. Ejecuta el siguiente comando para listar los procesos que están usando el puerto en cuestión: `netstat -ano | findstr :TU_PUERTO`.
- 3-. Localiza el valor del PID (ID del proceso) del proceso que deseas detener.
- 4-. Luego, ejecuta el siguiente comando para finalizar el proceso: `taskkill /PID <VALOR_PID> /F`.

---

### Tecnologías utilizadas
<a name="tecnologias"></a>
> ###### Front-end
- [x] HTML
- [x] CSS
- [X] React Native (para versión web y móvil)
____
> ###### Back-end
- [x] JavaScript
- [x] Node.js
- [x] Express
- [x] Sockets (para notificaciones en tiempo real)
____
> ###### Base de datos
- [x] PostgreSQL
____
> ###### Despliegue
- [x] 

---

### Imagenes e Iconos
<a name="imagenes"></a>
> ###### Fotografías y gráficos gratuitos para uso personal y comercial
- [x] FreeImages.com
- [x] fontawesome.com

---

### Colaboradores
<a name="colaboradores"></a>
- **Equipo de Desarrollo:** Este proyecto es desarrollado por un grupo de estudiantes de la Universidad UNE, dedicados a crear una plataforma de interacción académica privada y exclusiva para fomentar el aprendizaje colaborativo y la conexión entre estudiantes y graduados.
  
- **Colaboradores Clave:**
  - [Jesus Emmanuel Guzman Covarrubias](https://www.linkedin.com/in/jesus-emmanuel-guzman-covarrubias-753150168/): Desarrollador Fullstack
  - [Hector Sotelo Gomez](enlace2): Desarrollador Fullstack
  - [Jose Luis Garcia Delgadillo](enlace3): Desarrollador Fullstack

---


<br><br><br><br>
##### Copia y pega el codigo generado en la pagina en este documento
`<URL para la documentacion> ` https://pandao.github.io/editor.md/en.html