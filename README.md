# CifraSafe


Bienvenido a CifraSafe, la mejor aplicación para cifrar sus contraseñas. 

Aqui explicaremos el funcionamiento, el público al que está dirigido, los objetivos del usuario en relación al producto, y qué problemas resuelve esta aplicación.   

* Versión (pronto) disponible en [Inglés](https://github.com/Paulinacm/scl-2018-11-bc-core-cipher/blob/master/README_english.md).

*******
Indice de contenidos  
 1. [Instalación y Uso](##Instalación )
 2. [¿Cuáles ?](##¿Cuáles)
 3. [¿Cómo ](#¿Cómo)
 4. [M](#syntax)

*******
## Instalación y Uso

* #### Descarga
CiferSafe lo puedes descargar desde aquí.

* #### Instalación
Para instalarlo necesitas...

* #### Ejecutar la aplicación.


* #### Introducción 
`README.md`:  introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.

#### ¿Cómo funciona?
  
CiferSafe es una aplicación que realiza cifrado y descifrado de texto mediante el sistema *Cipher Cesar* o Cifrado César.   El cifrado César es una técnicas para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.

- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.

- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


Usa el alfabeto simple (mayúsculas y minúsculas, sin ñ ni caracteres especiales):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

- a b c d e f g h i j k l m n o p q r s t u v w x y z


*****
Los pasos que deben realizar para utilizar la aplicación son:

1. Ingresar a la página.

2.  Seleccionar si quieren cifrar o descifrar una contraseña.

3. En el area de texto escribir o pegar la contraseña a Cifrar/Descifrar.

4. Indicar el número de cifrado.

5. El resultado se verá inmediatamente en la sección contigua.

6. Listo para usar!


#### Decisiones de Diseño


#### Interfaz de usuario (UI)

  
La interfaz permite al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.

- Insertar un mensaje (texto) que queremos cifrar.

- Ver el resultado del mensaje cifrado

- Insertar un mensaje (texto) a descifrar.

- Ver el resultado del mensaje descifrado.


#### Definición del producto

A continuación se presenta como se pensó en los usuarios y el proceso para definir el producto final a nivel de experiencia y de interfaz.


## ¿A quién está dirigido?

En un ambiente cambiante, y con alta vulnerabilidad, es que se hace cada vez más necesario tener un modo de mejorar la seguridad de las contraseñas utilizadas.  

Esta aplicación esta dirigida a particulares y empresas que quieran mejorar la seguridad de sus contraseñas de acceso, por ej.: contraseñas de correo, contraseñas de acceso a los computadores de escritorio, contraseñas de carpetas con archivos relevantes, entre otros.

Tener un sistema de codificación contribuye a dar seguridad al espacio personal y de trabajo.

  
## ¿Cuáles son los objetivos del usuario al usar CifraSafe?

Mejorar la seguridad de las contraseñas digitales, tanto personales como institucionales, de las personas.

Los objetivos del usuario se encuentran en relación a la creación de contraseñas cifradas mediante el código césar.


  
### ¿Cómo resuelve los problemas del usuario?

  * [ ] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.

****
## Diseño de experiencia de usuario (User Experience Design):

- Ideación.

- Prototipado (sketching)

Diagrama de flujo:

![enter image description here](https://lh3.googleusercontent.com/TVEtorSVXgdh_BY1_smM_1e54i4_jqu_uf1znpuMMtW2TUSMoXyVu3VGmwPHNbivjxfEzp7I3lKf "User Flow")

### User Testing



## Testeo e Iteración

Desarrollo Front-end:

* Valores

* Tipos

* Variables

* Control de flujo

* Tests unitarios
Se realizó testeo con  `npm package`

Herramientas:

- GitHub y GitHub Pages.


## Contribuciones

Mejoras y otras variaciones mediante Pull-Request son bienvenidas. 