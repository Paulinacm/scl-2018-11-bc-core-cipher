# TextSafe
![enter image description here](https://lh3.googleusercontent.com/Yasec1ITP1cmM_6UvMtnG4NYv1igXPOipPbZ6gQyi2dwgP__rX6ZyPlb43p1Z4N2_vhg4eyQa2pA "Pantalla Inicio")
Bienvenido a CifraSafe, la mejor aplicación para enviar mensajes en redes inseguras!!

* Versión (pronto) disponible en [Inglés](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher/blob/master/README_english.md).


## ¿A quién está dirigido?

En un contexto donde es común la disponibilidad de conección a redes abiertas, y con alta vulnerabilidad, es que se hace cada vez más necesario tener un modo de mejorar la privacidad de los mensajes que nos enviamos.  Es por esto que nace TextSafe, la mejor alternativa para resolver la necesidad de los usuarios de enviar mensajes personales o laborales, ya sea por redes sociales o por correo, pero agregando mayor seguridad mediante la codificación de este mensaje.  

Esta aplicación esta dirigida especialmente a personas que se conecten a redes abiertas como: aeropuertos, lugares de estudio, cafés, plazas públicas y que quieran mejorar la seguridad de sus mensajes de comunicación con otra persona.

Tener un sistema de codificación contribuye a dar seguridad a los mensajes personales y de trabajo.

  
## ¿Cuáles son los objetivos del usuario al usar TextSafe?

Mejorar la seguridad de los mensajes digitales, tanto personales como laborales, de personas que estén usando una red de wifi abierta y no privada.

El usuario de la App TextSafe, requiere enviar mensajes de texto (whatsapp, messenger) o emails, y que quieran dar mayor seguridad  a este mensaje.


  
### ¿Cómo resuelve los problemas del usuario?

 La necesidad de comunicarse es inherente al ser humano, y hoy en día la posibilidad de utilizar las redes es cada vez más amplia y disponible para todos, sin embargo muchas de esas conecciones a las redes de wifi son mediante redes abiertas y no protegidas, por lo que cualquiera podría tener acceso a la información compartida.  La App TextSafe contribuye a esos usuarios que requieren comunicarse de un modo seguro, mediante el cifrado de sus mensajes.


#### ¿Cómo funciona?
CiferSafe es una aplicación que realiza cifrado y descifrado de texto mediante el sistema *Cipher Cesar* o Cifrado César.   El cifrado César es una técnica para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

**Para Cifrado**
Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.

![enter image description here](https://lh3.googleusercontent.com/K-aZN0WE9yu5ukKalG-VO_4-KKqt8ku8HBvhgqmSK2dhwf5nvU2GZVZ4FUNE1xoPcALEV16seBJ2 "Cifrado")
Usa el alfabeto simple (mayúsculas y minúsculas, sin ñ ni caracteres especiales):

`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`

 `a b c d e f g h i j k l m n o p q r s t u v w x y z`

**Para Descifrado**
Funciona del mismo modo que el cifrado, únicamente que al ingresar el offset el texto se descifra.
Con el ejemplo previo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra D se descifra como A.

- La palabra FDVD se descifra como CASA.

![enter image description here](https://lh3.googleusercontent.com/MsCHn85uw9B2IMa9VtezE7vVMMbIagHIcNpGYVq_vTOzRTQCw09S3yOLSZA_uXF1NQNz5za8IzSV "Descifrado")

### Instalación y Uso

* #### Descarga y Uso
CiferSafe lo puedes ver en su versión demo [aquí](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher/blob/master/README.md).


****
## Decisiones de Diseño


#### Interfaz de usuario (UI)

  
La interfaz permite al usuario:

- Elegir Cifrado o Descifrado de Texto.

- Para **Cifrado**: 
Insertar un mensaje (texto) que queremos cifrar.
Elegir un desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Ver el resultado del mensaje cifrado

- Para **Descifrado**:
Insertar un mensaje (texto) a descifrar.
Elegir un desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Ver el resultado del mensaje descifrado.

- Volver a iniciar otra secuencia.

## Diseño de experiencia de usuario (User Experience Design):

- **Ideación.**
Se utilizó como base del proyexto el **respositorio** de nerdale desde [Github](https://github.com/Laboratoria/scl-2018-11-bc-core-cipher).

	Luego, mediante un **Wireframe** se dio inicio al prototipado de la solución a una problemática mediante el Cifrado César.
	
![enter image description here](https://lh3.googleusercontent.com/kKAoifBrF_2b3IEc5xNZ1_pQoZYAHHbrSVnBsI5xEnAPX0JOpfEcuwuECNmP7Rm9vPB9S17hRLFJ "Wireframe código césar")

	
Lo anterior se realizó junto al diagrama de flujo como el que sigue:

![enter image description here](https://lh3.googleusercontent.com/TVEtorSVXgdh_BY1_smM_1e54i4_jqu_uf1znpuMMtW2TUSMoXyVu3VGmwPHNbivjxfEzp7I3lKf "User Flow")



Posteriormente se realizó una **planificación**, con las tareas e historias de usuario a realizar para llevar a cabo la tarea, en este caso se utilizó la aplicación de Trello,  se puede ver [aquí.](https://trello.com/b/75mRKi6s/proyecto-c%C3%A9sar)


## User Testing

Se realizó el testeo de la aplicación con un usuario.
Encontrando las siguientes dificultades y sus planteamientos de soluciones a considerar en las mejoras futuras.

 - Crear un botón de envío de los mensajes mensajes mediante otras App, como Whatsapp, slack, Gmail, Outlook, entre otros.
 - Incluir caracteres especiales que dan mayor seguridad a las contraseñas.

## Info Developers
 * Tests unitarios
Se realizó testeo unitario con TDD (desarrollo basado en pruebas) utilizando  `npm package`
 * La web App se encuentra disponible en su totalidad en: [GitHub](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher) y GitHub Pages.


## Contribuciones

Mejoras y otras variaciones son bienvenidas. 
Por favor seguir los siguientes pasos:  

- Dale Fork el repositorio
- Crea una nueva rama (branch) 
- Realiza los cambios en los archivos
- Haz Commit a tus cambios 
- Da Push a la rama (branch)
- Enviar un Pull Request 
