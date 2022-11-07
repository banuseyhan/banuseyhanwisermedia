Öncelikle react-native kütüphanesiyle birlikte projemi kurdum.
Screens klasörü altında oluşturacağım screen i oluşturup app.js in içinden navigation yapısını kurup çağırdım. 
Screen ı oluşturduktan sonra screen i componentlere böldüm ve ilk componenetim olan ana header i yani top navbar ı  Navigation yapısıyla oluşturdum.
Componenetleri parçalayınca aslında ana componentim olması gerektiğini düşünüp Card.js i oluşturdum.
Card componentinin ilk parçası olan header ı oluşturdum. Önce json data olarak yazdığım  dataları daha sonra dummyjson dan istediğim datalara ulaşınca axios ile çağırdım ve services klasörünü oluşturup. dummyjson dökümantasyonuna göre servisleri çağırdım. {item } olarak componentlerimin içine ekledim.
hedarın ... kısmını modal olarak yaptım. react native modal kütüphanesini kullanarak oluşturdum ve bu modalı header componenetimimn içinden çağırdım.
PostBody componenetini oluşturudum. görsel olarak video linkini thumblink olarak video id sini tanımlayıp oluşturdum. thumnblink i youtube linkine yönlendirmesi için react native linking kütüphanesini kullanarak yönlendirdim. Ayrıca paginitaion kısmını infinity scroll ile çözdüm.
card ın içindeki tag ler  oluşturup footer.js in içinden çağırdım. ve en sonunda tüm componentlerimi ana componentlerim içinden çağırdım.
screensshot klasöründe uygulamaya ait görseller bulabilirsiniz. 
styles kısmını ayrı olarak klasörlemedim tek sayfada çalışıtğım için ve siz review yaparken herşeyi birarada görebilirseniz sizin için daha kolay olur diye düşündüm.
Çok şey öğrendiğim bir case oldu. Bu fırsatı verdiğiniz için teşekkür ederim.