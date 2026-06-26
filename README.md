# Rick and Morty — Çoklu Seçim Karakter Arama

[Rick and Morty API](https://rickandmortyapi.com/) üzerinden karakter arayan, **çoklu seçim** destekleyen, klavye ile gezilebilen React + TypeScript demo uygulaması.

**Canlı:** [yucel-gumus.github.io/RickAndMorty_MultiSelect](https://yucel-gumus.github.io/RickAndMorty_MultiSelect/)  
**GitHub:** [yucel-gumus/RickAndMorty_MultiSelect](https://github.com/yucel-gumus/RickAndMorty_MultiSelect)

---

## Özellikler

- Anlık arama (debounce / filtre ile API veya cache)
- **Multi-select** — birden fazla karakter seçimi ve kaldırma
- Arama teriminin sonuç adlarında **vurgulanması**
- Ok tuşları + Enter/Tab ile klavye navigasyonu
- Yükleme ve hata durumları (SweetAlert2)
- Responsive layout
- Create React App tabanlı production build + GitHub Pages

---

## Teknoloji

| Katman | Stack |
|--------|--------|
| UI | React, TypeScript |
| Bildirim | SweetAlert2 |
| Veri | Rick and Morty REST API |
| Stil | CSS modules / component CSS |

---

## Kurulum

```bash
git clone https://github.com/yucel-gumus/RickAndMorty_MultiSelect.git
cd RickAndMorty_MultiSelect
npm install
npm start
```

Tarayıcı: `http://localhost:3000`

---

## Script'ler

| Komut | Açıklama |
|-------|----------|
| `npm start` | Geliştirme sunucusu |
| `npm run build` | `build/` üretim paketi |
| `npm test` | CRA test runner |

GitHub Pages deploy: `package.json` `homepage` ve `gh-pages` workflow veya manuel `build` yükleme.

---

## Uygulama akışı

1. Kullanıcı arama kutusuna yazar
2. API'den karakter listesi çekilir / filtrelenir
3. Dropdown'da sonuçlar; seçilenler chip/tag olarak gösterilir
4. Hata veya boş sonuç için kullanıcı bilgilendirilir

---

## API notları

Rick and Morty API ücretsiz ve rate-limit'lidir; production'da aşırı istekten kaçının. Gerekirse sonuçları oturum içi cache'leyin.

---

## Lisans

MIT veya repo varsayılanı.