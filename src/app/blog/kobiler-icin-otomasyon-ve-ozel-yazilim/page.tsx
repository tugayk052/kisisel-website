import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

const post = blogPosts.find(
  (p) => p.slug === "kobiler-icin-otomasyon-ve-ozel-yazilim",
)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: [
    "KOBİ için otomasyon ve özel yazılım",
    "özel yazılım geliştirme maliyeti",
    "freelance yazılımcı vs yazılım ajansı",
    "yapay zeka destekli yazılım geliştirme",
    "n8n otomasyon KVKK",
  ],
  alternates: {
    canonical: `/blog/${post.slug}`,
  },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: `${site.url}/blog/${post.slug}`,
    publishedTime: post.date,
  },
};

const toc = [
  { href: "#otomasyon-mu-ozel-yazilim-mi", label: "Otomasyon mu, Özel Yazılım mı?" },
  {
    href: "#freelance-mi-ajans-mi-ucuncu-bir-yol",
    label: "Freelance mı, Ajans mı? Üçüncü Bir Yol",
  },
  { href: "#2026-maliyetleri", label: "2026 Maliyetleri" },
  {
    href: "#otomasyon-projeleri-neden-basarisiz-olur",
    label: "Otomasyon Projeleri Neden Başarısız Olur?",
  },
  { href: "#kvkk-ve-veri-gizliligi", label: "KVKK ve Veri Gizliliği" },
  {
    href: "#dogru-ortagi-secerken-sorulacak-6-soru",
    label: "Doğru Ortağı Seçerken Sorulacak 6 Soru",
  },
];

const faq = [
  {
    q: "KOBİ'ler için özel yazılım geliştirme maliyeti ortalama ne kadar tutar?",
    a: "Basit bir web tabanlı sistem 2026 fiyatlarıyla 80.000-250.000 TL, bir mobil uygulama ise 60.000-350.000 TL aralığında değişir. Her harici entegrasyon (e-fatura, ödeme, kargo) ek olarak 5.000-20.000 TL'ye mal olur.",
  },
  {
    q: "Freelance yazılımcı yerine yapay zeka destekli bağımsız yazılımcı seçmek neden mantıklı?",
    a: "Klasik freelancer riski olan yavaş yanıt ve tek nokta arızası, AI destekli araçlar üretim hızını artırınca azalır. Ajans kalitesine yakın bir çıktı, ajans fiyatının yaklaşık yarısında bir bütçeyle mümkün olur.",
  },
  {
    q: "Otomasyon için n8n mi, Zapier mi tercih edilmeli?",
    a: "Veriyi kendi sunucunuzda tutmak ve KVKK uyumunu güçlendirmek öncelikliyse n8n öne çıkar; hız ve hazır entegrasyon sayısı öncelikliyse Zapier veya Make daha uygun düşer.",
  },
  {
    q: "Otomasyon projesi ne kadar sürede hayata geçer?",
    a: "Tek bir iş akışının otomasyonu genellikle birkaç gün ile iki hafta arasında tamamlanır. Çok sistemli bir özel yazılım projesi ise birkaç aya yayılır.",
  },
  {
    q: "KOBİ'ler otomasyon araçlarına geçerken KVKK'ya nasıl uyum sağlar?",
    a: "Müşteri verisinin hangi sunucuda işlendiğini netleştirmek, mümkünse self-hosted çözümleri tercih etmek ve veri işleme sözleşmelerini gözden geçirmek KVKK uyumunun temelini oluşturur.",
  },
];

const p = "mt-4 leading-relaxed text-zinc-400";
const h2 = "mt-12 scroll-mt-28 text-2xl font-bold text-white sm:text-3xl";
const ul = "mt-4 ml-5 list-disc space-y-2 text-zinc-400";
const ol = "mt-4 ml-5 list-decimal space-y-2 text-zinc-400";
const link = "text-accent underline underline-offset-4 hover:text-accent/80";
const strong = "font-semibold text-white";

export default function BlogPostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="flex-1 py-28 pt-40">
        <article className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-zinc-500">
            {new Date(post.date).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime}
          </p>

          <p className={p}>
            TÜİK&apos;in 2025 raporuna göre işletmelerde yapay zeka kullanım
            oranı 2021&apos;deki yüzde 2,7&apos;den yüzde 7,5&apos;e çıktı.
            Küçük işletmelerde bu oran hâlâ yüzde 6,6&apos;da duruyor ve büyük
            şirketlerin gerisinde kalıyor (
            <a
              className={link}
              href="https://www.forbes.com.tr/teknoloji/tuik-ilk-kez-acikladi-yapay-zekada-turkiye-nin-karnesi"
            >
              Forbes Türkiye
            </a>
            ).
          </p>
          <p className={p}>
            Bu rehber, <strong className={strong}>KOBİ için otomasyon ve
            özel yazılım</strong> kararını netleştiriyor. Hangi aracı
            seçeceğinizi, kime iş vereceğinizi ve ne kadar bütçe
            ayıracağınızı adım adım gösteriyor. KOBİ&apos;ler artık bu kararı
            ertelediğinde rakiplerine karşı zaman kaybediyor.
          </p>
          <p className={p}>Şu üç soruya net cevap bulacaksınız:</p>
          <ul className={ul}>
            <li>Otomasyon aracı mı, özel yazılım mı ihtiyacınıza uyuyor</li>
            <li>
              Freelance yazılımcı, ajans ve yapay zeka destekli bağımsız
              yazılımcı arasındaki gerçek fark
            </li>
            <li>2026 fiyatlarıyla gerçekçi bir bütçe aralığı</li>
          </ul>

          <nav className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase">
              İçindekiler
            </p>
            <ul className="mt-4 space-y-2">
              {toc.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <h2 id="otomasyon-mu-ozel-yazilim-mi" className={h2}>
            Otomasyon mu, Özel Yazılım mı?
          </h2>
          <p className={p}>
            <strong className={strong}>Otomasyon</strong> ve{" "}
            <strong className={strong}>özel yazılım geliştirme</strong>{" "}
            farklı ihtiyaçlara cevap verir. Otomasyon, var olan sistemler
            arasında (n8n, Zapier, Make gibi araçlarla) veri akışı kurar.
            Özel yazılım ise işletmenize özgü bir uygulamayı sıfırdan
            tasarlar.
          </p>
          <p className={p}>
            Fatura kesme, e-posta hatırlatma veya sipariş bildirimi gibi
            tekrar eden işler için no-code otomasyon araçları yeterli gelir.
            Bu araçlar 5.000&apos;den fazla uygulamayı entegre eder ve aylık
            20-50 USD gibi düşük bir bütçeyle çalışır.
          </p>
          <p className={p}>
            Buna karşılık, hiçbir standart sistemin karşılamadığı özel bir
            süreciniz varsa (örneğin sektörünüze özgü bir stok takip mantığı)
            özel yazılım devreye girer. Karar kriteri nettir: standart bir
            araç ihtiyacınızın yüzde 80&apos;ini karşılıyorsa otomasyon,
            karşılamıyorsa özel yazılım doğru seçimdir.
          </p>
          <p className={p}>
            <strong className={strong}>
              KOBİ için otomasyon ve özel yazılım
            </strong>{" "}
            arasında seçim yaparken önce mevcut sistemlerinizi listeleyin. Bu
            envanter, hangi yatırımın önceliği taşıdığını hızla ortaya koyar.
            Envanter çıkarmak genellikle yarım günden az bir zaman alır ve
            ekibinizin tamamına danışmanız gerekir.
          </p>

          <h2 id="freelance-mi-ajans-mi-ucuncu-bir-yol" className={h2}>
            Freelance mı, Ajans mı? Üçüncü Bir Yol
          </h2>
          <p className={p}>
            Bir yazılım ajansı aynı iş için freelance bir yazılımcıdan yüzde
            50 ila 100 daha yüksek teklif verir. Ajans, proje yöneticisi,
            tasarımcı ve ofis gibi sabit maliyetleri fiyata ekler.
          </p>
          <p className={p}>
            Freelance çalışmanın da bilinen bir riski vardır: yazılımcı
            hastalanırsa, başka bir projeye öncelik verirse veya işi
            bırakırsa proje durma noktasına gelir. Tüm teknik bilgi tek
            kişide toplandığı için bu &quot;tek nokta arızası&quot; kritik
            projelerde ciddi bir kırılganlık yaratır.
          </p>
          <p className={p}>
            TÜİK verileri, yapay zekayı henüz kullanmayan işletmelerin yüzde
            74,2&apos;sinin uzmanlık eksikliğini, yüzde 67,4&apos;ünün ise
            maliyeti engel olarak gösterdiğini ortaya koyuyor.{" "}
            <strong className={strong}>
              Yapay zeka destekli bağımsız yazılımcı
            </strong>{" "}
            modeli tam bu iki engeli birlikte çözer: AI destekli geliştirme
            araçları, tek kişilik bir ekibin ajans hızına yakın bir teslimat
            temposu tutturmasını sağlar — üstelik ajans maliyetinin çok
            altında bir fiyatla.
          </p>
          <p className={p}>
            Net kapsamlı projeler için (bir web sitesi, bir mobil uygulama,
            bir otomasyon iş akışı) bu üçüncü yol; ajansın güvenilirliğini
            freelance&apos;ın uygun maliyetiyle birleştiren pratik bir orta
            nokta sunar.
          </p>

          <h2 id="2026-maliyetleri" className={h2}>
            2026 Maliyetleri
          </h2>
          <p className={p}>
            Bütçe planlaması için 2026 Türkiye piyasasından gerçekçi rakamlar
            aşağıda yer alıyor:
          </p>
          <ul className={ul}>
            <li>
              <strong className={strong}>Basit web uygulaması</strong>{" "}
              (yönetim paneli, randevu sistemi): 80.000-250.000 TL
            </li>
            <li>
              <strong className={strong}>Mobil uygulama</strong> (iOS/Android):
              60.000-350.000 TL, proje kapsamına göre değişir
            </li>
            <li>
              <strong className={strong}>Harici entegrasyon</strong>{" "}
              (e-fatura, kargo, ödeme sistemi): entegrasyon başına
              5.000-20.000 TL
            </li>
            <li>
              <strong className={strong}>Aylık bakım sözleşmesi</strong>:
              2.500-8.000 TL, öncelikli destek ve güvenlik taramasını kapsar
            </li>
            <li>
              <strong className={strong}>Saatlik geliştirme ücreti</strong>:
              bölgeye ve deneyime göre 60-500 TL/saat arasında değişir
            </li>
          </ul>
          <p className={p}>
            Bu rakamlar kapsam, entegrasyon sayısı ve kullanılan teknolojiye
            göre önemli ölçüde farklılık gösterir. Net bir teklif almadan
            önce ihtiyaç analizini netleştirmek, sonradan çıkacak
            sürprizlerin önüne geçer.
          </p>
          <p className={p}>
            <strong className={strong}>
              KOBİ için otomasyon ve özel yazılım
            </strong>{" "}
            bütçesini planlarken tek seferlik geliştirme maliyetinin yanı
            sıra aylık bakım kalemini de hesaba katmak gerekir. Çoğu işletme
            bu aylık kalemi unutur ve ilk yıl sonunda bütçesini aşar.
          </p>

          <h2 id="otomasyon-projeleri-neden-basarisiz-olur" className={h2}>
            Otomasyon Projeleri Neden Başarısız Olur?
          </h2>
          <p className={p}>
            Otomasyon ve özel yazılım projelerinde belirli hatalar sürekli
            tekrar eder. Bu hataları önceden bilmek, bütçenizi ve zamanınızı
            korumanın en ucuz yoludur.
          </p>
          <p className={p}>En sık görülen sorunlar şunlardır:</p>
          <ol className={ol}>
            <li>
              <strong className={strong}>Süreç analizi eksikliği</strong> —
              mevcut iş akışını detaylı incelemeden otomasyona geçmek
            </li>
            <li>
              <strong className={strong}>Kapsamın çok büyük tutulması</strong>{" "}
              — tüm süreci tek seferde otomatikleştirmeye çalışmak
            </li>
            <li>
              <strong className={strong}>Entegrasyon sorunları</strong> —
              yeni otomasyonu mevcut sistemlerden bağımsız tasarlamak
            </li>
            <li>
              <strong className={strong}>Veri kalitesi sorunları</strong> —
              kaynak verinin hatalı veya eksik olması
            </li>
            <li>
              <strong className={strong}>Eğitim eksikliği</strong> — ekibe
              yeni sistemi doğru kullanması için yeterli eğitim vermemek
            </li>
          </ol>
          <p className={p}>
            Bu hataların ortak paydası açıktır: teknolojiye değil sürece
            odaklanmak gerekir. İyi bir yazılım ortağı, kod yazmadan önce
            sürecinizi anlamaya zaman ayırır ve ilk toplantıda size hazır bir
            çözüm değil, doğru soruları getirir.
          </p>
          <p className={p}>
            Küçük bir pilot modülle başlamak, bu hataların çoğunu erken
            aşamada gün yüzüne çıkarır. Tüm sürece yayılmadan önce tek bir iş
            akışını test etmek, hem bütçeyi hem güveni korur.
          </p>

          <h2 id="kvkk-ve-veri-gizliligi" className={h2}>
            KVKK ve Veri Gizliliği
          </h2>
          <p className={p}>
            Bulut tabanlı otomasyon araçları (Zapier, Make) müşteri verinizi
            çoğunlukla yurt dışındaki sunucularda işler. Birçok KOBİ bu
            detayı fark etmez ve bu durum KVKK açısından risk taşır.
          </p>
          <p className={p}>
            <a className={link} href="https://n8n.io">
              n8n
            </a>{" "}
            gibi self-hosted (kendi sunucunuzda barındırılan) otomasyon
            araçları veriyi tamamen sizin kontrolünüzde tutar. Kurulum
            sonrası veri sunucunuzdan dışarı çıkmaz, bu da uyum sürecini
            büyük ölçüde kolaylaştırır.
          </p>
          <p className={p}>
            Fiyatlandırma açısından da fark belirgindir: bulut araçları
            genellikle işlem başına ücret alır ve hacim arttıkça fatura
            büyür. Self-hosted kurulumda sınırı kiraladığınız sunucunun gücü
            belirler — aylık 200-500 TL sunucu maliyetiyle sınırsız işlem
            yaparsınız.
          </p>

          <h2 id="dogru-ortagi-secerken-sorulacak-6-soru" className={h2}>
            Doğru Ortağı Seçerken Sorulacak 6 Soru
          </h2>
          <p className={p}>Bir yazılım ortağıyla anlaşmadan önce şu soruları sorun:</p>
          <ol className={ol}>
            <li>Projeme benzer kapsamda daha önce hangi işleri tamamladınız?</li>
            <li>Verilerim hangi sunucuda, hangi ülkede işlenecek?</li>
            <li>Teslimattan sonra bakım ve destek nasıl sağlanıyor?</li>
            <li>
              Kapsam değişirse (ek özellik, ek entegrasyon) fiyatlandırma
              nasıl işliyor?
            </li>
            <li>
              Projeyi tek kişi mi yürütüyor, ekip mi? Tek kişiyse yedek plan
              nedir?
            </li>
            <li>
              Yapay zeka destekli araçlar kullanıyor musunuz, bu teslimat
              süresini nasıl etkiliyor?
            </li>
          </ol>
          <p className={p}>
            Bu sorulara net cevap alamadığınız bir ortakla ilerlemeden önce
            bir kez daha düşünün. Referans istemekten çekinmeyin; önceki
            müşterilerle kısa bir görüşme, çoğu riski daha teklif aşamasında
            ortaya çıkarır.
          </p>
          <p className={p}>
            Kapsamı net, teslim tarihi belirli ve tek bir sorumlunun
            yönettiği projelerde bu altı soru, seçim sürecinizi saatler
            içinde netleştirir. Büyük ve çok paydaşlı projelerde ise ek
            olarak referans kontrolü ve pilot bir modül talep etmek doğru
            olur.
          </p>
          <p className={p}>
            Web sitesi, mobil uygulama, otomasyon ve yapay zeka entegrasyonu
            ihtiyaçlarınız için{" "}
            <Link className={link} href="/#contact">
              iletişime geçin
            </Link>{" "}
            ve projenizi birlikte netleştirelim. Otomasyon ve yazılım
            geliştirme üzerine yazdığım diğer içerikleri{" "}
            <Link className={link} href="/blog">
              blog sayfasında
            </Link>{" "}
            bulursunuz.
          </p>

          <h2 className={h2}>Sonuç</h2>
          <p className={p}>
            Otomasyon ve özel yazılım, büyük şirketlere özgü bir lüks değil,
            KOBİ&apos;lerin rekabetçi kalması için gerekli bir yatırımdır.
            Doğru araç seçimi, doğru ortak seçimi ve gerçekçi bir bütçe planı
            bu yatırımın geri dönüşünü belirler.
          </p>
          <p className={p}>
            KVKK uyumu ve veri gizliliği gibi teknik detayları göz ardı
            etmemek, ileride çıkabilecek hukuki riskleri baştan önler. Doğru
            sorularla ilerleyen bir işletme, bu süreci hem daha hızlı hem
            daha güvenli tamamlar.{" "}
            <strong className={strong}>
              KOBİ için otomasyon ve özel yazılım
            </strong>{" "}
            yatırımı, bugün atılan doğru bir adımla yarının rekabet
            avantajına dönüşür. Bu rehberdeki kriterleri kontrol listesi
            olarak kullanan bir işletme sahibi, ilk teklif görüşmesine çok
            daha hazırlıklı girer.
          </p>

          <h2 className={h2}>Sıkça Sorulan Sorular</h2>
          <div className="mt-4 space-y-6">
            {faq.map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-white">{item.q}</p>
                <p className="mt-2 leading-relaxed text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
