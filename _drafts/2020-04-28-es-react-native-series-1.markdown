---
layout: post
title:  "Aplicación React Native desde 0!"
date:   2020-04-28 09:00:00 +0200
categories: posts
comments: true
lang: es
link: /posts/2019/05/24/first_post.html
altLangLink: /posts/2019/05/24/primer_post.html
readTime: 5
categoryList: react, reactnative, native
---
![x-large header](/assets/reactNativeSeries/ReactNative.png)

Este experimento comienza una tarde aburrida durante el bloqueo del corona virus donde me encontraba preguntándome qué podría hacer. 
Durante varios años tuve una aplicación móvil rondando en mi cabeza pero nunca encontraba el momento de iniciar el proyecto ya que sabía la de esfuerzo que conllevaría y que no sería fácil de compaginar con el trabajo, no obstante, también buscaba una nueva motivación.
<br>
<br>
Es por eso que decidí embarcarme en esta aventura y aquí estoy para contar la visión desde un punto de desarrollador creando una aplicación React Native desde 0.
<br>
<br>
Elegí React Native porque ya sabía de su potencia y previamente había trabajado con otras tecnologías híbridas como Ionic o Cordova, sin embargo solo tenía experiencia con React y algún gestor de estados como Redux.
Es por esto por lo que decidí empezar con un curso en Pluralsight para evitar "tirar" líneas de código a lo loco.

{% include post-helpers/image-with-caption.html url="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents]" width="75%" 
file="/assets/reactNativeSeries/Pluralsight_ReactNative.png" alt="Pluralsight ReactNative" caption="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents" %}

### Primeros pasos
Aquí de nuevo, quise tomarme mi tiempo para investigar las posibles soluciones que existen en el mercado para un desarrollo rápido de la app y encontré **Expo**
{% include post-helpers/image-with-caption.html url="https://expo.io/learn]" width="75%" 
file="/assets/reactNativeSeries/Expo.png" alt="Pluralsight ReactNative" caption="https://expo.io/learn" %}
<br>
Tras seguir la instalación e iniciar un repositorio de ejemplo (o bien probando este: [https://snack.expo.io/](https://snack.expo.io/)) pude ver cómo se puede montar un servidor local y conectarse a través de la app Expo ya sea mediante url o código QR (tu dispositivos tienen que estar en la misma red).
<br>
Además, Expo permite la creación de un tunel en caso de que quieras probar con dispositivos externos a la red, lo que viene ideal si quieres dejar tu app corriendo y probarla desde cualquier parte. Personalmente encuentro esto perfecto ya que lo puedes dejar en una raspberry como es mi caso y probarlo con amigos para tener un feedback directo. 
<br>
<br>
Después de tener un mapa mental de cómo quería mi aplicación y cuáles serían sus secciones, empecé a crear las funciones básicas como: navegación, cabecera, paleta de colores y i18n para las traducciones.
<br>
Cabe decir que encontré la documentación de react native bastante aceptable, repleta de ejemplos y que se pueden probar gracias a **Snack**. Para la navegación elegí [Material bottom tab navigator](https://reactnavigation.org/docs/material-bottom-tab-navigator) al dar un buen efecto visual y ser compatible con los iconos de MaterialCommunity.
![x-small header](/assets/reactNativeSeries/material-bottom-tabs.gif)

Y aquí llegó la sorpresa del día :D Al buscar los iconos para la navegación me topé con este repositorio en Github: [https://oblador.github.io/react-native-vector-icons/](https://oblador.github.io/react-native-vector-icons/) el cual muestra más de 3000 iconos de distintos paquetes (AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons...). Sin duda una mina de oro y un repositorio a seguir: [https://github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
<br>
Tras tener un set de iconos, pasé a crear una paleta de colores para la aplicación. Siguiendo el efecto visual de MaterialBottomTabNavigator, creé 5 colores base, los cuales apliqué de la siguiente forma:
![x-medium header](/assets/reactNativeSeries/ColorPalette.png)

De esta forma, se evita "hardcodear" los códigos hexadecimales cada vez y, además, evitar errores al copiarlos ya que son bastante similares (por ejemplo en el backgroundColor de la cabecera)


{% include post-helpers/go-to-next-post.html url="#" text="Añadiendo varios idiomas con I18N" %}
<br>