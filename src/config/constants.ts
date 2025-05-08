import {
  AddressDataProps,
  ContactDetailsProps,
  MenuItemProps,
  ServiceDataProps,
  SocialMediaDataProps,
} from "@/types/data";
import CreatingWebsite from "@/components/contentChildren/creating-website";
import { CreatingWebsiteDataProps } from "@/types/components";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
} from "@tabler/icons-react";

export const MENU_DATA: MenuItemProps[] = [
  {
    title: "Xidmətlərimiz",
    link: "/services",
  },
  {
    title: "Layihələr",
    link: "/",
  },
  {
    title: "Analitika",
    link: "/",
  },
  {
    title: "Bloq",
    link: "/",
  },
  {
    title: "Biz kimik?",
    link: "/",
  },
];

export const SOCIAL_MEDIA_DATA: SocialMediaDataProps[] = [
  {
    link: "https://www.instagram.com/birainy_az/",
    icon: IconBrandInstagram,
  },
  {
    link: "https://www.linkedin.com/company/birainy/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.tiktok.com/@birainy",
    icon: IconBrandTiktok,
  },
];

export const ADDRESS_DATA: AddressDataProps[] = [
  {
    title: "Azərbaycan",
    description: "Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010",
  },
  {
    title: "Kanada",
    description: "Edmonton, Alberta",
  },
  {
    title: "Gürcüstan",
    description: "Tbilisi, Gürcüstan",
  },
];

export const CONTACT_DETAILS_DATA: ContactDetailsProps[] = [
  {
    title: "+994 12 488 66 54",
    href: "tel:+994124886654",
  },
  {
    title: "+994 77 613 13 17",
    href: "tel:+994776131317",
  },
  {
    title: "info@birainy.com",
    href: "mailto:info@birainy.com",
  },
];

export const SERVICES_DATA: ServiceDataProps[] = [
  {
    id: "1",
    title: "Proqram təminatı",
    path: "/services?id=1&tab=1",
    childrens: [
      {
        tab: "1",
        title: "Proqram təminatı",
        path: "/services?id=1&tab=1",
        details: {
          title: "Proqram təminatı",
          description:
            "BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür. Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.",
          image: "/webp/software.webp",
        },
      },
      {
        tab: "2",
        title: "Sürətli Axtarış Sistemi",
        path: "/services?id=1&tab=2",
        details: {
          title: "Sürətli Axtarış Sistemi",
          description:
            "Şirkətdaxili və xarici proseslərin həyata keçirilməsi, həmçinin əməkdaşların şirkət daxilindəki sənədləri avtomatlaşdırılmış şəkildə axtarış edib, rahatlıqla yerləşdirib, toplaya və göndərə bildikləri OCR alqoritmi ilə hazırlanmış Sürətli Axtarış Sistemi.",
          video: "https://www.youtube.com/embed/YRTe_sJd_2A",
        },
      },
      {
        tab: "3",
        title: "CRM və ERP",
        path: "/services?id=1&tab=3",
        details: {
          title: "CRM və ERP",
          description:
            "CRM sistemi ilə şirkətlərin qazandığı üstünlüklər: Rutin tapşırıqların avtomatlaşdırılması; Müştərilərin davranışı haqqında anlayışlar; Müştəriləri ilə güclü, davamlı əlaqələr qurmaq üçün qarşılıqlı əlaqələr. ERP sistemi şirkətlər üçün təmin edir: Əsas biznes proseslərini mərkəzləşdirilmiş şəkildə idarə olunmasını; Dəqiq və real vaxt rejimində məlumatı; Məhsuldarlığın və səmərəliliyin yüksəldilməsini; Əməliyyat xərclərinin azaldılmasını.",
          video: "https://www.youtube.com/embed/qUpIJZT0V4A",
        },
      },
      {
        tab: "4",
        title: "Mobil tətbiqlər",
        path: "/services?id=1&tab=4",
        details: {
          title: "Mobil tətbiqlər",
          description:
            "Müştərilərin tələblərinə uyğun olaraq son trendlərə əsaslanaraq mobil tətbiq UX/UI dizaynerlər tərəfindən istifadəçi üçün rahat və gözoxşayan şəkildə dizayn edilir. Dizayna əsasən də müxtəlif proqramlaşdırma dilləri və kitabxanası ilə ən yeni texnologiyalardan istifadə edərək kodlaşdırılır. Yazdığımız mobil tətbiqlər həm IoS, həm də Android əməliyyat sistemində dəstəklənə bilir.",
          image: "/webp/mobile-image.webp",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Saytların yaradılması",
    path: "/services?id=2",
    details: {
      title: "Saytların yaradılması",
      description:
        "Şirkətlərin vizyonuna uyğun olaraq sayt hazırlayırıq. Sayt trendə uyğun olaraq dizaynerlərimiz tərəfindən dizayn edilir. HTML5, CSS, JS (react js., vue js., angular js.) kimi proqramlaşdırma dilləri ilə son texnologiyalardan istifadə edərək piksel dəqiqliyində kodlaşdırılıb müxtəlif ölçülü mobil və digər cihazlara uyğunlaşdırılır. Sonda qurulmuş sayt üçün sistem arxitekturası yaradılır və maksimum sürətli işləməsi təmin edilir.",
      child: CreatingWebsite,
    },
  },
  {
    id: "3",
    title: "Oyun Təminatı",
    path: "/services?id=3&tab=1",
    childrens: [
      {
        tab: "1",
        title: "Oyun Təminatı",
        path: "/services?id=3&tab=1",
        details: {
          title: "Oyun Təminatı",
          description:
            "Şirkətin fəaliyyət göstərdiyi istiqamətə, istehsal etdiyi məhsullara uyğun olaraq oyun ssenarisi hazırlanır, son trendlərə əsaslanaraq dizayn olunur və oyun developerləri tərəfindən 2D və 3D formatında oyunlar yazılır. Oyunun növünə uyğun assetlərdən istifadə edilir.",
          image: "/webp/game-service.webp",
        },
      },
      {
        tab: "2",
        title: "Stend və VR oyunları",
        path: "/services?id=3&tab=2",
        details: {
          title: "Stend və VR oyunları",
          description:
            "BIRainy şirkəti şirkətlərin istəyinə və istifadə edəcəkləri istiqamətə uyğun olaraq özlərinə məxsus elementlərin, logonun da yer aldığı və müştərilərinin endirimlər qazanaraq əylənə bilmələri üçün stend və VR oyunlar yazır. Stend və VR oyunları event, forumlar, tədbirlər, açılışlarda şirkətə qazandırır: Müştərilərin diqqətini 1-ə 5 artırmaq; Müştərilərin hansısa konkret məhsula (məhsullara) daha çox diqqət və maraq göstərməsini təmin etmək; Tədbirlərin əyləncə hissəsini daha maraqlı və aktiv hala gətirmək; Orqanik reklam yaratmaq.",
          video: "https://www.youtube.com/embed/NAiTQcoDT0o",
        },
      },
      {
        tab: "3",
        title: "Veb oyunlar",
        path: "/services?id=3&tab=3",
        details: {
          title: "Veb oyunlar",
          description:
            "İstifadəçinin uzun müddət veb-saytda qalması və axtarış sistemində biznes veb-saytlarının təbii yollarla artımını təmin etmək üçün veb oyunların yazılmasıAxtarış sistemində biznes veb-saytlarının təbii yollarla artımını təmin edir; Sayta daxil olan şəxslərin saytda daha çox vaxt keçirməsini təmin edir; Saytın aktivliyini artırır və trafik axınını təmin edir; Axtarış motorlarında saytın ön sıralarda görünməsini təmin edir.",
          image: "/webp/game-service.webp",
        },
      },
      {
        tab: "4",
        title: "VR simulyatorlar",
        path: "/services?id=3&tab=4",
        details: {
          title: "VR simulyatorlar",
          description:
            "BIRainy tərəfindən şirkətlərin istəklərinə uyğun olaraq VR simulyatorlar yazılır və hololens, ocolus kimi VR eynəklərlə təmin edilir.",
          video: "https://www.youtube.com/embed/UjkdWji87Nw",
        },
      },
      {
        tab: "5",
        title: "Oyun monitoru kirayəsi",
        path: "/services?id=3&tab=5",
        details: {
          title: "Oyun monitoru kirayəsi",
          description:
            "Təqdim etdiyimiz stend oyunlarla birgə monitorları da kirayələmək mümkündür.",
          video: "https://www.youtube.com/embed/mGGKKrV1OJE",
        },
      },
    ],
  },
  {
    id: "4",
    title: "Data Analitikası",
    path: "/services?id=4&tab=1",
    childrens: [
      {
        tab: "1",
        title: "Data analitikası",
        path: "/services?id=4&tab=1",
        details: {
          title: "Data analitikası",
          description:
            "BIRainy MMC tərəfindən şirkətin dataları bütün mənbələrdən müxtəlif formatlarda toplandıqdan sonra təmizlənir. Təmizlənmiş datalar qrafiklərlə vizuallaşdırılır və analiz olunduqdan sonra biznes yönümlü analitik həllər şirkətə təklif edilir. Son mərhələdə hazırlanmış dashboard-larda şirkət real vaxt rejimində yeni datalara əsasən məlumatları da görə bilir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "2",
        title: "Maliyyə təhlili",
        path: "/services?id=4&tab=2",
        details: {
          title: "Maliyyə təhlili",
          description:
            "Maliyyə təhlili şirkətin və ya təşkilatın maliyyə vəziyyətini qiymətləndirmək üçün: Onun maliyyə hesabatlarını Mənfəət və zərər hesabatlarını Pulun dövriyyəsi haqqında hesabatları yoxlamağı əhatə edir. Bu təhlilin məqsədi şirkətin gəlirliliyini, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "3",
        title: "İnsan Resurslarının təhlili",
        path: "/services?id=4&tab=3",
        details: {
          title: "İnsan Resurslarının təhlili",
          description:
            "İnsan resurslarının təhlili şirkətin işçilərinə aid məlumatların toplanması və təhlilini əhatə edir. Bu cür təhlil həm kəmiyyət, həm də keyfiyyət metodlarından istifadə etməklə həyata keçirilir, bura daxildir: Kadr dəyişikliyi dərəcələri İşə qəbul xərcləri İşçilərin məşğulluq səviyyəsi Təlimin effektivliyi kimi göstəricilərin qiymətləndirilməsi. HR təhlilinin son məqsədi işçi qüvvəsinin planlaşdırılması üçün nümunələri, təkmilləşdirilməli sahələri və strateji imkanları müəyyən etməkdir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "4",
        title: "Optimizasiya təhlili",
        path: "/services?id=4&tab=4",
        details: {
          title: "Optimizasiya təhlili",
          description:
            "Optimallaşdırma təhlili resursların bölüşdürülməsi və ya seçim edilməsini nəzərdə tutan problemin optimal həllini müəyyən etmək üçün riyazi model və metodlardan istifadə prosesinə aiddir. Optimallaşdırma təhlili maliyyə, mühəndislik, logistika və əməliyyatların idarə edilməsi kimi sahələrdə geniş tətbiq sahəsinə malikdir və səmərəliliyin artırılmasına, xərclərin azaldılmasına, təkmilləşdirilmiş performansa kömək edir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "5",
        title: "Satınalma təhlili",
        path: "/services?id=4&tab=5",
        details: {
          title: "Satınalma təhlili",
          description:
            "Satınalma təhlili şirkətin satınalma fəaliyyəti haqqında məlumat əldə etmək və xərclərə qənaət, prosesi təkmilləşdirmək imkanlarını aşkar etmək üçün onun satınalma fəaliyyətini nəzərdən keçirməkdir. Bunun üçün tendensiyaları, potensial riskləri və təkmilləşdirmə tələb edən sahələri müəyyən edilib satınalma sifarişləri, təchizatçı performansı və inventar səviyyələri kimi müxtəlif məlumatlar təhlil edilir. Satınalma təhlili şirkətlərə aşağıdakı mövzularda əsaslandırılmış qərarlar qəbul etməkdə kömək edir, bu da daha yüksək səmərəliliyə və gəlirliliyə gətirib çıxarır: Tədarükçü seçimi Müqavilə danışıqları İnventarın idarə edilməsi",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "6",
        title: "Əsas Performans Göstəriciləri (KPI) təhlili",
        path: "/services?id=4&tab=6",
        details: {
          title: "Əsas Performans Göstəriciləri (KPI) təhlili",
          description:
            "KPI təhlili şirkətin fəaliyyətinin onun strateji məqsəd və vəzifələrinə uyğun qiymətləndirilməsini əhatə edir. Bu proses, müştəri saxlamaq dərəcəsi, satış artımı və ya işçilərin məhsuldarlığı kimi şirkətin uğuru üçün vacib olan KPI-lərin seçilməsini və izlənilməsini nəzərdə tutur. Əsas Performans Göstəriciləri təhlili şirkətin fəaliyyətinə dair fikirlər təqdim edən dəyərli vasitədir və biznes nəticələrini yaxşılaşdırmaq üçün məlumatlara uyğun əsaslandırılmış qərarlar qəbul etməyə imkan verir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "7",
        title: "1C proqramı ilə inteqrasiya",
        path: "/services?id=4&tab=7",
        details: {
          title: "1C proqramı ilə inteqrasiya",
          description:
            "1C proqramından verilənlərin Microsoft Power BI-a qoşulması biznes məlumatlarının təhlili və vizuallaşdırılması üçündür. Bu inteqrasiya şirkətlərə real vaxt rejimində məlumat təhlilindən istifadə etməklə yaxşı əsaslandırılmış qərarlar qəbul etmək imkanı verir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "8",
        title: "SƏTƏM təhlili",
        path: "/services?id=4&tab=8",
        details: {
          title: "SƏTƏM təhlili",
          description:
            "Sağlamlıq, Əməyin Təhlükəsizliyi və Ətraf Mühit (SƏTƏM) risklərinin təhlili layihə və ya əməliyyatla bağlı potensial təhlükələrin qiymətləndirilməsini əhatə edir. Məqsədi bu risklərin ehtimalını və nəticələrini müəyyən etmək, təşkilatlara effektiv risklərin idarə edilməsi yanaşmalarını həyata keçirməyə imkan yaratmaqdır. SƏTƏM təhlili iş yerinin təhlükəsizliyinin və tənzimləmə qaydalarına uyğunluğun, xüsusən də, tikinti, istehsal və enerji kimi sənayelərin qorunmasında vacibdir.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "9",
        title: "Satış/KPI",
        path: "/services?id=4&tab=9",
        details: {
          title: "Satış/KPI",
          description:
            "BIRainy tərəfindən təqdim olunan Satış və KPI analizi hesabatı, satış prosesinin müxtəlif fazalarını izləməyə imkan verir. Bu hesabat vasitəsilə sahibkarlar, anbarların vəziyyəti, müştəri qruplarının seçimləri, satışlar və əldə edilmiş gəlirlər haqqında detallı məlumatla təchiz olunurlar. Hesabat bu metrikləri ehtiva edir: Qoyulmuş hədəflərə nə qədər nail olunduğu, hansı ərazilərdə daha yaxşı və ya pis nəticə əldə edildiyi Lokal ərazilərdə üstünlük verilən məhsullar və markalar Müxtəlif dövrlər ərzində həyata keçən satışların analizi, ən gəlirli günlərin təhlili Müştərilərin demoqrafik göstəricilər üzrə almağa daha meyilli olduğu məhsul və markalar Müştərilərin üstünlük verdiyi ödəniş üsulları və valyuta Anbarlara daxil olan və oradan mağazalara daşınan məhsullar haqqında statistikalar",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "10",
        title: "Sosial Media",
        path: "/services?id=4&tab=10",
        details: {
          title: "Sosial Media",
          description:
            "BIRainy tərəfindən Sosial Media üzrə vizuallaşdırılmış dashboard idarə olunan platformalarda performans göstəricilərinin hərtərəfli təhlilini təqdim edir. Təhlildə diqqət real vaxt çərçivəsində auditoriya ilə qarşılıqlı əlaqə, məzmunun effektivliyi və platformanın ümumi inkişafı ilə bağlı fikirləri təqdim edən əsas göstəricilərə yönəlib. Təhlilin komponetləri bunlardır: Ümumi like/comment/follower/post/impressions/reached Klik və yeni izləyicilərin sayı Şərh və bəyənmələrin tarix üzrə analizi Fəaliyyətlərin faiz bölgüsü və s.",
          image: "/webp/data-analytics.webp",
        },
      },
      {
        tab: "11",
        title: "Restoranlar",
        path: "/services?id=4&tab=11",
        details: {
          title: "Restoranlar",
          description:
            "Restoranlar üzrə təhlil restoranın fəaliyyətinin müxtəlif aspektləri haqqında məlumat verən mühüm vasitədir. O, maliyyə sağlamlığını qiymətləndirməyə, qərar qəbul etməyə, inventarları idarə etməyə, müştərilərin seçimlərini başa düşməyə, işçilərin fəaliyyətini qiymətləndirməyə və qaydalara uyğunluğu təmin etməyə kömək edir. BIRainy komandası tərəfindən hazırlanmış dashboardu əhatə edir: Restoran barədə ümumi informasiya(menyu,kateqoriya və filial sayı)Servis/Qida reytinqi Ortalama xidmət zamanı Kateqoriyalar/Restoranlar/Ödəmə tipi/Müştəri tipi/Sifarişin növü/Menyular üzrə ödəniş Məhsullar üzrə porsiya sayı Ümumi ödəniş Ödənişlərin keçən ayla faiz fərqi Müştəri sayı Müştəri sayının keçən ayla faiz fərqi Tarix üzrə ödənişlər və müştəri sayının dinamikası Rüblər üzrə müştəri sayının faizlə bölgüsü Tarix üzrə məhsul və xidmət reytinqinin dinamikası Məhsulların təsviri",
          image: "/webp/data-analytics.webp",
        },
      },
    ],
  },
];

export const CREATING_WEBSITE_DATA: CreatingWebsiteDataProps[] = [
  {
    title: "UI/UX dizayn",
    description:
      "Şirkətin vizyonuna uyğun son trendlərə əsaslanan istifadəçi interfeysinin dizayn edilməsi.",
    image: "/webp/ui-ux.webp",
  },
  {
    title: "Mobil Optimizasiya",
    description: "Vebsaytın müxtəlif ölçülü mobil cihazlara uyğunlaşdırılması.",
    image: "/webp/optimization.webp",
  },
  {
    title: "Front-end",
    description:
      "Dizaynların HTML, CSS, JS kimi müxtəlif proqramlaşdırma dilləri ilə piksel dəqiqliyində kodlaşdırılması.",
    image: "/webp/frontend.webp",
  },
  {
    title: "Back-end",
    description:
      "Sistem arxitekturasının yaradılması və maksimum sürətli işləməsinin təmin edilməsi.",
    image: "/webp/backend.webp",
  },
  {
    title: "Kiber Təhlükəsizlik",
    description:
      "Sistemlərin, şəbəkələrin, proqramların, cihazların və məlumatların kiberhücumlardan qorunması.",
    image: "/webp/cyber.webp",
  },
  {
    title: "SEO",
    description:
      "Saytların keywordlərə uyğun axtarış sistemlərində ilk sıralarda görünməsini təmin etmək.",
    image: "/webp/seo.webp",
  },
];
