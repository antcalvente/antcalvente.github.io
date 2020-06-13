---
layout: post
title:  "Building a react native app from scratch!"
date:   2020-04-28 08:55:00 +0200
categories: posts
comments: true
lang: en
link: /posts/2020/04/28/en-react-native-series-1.html
altLangLink: /posts/2020/04/28/es-react-native-series-1.html
readTime: 5
categoryList: react, reactnative, native
---
![x-large header](/assets/reactNativeSeries/ReactNative.png)

This experiment started one boring evening during COVID lockdown trying to think what I could do.
For quite some long time I have been thinking about one specific idea that I would like to convert and transform into an application but I wasn't able to find the appropriate time to start it.
One of the reasons is that I knew the amount of effort I would need to dedicate and it wouldn't be easy as side project (working 42h/w). However, I was looking for a technical challenge.
<br>
<br>
That's why I decided to start this journey and tell this story from a developer point of view that developed a React Native application for the first time.
<br>
<br>
One of the main reasons why I chose React Native was its ability to be cross-platform, as I worked with Ionic/Cordova, but as well because I had some knowledge in React for frontend applications.
First step before starting to write lines of code like a maniac, do some training in Pluralsight:
{% include post-helpers/image-with-caption.html url="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents]"
file="/assets/reactNativeSeries/Pluralsight_ReactNative.png" alt="Pluralsight ReactNative" caption="https://app.pluralsight.com/library/courses/react-native-fundamentals/table-of-contents" %}
### First steps
Here again, I blocked some time in order to investigate the possible solutions that we have out in the market for a quick development process and suddenly I found **Expo**
{% include post-helpers/image-with-caption.html url="https://expo.io/learn]"
file="/assets/reactNativeSeries/Expo.png" alt="Expo main page" caption="https://expo.io/learn" %}
<br>
Once the installation was done and one example repo was running (for example: [https://snack.expo.io/](https://snack.expo.io/)) I could see how to run a local server and how to connect to it. In fact, there're various options like using a QR code or copying the URL (you need to have your devices on the same network).
<br>
In case you don't want to open the documentation, here the command to generate an app:
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
Moreover, Expo allows the creation of a tunnel in case you want to test your application with devices that are not in the same network, which is perfect if you want to let your app running and test it from anywhere. Personally, I found this ideal in case you have a raspberry for example and ask some friends to test it for a direct feedback.
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
Next thing on the list: define the sections and how everything should connect. I started to create then the basic functionalities such as: navigation, header, colors scheme and i18n for the different languages.
<br>
I was quite surprised actually from React Native's documentation as it's full of examples that you can live test with **Snack**. For the navigation I chose [Material bottom tab navigator](https://reactnavigation.org/docs/material-bottom-tab-navigator) as it was providing a nice visual effect and fully compatible with MaterialCommunity icons.
![x-small header](/assets/reactNativeSeries/material-bottom-tabs.gif)
And here it came the surprise of the day :D After looking for some icons manually I found this Github repo:  [https://oblador.github.io/react-native-vector-icons/](https://oblador.github.io/react-native-vector-icons/) which contains more than 3000 icons from different packages (AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, etc.).
<br>
<br>
Then, once the icons and the bottom menu was working I started working on the color scheme. Following the effect of MaterialBottomTabNavigator, I created 5 basic colors:
![x-medium header](/assets/reactNativeSeries/ColorPalette.png)
This way, you avoid hardcoding the hexadecimal values everywhere (as well as preventing copy/paste issues as they're quite similar)
<br>
<br>
Last but not least, in this first phase I was blocked for some quite long time regarding the top navigation bar of Android/iOS. After searching for more than 1 hour (bear in mind that I haven't developed a mobile app in years) I found this piece of code:

```java
StatusBar.setHidden(true)
```  
<br>
{% include post-helpers/go-to-post.html previous-url="#" previous-text="Adding languages with I18N" next-url="#" next-text="Adding languages with I18N" %}
<br>
