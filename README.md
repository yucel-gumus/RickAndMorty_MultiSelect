# Rick and Morty Çoklu Seçim Karakter Arama

Bu proje, kullanıcıların Rick and Morty karakterlerini aramasına ve arama sonuçlarından birden fazla karakter seçmesine olanak tanıyan, TypeScript ile oluşturulmuş bir React uygulamasıdır.

## Özellikler

*   **Karakter Arama:** Rick and Morty evreninden karakterleri arayın.
*   **Çoklu Seçim:** Birden fazla karakter seçin ve seçimini kaldırın.
*   **Dinamik Sonuçlar:** Siz yazdıkça arama sonuçları dinamik olarak güncellenir.
*   **Vurgulama:** Arama sorgusu, sonuçlardaki karakter adları içinde vurgulanır.
*   **Klavye Navigasyonu:** Ok tuşlarını kullanarak arama sonuçlarında gezinin ve Enter/Tab ile seçim yapın.
*   **Hata Yönetimi:** Veri çekme hataları için uyarılar gösterir.
*   **Yüklenme Durumu:** Veri çekilirken bir yüklenme göstergesi gösterir.
*   **Duyarlı Tasarım:** Temel duyarlı tasarım.

## Kullanılan Teknolojiler

*   React
*   TypeScript
*   React Select (veya benzer özel implementasyon)
*   SweetAlert2 (bildirimler için)
*   CSS (stil için)
*   Rick and Morty API (karakter verileri için)

## Kullanılabilir Komutlar

Proje dizininde şu komutları çalıştırabilirsiniz:

### `npm install`

Gerekli bağımlılıkları yükler.

### `npm start`

Uygulamayı geliştirme modunda çalıştırır.\
Tarayıcıda görüntülemek için [http://localhost:3000](http://localhost:3000) adresini açın.

Düzenleme yaptığınızda sayfa yeniden yüklenir.

### `npm run build`

Uygulamayı üretim için `build` klasörüne derler.\
React'ı üretim modunda doğru şekilde paketler ve en iyi performans için derlemeyi optimize eder.

## Canlı Demo

Uygulamanın GitHub Pages üzerinde dağıtılmış canlı demosunu buradan görüntüleyebilirsiniz:

[https://yucel-gumus.github.io/RickAndMorty_MultiSelect/](https://yucel-gumus.github.io/RickAndMorty_MultiSelect/)
