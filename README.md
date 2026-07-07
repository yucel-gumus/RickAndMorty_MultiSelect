# 🧪 Rick and Morty (Multi-Select Character Autocomplete)

Rick and Morty; popüler Rick and Morty API'sini kullanarak karakterler arasında hızlı aramalar gerçekleştiren, seçilen karakterleri etiketler (chips/tags) halinde gösteren ve tamamen klavye ile kontrol edilebilen, **React & TypeScript** tabanlı gelişmiş bir çoklu seçim (multi-select autocomplete) bileşeni uygulamasıdır.

---

## 🌟 Öne Çıkan Özellikler

* 🔍 **Debounced Arama:** Kullanıcı yazarken API'yi yormamak için debouncing mekanizması kullanılmıştır. İstekler sadece yazma işlemi durduğunda gönderilir.
* ⌨️ **Tam Klavye Navigasyonu (Accessible Controls):** 
  * `Aşağı/Yukarı Ok` tuşları ile arama sonuçları listesinde gezinebilme.
  * `Enter` tuşu ile seçili karakteri listeye ekleme/çıkarma.
  * `BackSpace` tuşu ile en son seçilen etiketi silme.
  * `Escape` tuşu ile dropdown listesini kapatma.
* 🖍️ **Semantik Metin Vurgulama (Query Highlighting):** Arama terimi, gelen sonuçlardaki karakter isimleri içerisinde aranır ve eşleşen kısımlar CSS ile kalınlaştırılarak (`<strong>` etiketleri ile) kullanıcıya görsel geri bildirim verilir.
* 🏷️ **Etiket (Chip) Yönetimi:** Seçilen her karakter, resmi ve ismi ile birlikte birer etiket (chip) olarak girdi alanında konumlanır. Yanındaki "x" butonu ile listeden kaldırılabilir.
* 📤 **Kolay Dağıtım (GitHub Pages):** Projenin `gh-pages` entegrasyonu sayesinde derlenmesi ve GitHub Pages'e yüklenmesi otomatikleştirilmiştir.

---

## 🏗️ Veri Akışı ve Kontroller

```
[ Kullanıcı Yazmaya Başlar ] ──► [ Debouncing Delay (300ms) ] ──► [ Rick and Morty REST API ]
                                                                             │
                                                                       (JSON Yanıtı)
                                                                             ▼
[ Klavye Dinleyicileri ] ◄──(Ok Tuşları / Enter)─── [ Dropdown Listesi (Vurgulanmış Arama) ]
      │
      ▼
[ Etiketler (Chips) Güncellenir ] ──► [ Seçimleri Kaydet / Temizle ]
```

---

## 🛠️ Teknoloji Stack

* **Frontend:** React 18, TypeScript 4, CSS Modules.
* **Veri Kaynağı:** Rick and Morty REST API (`https://rickandmortyapi.com/api/character`).
* **Hata Bildirimleri:** SweetAlert2 (API bağlantı hataları durumunda kullanıcıyı bilgilendirir).
* **Dağıtım Pipeline:** gh-pages.

---

## 📂 Proje Klasör Yapısı

```
RickAndMorty_MultiSelect/
├── src/
│   ├── components/
│   │   ├── MultiSelect/      # Çoklu seçim bileşeni, dropdown, etiket (chip) yönetimi
│   │   └── ui/               # SweetAlert2 veya yardımcı ortak bileşenler
│   ├── App.tsx               # Ana React bileşeni
│   ├── index.tsx
│   └── setupTests.ts
├── public/
├── tsconfig.json
└── package.json              # gh-pages deploy scriptleri ve bağımlılıklar
```

---

## 🚀 Kurulum ve Yerel Çalıştırma

### 1. Bağımlılıkları Yükleyin
```bash
git clone https://github.com/yucel-gumus/RickAndMorty_MultiSelect.git
cd RickAndMorty_MultiSelect
npm install
```

### 2. Uygulamayı Başlatın
```bash
npm start
```
Uygulama `http://localhost:3000` adresinde yerel sunucuda başlayacaktır.

### 3. GitHub Pages Dağıtımı (Deploy)
```bash
# Kodları derler ve package.json içinde tanımlı homepage adresine yükler
npm run deploy
```

---

## 🔗 Canlı Bağlantılar
* **Canlı Demo:** [https://yucel-gumus.github.io/RickAndMorty_MultiSelect/](https://yucel-gumus.github.io/RickAndMorty_MultiSelect/)
* **Geliştirici LinkedIn:** [https://linkedin.com/in/yucel-gumus](https://linkedin.com/in/yucel-gumus)