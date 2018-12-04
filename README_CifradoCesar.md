# CfraSafe

  
Se encuentra cifrado mediante Cipher Cesar. El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.



#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.



## ¿A quién está dirigido?

## ¿Cuáles son los objetivos del usuario al usar SafeCode?

## ¿Cómo resuelve los problemas del usuario?


### ¿Cómo funciona?

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.

- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

 



Usa este alfabeto simple (solamente mayúsculas y sin ñ):

  

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  


Aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

ú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de ejemplo:

- Crear claves seguras para el email.

- Encriptar/cifrar una tarjeta de crédito.

- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.

- Mensajería secreta para parejas.

 

## Objetivos de aprendizaje

  

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

  

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.

- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).

- Manipular _**strings**_ (cadenas de texto).

- Usar **control de flujo** (bucles, condicionales, ...).

- Actualizar la pantalla con los resultados (**manipular el DOM**).

-  **Implementar funciones** dada una descripción de su comportamiento.

- Verificar tu implementación con **pruebas unitarias**.

- Entender las **necesidades del usuario** y cómo proponer una solución.

- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

  

## Parte Obligatoria

#### Interfaz de usuario (UI)
  
La interfaz debe permitir al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.

- Insertar un mensaje (texto) que queremos cifrar.

- Ver el resultado del mensaje cifrado.

- Insertar un mensaje (texto) a descifrar.

- Ver el resultado del mensaje descifrado.

  

#### Scripts / Archivos

  

*  `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación

así como una introducción a la aplicación, su funcionalidad y decisiones de

diseño que tomaron.

*  `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo

debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.

*  `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar

_exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe

contener dos métodos:

-  `cipher.encode(offset, string)`: `offset` es el número de posiciones que

queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)

que queremos cifrar.

-  `cipher.decode(offset, string)`: `offset` es el número de posiciones que

queremos mover a la izquierda en el alfabeto y `string` el mensaje

(texto) que queremos descifrar.

*  `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`

o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.

*  `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá

tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

  

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

  

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.
 

## Vamos a los detalles. Consideraciones Técnicas

No se debe utilizar la _pseudo-variable_  `this`.

  

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_

y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el

setup y configuración necesaria para ejecutar los tests (pruebas) así como _code

coverage_ para ver el nivel de cobertura de los tests usando el comando `npm

test`.


El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este

repositorio que contiene el _boilerplate_.

  
El _boilerplate_ contiene una estructura de archivos como punto de partida así

como toda la configuración de dependencias y tests de ejemplo:

  

```text

./

├── .editorconfig

├── .eslintrc

├── .gitignore

├── README.md

├── package.json

├── src

│ ├── cipher.js

│ ├── index.html

│ ├── index.js

│ └── style.css

└── test

├── cipher.spec.js

├── headless.js

└── index.html

```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y

[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y

`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan

automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando

`npm run test`. En el caso de `JavaScript` estamos usando un archivo de

configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de

información sobre el parser que usar (qué version de JavaScript/ECMAScript), el

entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

En cuanto a reglas/guías de estilo en sí,

usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

  

## Evaluación

  

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)

para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo completes:

  
## Pistas sobre cómo comenzar a trabajar en el proyecto



1. Antes que nada, asegúrate de tener un :pencil: editor de texto en

condiciones, algo como [Atom](https://atom.io/) o

[Code](https://code.visualstudio.com/).

2. Para ejecutar los comandos a continuación necesitarás una :shell:

[UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),

que es un programita que interpreta líneas de comando (command-line

interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)

instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,

ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`

también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),

aunque recomendaría que consideres probar :penguin: GNU/Linux.

3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)

del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te

darán acceso de lectura en ese repo.

4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)

tu _fork_ a tu computadora (copia local).

5. 📦 Instala las dependencias del proyecto con el comando `npm

install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que

incluye [npm](https://docs.npmjs.com/)).

6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:

pruebas unitarias (unit tests) con el comando `npm test`.

7. A codear se ha dicho! :rocket:

  

## Recursos y temas relacionados

  

A continuación un video de Michelle que te lleva a través de la fórmula

matemática del Cifrado César y un par de cosas más que debes saber para

resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

  

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

  

Diseño de experiencia de usuario (User Experience Design):

  

- Ideación

- Prototipado (sketching)

- Testeo e Iteración

  

Desarrollo Front-end:

  

* Valores

* Tipos

* Variables

* Control de flujo

* Tests unitarios


Herramientas:

- GitHub y GitHub Pages.

-  [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

  

## Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

  

### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.

* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con

el producto.

* [ ] `README.md` explica claramente cómo el producto soluciona los

problemas/necesidades de los usuarios.

* [ ] Usa VanillaJS.

* [ ] No utiliza `this`.

* [ ] Implementa `cipher.encode`.

* [ ] Implementa `cipher.decode`.

* [ ] Pasa linter con configuración provista.

* [ ] Pasa pruebas unitarias.

* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un

mínimo del 50% de _branches_.

* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el

cifrado/descifrado.

* [ ] Interfaz permite escribir un texto para ser cifrado.

* [ ] Interfaz muestra el resultado del cifrado correctamente.

* [ ] Interfaz permite escribir un texto para ser descifrado.

* [ ] Interfaz muestra el resultado del descifrado correctamente.

  

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas

* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)

* [ ] Permite usar un `offset` negativo.
## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```