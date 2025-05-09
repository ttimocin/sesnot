# 🎙️ SesNot

SesNot, ses dosyalarınızı otomatik olarak metne çeviren, yapay zeka destekli, reklama dayalı sürdürülebilir bir mobil uygulamadır.  
Kullanıcılar kayıt yapabilir, ses dosyası yükleyebilir, reklam izleyerek dakika kazanabilir ve GPT destekli metin düzenlemeleri yapabilir.

## 🚀 Canlı Demo

🔗 [https://sesnot.com](https://sesnot.com)

---

## 🧠 Kullanılan Teknolojiler

- **Backend**: `Python`, `FastAPI`, `OpenAI Whisper`, `OpenAI GPT`, `SQLite`, `SQLAlchemy`
- **Mobil Uygulama**: `Flutter`, `GetX`, `Provider`, `Google Mobile Ads`, `Lottie`, `SharedPreferences`
- **Barındırma**: `Cloudflare Pages` (frontend), `DigitalOcean` (API)
- **Ekstra**: JWT ile API koruması, CORS, dosya yükleme, cihaz tabanlı dakika limiti, reklam sonrası kullanım artışı

---

## ⚙️ Kurulum (Backend)

```bash
# 1. Ortam oluştur
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Gereklilikleri yükle
pip install -r requirements.txt

# 3. .env dosyası oluştur
echo "OPENAI_API_KEY=your_openai_key_here" > .env

# 4. Veritabanı tablolarını oluştur
python create_tables.py

# 5. Uygulamayı çalıştır
uvicorn app:app --reload
```

---

## 📱 Ekran Görüntüsü

<img src="https://raw.githubusercontent.com/sesnot/assets/main/screenshots/sesnot-mobile-ui.png" alt="SesNot Ekran Görüntüsü" width="300"/>

---

## 👤 Geliştirici

**Taygun Timoçin**  
🌐 [tayguntimocin.com](https://tayguntimocin.com)  
📱 [LinkedIn Profilim](https://www.linkedin.com/in/tayguntimocin)
