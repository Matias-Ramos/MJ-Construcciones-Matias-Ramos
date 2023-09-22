# Name

MJ construcciones

## Purpose

This portfolio serves as a comprehensive tool to showcase the trajectory and capabilities of this construction company, thereby enhancing its professional credibility and ultimately bolstering its client acquisition efforts.

## Link

mjconstrucciones.ar

## Project status

Finished

## Contact 

https://www.linkedin.com/in/matias-ramos-computacion/


## Code 

### Languages

- HTML
- SCSS (css)
- JS vanilla

### Frameworks

Bootstrap 4.6

### Animations

AOS: https://michalsnik.github.io/aos/

### Directory tree
|-- index.html
|-- README.md
|-- package-lock.json
|-- package.json
|
|
|-- pages/
|   |-- faq.html
|   |-- galeria.html
|   |-- llaveEnMano.html
|   |-- piletas.html
|   |-- proyectos_realizados/
|   |   |-- inmuebles/
|   |   |   |-- inmueble_1.html
|   |   |   |-- inmueble_2.html
|   |   |   |-- inmueble_3.html
|   |   |   |-- inmueble_4.html
|   |   |   |-- inmueble_5.html
|   |   |   |-- inmueble_6.html
|   |   |   `-- yt-iframe.txt
|   |   `-- piletas/
|   |       `-- pileta_1.html
|   |-- remodelaciones.html
|   `-- vtaViviendas.html
|
|
|-- js/
|   |-- AccordionOnClickCenterViewport_Index.js
|   |-- AccordionOnClickCenterViewport_Remod.js
|   |-- Filters.js
|   |-- Popover_Index.js
|   |-- modal_Img.js
|   |-- llaveEnManoForm.js
|   |-- navBottomResponsive.js
|   |-- piletasForm.js
|   `-- remodelacionesForm.js
|
|
|-- scss/
|   |-- _bodyGlobalStyles.scss
|   |-- _faq.scss
|   |-- _footer.scss
|   |-- _galeria.scss
|   |-- _index.scss
|   |-- _llaveEnMano.scss
|   |-- _piletas.scss
|   |-- _proyectosX.scss
|   |-- _remodelaciones.scss
|   |-- _resets.scss
|   |-- _servicios.scss
|   |-- _variables.scss
|   |-- _vtaViviendas.scss
|   `-- chiefSass.scss
|
|
|-- css/
|   |-- additionalStyles.css
|   |-- additionalStyles_BACKUP_930.css
|   |-- additionalStyles_BASE_930.css
|   |-- additionalStyles_LOCAL_930.css
|   `-- additionalStyles_REMOTE_930.css
|
|
|-- images/
|   |
|   |-- Servicios/
|   |   |
|   |   |-- llaveEnMano/
|   |   |   |-- casaLista.jpg
|   |   |   |-- choice.jpg
|   |   |   |-- contract.jpg
|   |   |   `-- render3d.jpg
|   |   |
|   |   |-- piletas/
|   |   |   `-- productos-servicios/
|   |   |       |-- Jacuzzi-exterior.jpg
|   |   |       |-- borde-infinito.webp
|   |   |       |-- pileta-calefaccionada.jpg
|   |   |       |-- pileta-climatizada.jpg
|   |   |       |-- pileta-iluminada.jpg
|   |   |       `-- revestimientos.jpg
|   |   |
|   |   |-- remodelaciones/
|   |   |   `-- collage.jpg
|   |   |
|   |   `-- vtaViviendas/
|   |       |-- IconArgenProp7.png
|   |       |-- mercado-libre.svg
|   |       `-- zona-prop2.svg
|   |
|   |
|   |-- icons/
|   |   |-- favicon.ico
|   |   |-- iconAttPers.png
|   |   |-- iconCostos.png
|   |   |-- iconRapidez.png
|   |   |-- icons8_key.png
|   |   |-- mj_logo.webp
|   |   `-- pointer.svg
|   |
|   |
|   |
|   |-- index/
|   |   |-- javier.png
|   |   |-- matias.png
|   |   |-- plano.jpg
|   |   `-- portada.png
|   |
|   |
|   |
|   `-- proyectos_realizados/
|       |-- antes_desp_1/
|       |   |-- antes.jpg
|       |   `-- despues.jpg
|       |-- antes_desp_2/
|       |   |-- antes.jpg
|       |   `-- despues.jpg
|       |-- assets/
|       |   |-- gps-icon.png
|       |   |-- guard-band.png
|       |   `-- youtube-logo2.png
|       |-- inmueble_1/
|       |   `-- (many images)
|       |-- inmueble_2/
|       |   `-- (many images)
|       |-- inmueble_3/
|       |   `-- (many images)
|       |-- inmueble_4/
|       |   `-- (many images)
|       |-- inmueble_5/
|       |   `-- (many images)
|       |-- inmueble_6/
|       |   `-- (many images)
|       `-- pileta_1/
|           `-- (many images)

27 directories, 138 files

### Code explanation
Most of the code is quite self explanatory, but if there are some files that need to be explained those would be the .js files that handles the forms (llaveEnManoForm.js, piletasForm.js, remodelacionesForm.js).

They do basically the same, which are two things: Insert the form in the DOM, and update a local storage variable. The purpose of the local storage variable is keep the form open if the button to open the form was clicked but the browser was reload.

The reason for this implementation is to encourage the user to finish the transaction if he already started it.

![FormLogic](js/FormLogic.png)


## Deployment

### Pre-requisites
- VScode (or any other IDE of preference)
- Git
- NodeJS

### Installation for development

How to install the project and its dependencies: 

1. git clone https://github.com/Matias-Ramos/MJ-Construcciones.git
2. cd root
3. npm install
4. npm run watch-css
5. open index.html and code to see the changes.

## Last comments
My apologies for the spanglish on the name of some variables, it is a practice I don't carry with me anymore. This was my first web project and the cost-benefit of fixing it now is just not worth it, so I decided to leave it as is. 