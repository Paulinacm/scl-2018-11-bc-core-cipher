
# CifraSafe

![enter image description here](https://lh3.googleusercontent.com/pNLmI9rhi1Mm7jXmea-d8b5WKtqT4D9HPrdllhDeGPrilsbt94cysRlFRmfxUPKqVLP9jS7T0bjn "Lock")
Bienvenido a CifraSafe, la mejor aplicación para cifrar sus contraseñas. 

Aqui explicaremos el funcionamiento de la App, el público al que está dirigido, los objetivos del usuario en relación al producto, y qué problemas resuelve esta aplicación.   

* Versión (pronto) disponible en [Inglés](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher/blob/master/README_english.md).

*******
Indice de contenidos  
 1. [Instalación y Uso](##Instalación )
 2. [¿Cuáles ?](##¿Cuáles)
 3. [¿Cómo ](#¿Cómo)
 4. [M](#syntax)

*******


## ¿A quién está dirigido?

En un ambiente cambiante, y con alta vulnerabilidad, es que se hace cada vez más necesario tener un modo de mejorar la seguridad de las contraseñas utilizadas.  

Esta aplicación esta dirigida a particulares y empresas que quieran mejorar la seguridad de sus contraseñas de acceso, por ej.: contraseñas de correo, contraseñas de acceso a los computadores de escritorio, contraseñas de carpetas con archivos relevantes, entre otros.

Tener un sistema de codificación contribuye a dar seguridad al espacio personal y de trabajo.

  
## ¿Cuáles son los objetivos del usuario al usar CifraSafe?

Mejorar la seguridad de las contraseñas digitales, tanto personales como institucionales, de las personas.

Los objetivos del usuario se encuentran en relación a la creación de contraseñas cifradas mediante el código césar.


  
### ¿Cómo resuelve los problemas del usuario?

 Explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.



#### ¿Cómo funciona?
CiferSafe es una aplicación que realiza cifrado y descifrado de texto mediante el sistema *Cipher Cesar* o Cifrado César.   El cifrado César es una técnicas para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

**Para Cifrado**
Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.


Usa el alfabeto simple (mayúsculas y minúsculas, sin ñ ni caracteres especiales):

`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`

 `a b c d e f g h i j k l m n o p q r s t u v w x y z`

**Para Descifrado**
Funciona del mismo modo que el cifrado, únicamente que al ingresar el offset el texto se descifra.
Con el ejemplo previo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra D se descifra como A.

- La palabra FDVD se descifra como CASA.

### Instalación y Uso

* #### Descarga y Uso
CiferSafe lo puedes ver en su versión demo [aquí](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher/blob/master/README.md).

Para instalarlo necesitas...

* #### Ejecutar la aplicación.

****
## Decisiones de Diseño


#### Interfaz de usuario (UI)

  
La interfaz permite al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.

- Insertar un mensaje (texto) que queremos cifrar.

- Ver el resultado del mensaje cifrado

- Insertar un mensaje (texto) a descifrar.

- Ver el resultado del mensaje descifrado.



## Diseño de experiencia de usuario (User Experience Design):

- Ideación.


- Prototipado (sketching)
 Wireframe

Diagrama de flujo:

![enter image description here](https://lh3.googleusercontent.com/TVEtorSVXgdh_BY1_smM_1e54i4_jqu_uf1znpuMMtW2TUSMoXyVu3VGmwPHNbivjxfEzp7I3lKf "User Flow")

### User Testing
Se realizó el testeo de la aplicación con un usuario.
Encontrando las siguientes dificultades y sus planteamientos de soluciones a considerar.

 - Crear Login con usuario y contraseña para guardar contraseñas.
 - Modo de envío de contraseñas a correo u otro medio.
 - Modo de guardar contraseñas en servidor.
 - Incluir caracteres especiales que dan mayor seguridad a las contraseñas.

## Testeo e Iteración

* Tests unitarios
Se realizó testeo unitario con TDD (desarrollo basado en pruebas) utilizando  `npm package`

Herramientas:

- GitHub y GitHub Pages.


## Contribuciones

Mejoras y otras variaciones son bienvenidas. 

Por favor seguir los siguientes pasos:  

- Dale Fork el repositorio
- Crea una nueva rama (branch) (`git checkout -b mejora-feature`)
- Realiza los cambios en los archivos
- Haz Commit a tus cambios (`git commit -am 'Mejora feature'`)
- Da Push a la rama (branch) (`git push origin mejora-feature`)
- Enviar un Pull Request 