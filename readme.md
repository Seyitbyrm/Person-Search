# Person Search Projesi

Bu proje, kullanıcıların ad ve soyadlarına göre bir kişiyi arayabildiği bir web uygulamasıdır. Kullanıcı adını ve soyadını girdikten sonra, uygulama kayıtlı kişiler arasında arama yapar ve eşleşen bir kişi bulunursa ilgili bilgileri görüntüler.

## Özellikler

- Kullanıcı adı ve soyadıyla kişi arama
- Aranan kişinin adı, soyadı, açıklaması, fotoğrafı ve yetenekleri görüntüleme

## Kullanıcılar

Bu projede, arama yapılacak kullanıcıları `app.js` dosyasında `users` adlı bir dizi olarak bulabilirsiniz. Her kullanıcı için aşağıdaki bilgileri ekleyebilirsiniz:

```javascript
const users = [
  {
    name: "Adı Soyadı",
    photo: "resim.jpg",
    desc: "Açıklama",
    skills: ["Yetenek 1", "Yetenek 2", "Yetenek 3"]
  },
  // Diğer kullanıcılar
]; 
```

`name`: Kullanıcının adı ve soyadı
`photo`: Kullanıcının fotoğrafının dosya adı veya URL'si
`desc`: Kullanıcının açıklaması
`skills`: Kullanıcının yetenekleri (bir dizi şeklinde)
Yukarıdaki örnekteki gibi her bir kullanıcıyı users dizisine ekleyebilirsiniz. Projeyi kullanmadan önce, mevcut kullanıcıları güncelleyin veya yeni kullanıcılar ekleyin.

## Kurulum

1. Projeyi bilgisayarınıza indirin veya kopyalayın.
2. `index.html` dosyasını bir web tarayıcısıyla açın.

## Kullanım

1. Web tarayıcısında projeyi açtıktan sonra, bir kişi aramak için "Aranacak Kişinin Adını ve Soyadını Giriniz" başlıklı metin girişine adı ve soyadı yazın.
2. Ardından "Ara" düğmesine tıklayın veya klavyeden "Enter" tuşuna basın.
3. Eğer girdiğiniz ad ve soyada sahip bir kişi bulunursa, kişinin adı, soyadı, açıklaması, fotoğrafı ve yetenekleri görüntülenecektir.
4. Sonuç bulunamazsa, bir uyarı mesajı görüntülenir.

## Geliştirme

Bu projeyi geliştirmek veya özelleştirmek isterseniz, aşağıdaki adımları izleyebilirsiniz:

- `index.html` dosyasında yapılan değişiklikler, kullanıcı arayüzünü etkiler.
- `app.js` dosyası, kişi arama ve sonuçları işleme işlemlerini içerir. Burada değişiklikler yaparak yeni özellikler ekleyebilirsiniz.
- `style.css` dosyası, görüntüleme stilini kontrol eder. CSS değişiklikleri yaparak kullanıcı arayüzünü özelleştirebilirsiniz.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, aşağıdaki adımları izleyebilirsiniz:

1. Bu depoyu (`repository`) forklayın.
2. Kendi yerel bilgisayarınıza klonlayın.
3. Yeni bir `branch` oluşturun: `git checkout -b benim-yeniliklerim`.
4. Yaptığınız değişiklikleri (`commit`) kaydedin: `git commit -m 'Yeniliklerim'`.
5. Forkladığınız depoya (`repository`) pushlayın: `git push origin benim-yeniliklerim`.
6. Bir pull talebi (`pull request`) oluşturun.

Herhangi bir hata veya öneri için "Issues" bölümünden bildirim yapabilirsiniz. Katkıların için şimdiden teşekkürler!
