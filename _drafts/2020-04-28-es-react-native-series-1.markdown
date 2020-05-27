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
{% include post-helpers/image-with-caption.html url="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents]" 
file="/assets/reactNativeSeries/Pluralsight_ReactNative.png" alt="Pluralsight ReactNative" caption="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents" %}
### Primeros pasos
Aquí de nuevo, quise tomarme mi tiempo para investigar las posibles soluciones que existen en el mercado para un desarrollo rápido de la app y encontré **Expo**
{% include post-helpers/image-with-caption.html url="https://expo.io/learn]"
file="/assets/reactNativeSeries/Expo.png" alt="Pluralsight ReactNative" caption="https://expo.io/learn" %}
<br>
Tras seguir la instalación e iniciar un repositorio de ejemplo (o bien probando este: [https://snack.expo.io/](https://snack.expo.io/)) pude ver cómo se puede montar un servidor local y conectarse a través de la app Expo ya sea mediante url o código QR (tu dispositivos tienen que estar en la misma red).
<br>
En caso de que no quieras seguir la documentación, aquí el comando para generar una aplicación:
```bash
$ > expo init 

? Choose a template: expo-template-blank
? What is the name of your project? MyApp
� Using npm to install packages. You can pass --yarn to use Yarn instead.
√ Downloaded and extracted project files.
√ Installed JavaScript dependencies.
✅ Your project is ready!
To run your project, navigate to the directory and run one of the following npm commands.
- cd MyApp
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android 
- npm run ios # requires an iOS device or access to a macOS for a simulator
- npm run web
```
<br>
Además, Expo permite la creación de un tunel en caso de que quieras probar con dispositivos externos a la red, lo que viene ideal si quieres dejar tu app corriendo y probarla desde cualquier parte. Personalmente encuentro esto perfecto ya que lo puedes dejar en una raspberry como es mi caso y probarlo con amigos para tener un feedback directo.

```bash
$ > expo start --tunnel
Starting project at ${absolutePath}\MyApp
Expo DevTools is running at http://localhost:19002
Opening DevTools in the browser... (press shift-d to disable)
Starting Metro Bundler on port 19001.
Tunnel URL not found (it might not be ready yet), falling back to LAN URL.
Tunnel ready. 
exp://h7-9pd.anonymous.myapp.exp.direct:80
...
CodeQR
...
To run the app with live reloading, choose one of:
• Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
• Press a for Android emulator, or w to run on web.
• Press e to send a link to your phone with email. 
• Press s to sign in and enable more options.
Expo  Press ? to show a list of all available commands
``` 
<br>
Después de tener un mapa mental de cómo quería mi aplicación y cuáles serían sus secciones, empecé a crear las funciones básicas como: navegación, cabecera, paleta de colores y i18n para las traducciones.
<br>
Cabe decir que encontré la documentación de react native bastante aceptable, repleta de ejemplos y que se pueden probar gracias a **Snack**. Para la navegación elegí [Material bottom tab navigator](https://reactnavigation.org/docs/material-bottom-tab-navigator) al dar un buen efecto visual y ser compatible con los iconos de MaterialCommunity.
![x-small header](/assets/reactNativeSeries/material-bottom-tabs.gif)
Y aquí llegó la sorpresa del día :D Al buscar los iconos para la navegación me topé con este repositorio en Github: [https://oblador.github.io/react-native-vector-icons/](https://oblador.github.io/react-native-vector-icons/) el cual muestra más de 3000 iconos de distintos paquetes (AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons...). Sin duda una mina de oro y un repositorio a seguir: [https://github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
<br>
<br>
Tras tener un set de iconos, pasé a crear una paleta de colores para la aplicación. Siguiendo el efecto visual de MaterialBottomTabNavigator, creé 5 colores base, los cuales apliqué de la siguiente forma:
![x-medium header](/assets/reactNativeSeries/ColorPalette.png)
De esta forma, se evita "hardcodear" los códigos hexadecimales cada vez y, además, evitar errores al copiarlos ya que son bastante similares (por ejemplo en el backgroundColor de la cabecera)
<br>
<br>
Por último, en esta primera fase del programa, me resultó gracioso el cómo poder ocultar la barra superior de Android/iOS. Tras una búsqueda de más de 1 hora me topé con este trozo de código:

```java
StatusBar.setHidden(true)
```  
{% include post-helpers/go-to-post.html previous-url="#" previous-text="Añadiendo varios idiomas con I18N" next-url="#" next-text="Añadiendo varios idiomas con I18N" %}
<br>
