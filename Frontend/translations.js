const translations = {
    en: {
        'nav.features': 'Features',
        'nav.testimonials': 'Testimonials',
        'nav.pricing': 'Pricing',
        'nav.signup': 'Sign Up',
        'hero.title': 'From Voice to Text, Effortlessly.',
        'hero.subtitle': 'SesNot uses cutting-edge AI to transcribe your voice notes, meetings, and ideas into polished text in minutes. Boost your productivity and never miss a detail.',
        'hero.cta': 'Get Started for Free',
        'features.title': 'Why Choose SesNot?',
        'features.speed.title': 'Lightning-Fast Transcription',
        'features.speed.desc': 'Convert hours of audio into text within minutes with our advanced AI.',
        'features.accuracy.title': 'Unmatched Accuracy',
        'features.accuracy.desc': 'Experience industry-leading transcription accuracy, even with background noise or multiple speakers.',
        'features.workflow.title': 'Seamless Workflow',
        'features.workflow.desc': 'Easily upload audio files or record directly within the app. Export in various formats.',
        'features.ai.title': 'AI-Powered Editing (Coming Soon!)',
        'features.ai.desc': 'From idea to polished post in minutes. Our upcoming AI will help refine your transcriptions into ready-to-publish content.'
    },
    tr: {
        'nav.features': 'Özellikler',
        'nav.testimonials': 'Referanslar',
        'nav.pricing': 'Fiyatlandırma',
        'nav.signup': 'Kayıt Ol',
        'hero.title': 'Sesten Metne, Zahmetsizce.',
        'hero.subtitle': 'SesNot, yapay zeka teknolojisi ile ses notlarınızı, toplantılarınızı ve fikirlerinizi dakikalar içinde düzenli metne dönüştürür. Verimliliğinizi artırın ve hiçbir detayı kaçırmayın.',
        'hero.cta': 'Ücretsiz Başlayın',
        'features.title': 'Neden SesNot?',
        'features.speed.title': 'Yıldırım Hızında Dönüşüm',
        'features.speed.desc': 'Gelişmiş yapay zekamız ile saatlerce süren ses kayıtlarını dakikalar içinde metne dönüştürün.',
        'features.accuracy.title': 'Eşsiz Doğruluk',
        'features.accuracy.desc': 'Arka plan gürültüsü veya birden fazla konuşmacı olsa bile, sektörde öncü dönüşüm doğruluğunu deneyimleyin.',
        'features.workflow.title': 'Kesintisiz İş Akışı',
        'features.workflow.desc': 'Ses dosyalarını kolayca yükleyin veya doğrudan uygulama içinde kaydedin. Çeşitli formatlarda dışa aktarın.',
        'features.ai.title': 'Yapay Zeka Destekli Düzenleme (Çok Yakında!)',
        'features.ai.desc': 'Fikirden düzenlenmiş içeriğe dakikalar içinde. Yakında gelecek yapay zekamız, dönüşümlerinizi yayına hazır içeriğe dönüştürmenize yardımcı olacak.'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

// Sayfa yüklendiğinde varsayılan dili ayarla
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en';
    changeLanguage(defaultLang);
}); 