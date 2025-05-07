import { MenuItemProps } from "@/types/data";
import path from "path";
import { title } from "process";

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

export const SERVICES_DATA = [
  {
    title: "Proqram təminatı",
    path: "/services?id=1&tab=1",
    childrens: [
      {
        title: "Proqram təminatı",
        path: "/services?id=1&tab=1",
        details: {
          title: "Proqram təminatı",
          description:
            "BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür. Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.",
        },
      },
      {
        title: "Sürətli Axtarış Sistemi",
        path: "/services?id=1&tab=2",
        details: {},
      },
      {
        title: "CRM və ERP",
        path: "/services?id=1&tab=3",
        details: {},
      },
      {
        title: "Mobil tətbiqlər",
        path: "/services?id=1&tab=4",
        details: {},
      },
    ],
  },
  {
    title: 'Saytların yaradılması',
    path: '/services?id=2&tab=1',
  },
  {
    title: "Oyun Təminatı",
    path: "/services?id=3&tab=1",
    childrens: [
      {
        title: "Oyun Təminatı",
        path: "/services?id=3&tab=1",
        details: {
          title: "Proqram təminatı",
          description:
            "BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür. Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.",
        },
      },
      {
        title: "Stend və VR oyunları",
        path: "/services?id=3&tab=2",
        details: {},
      },
      {
        title: "Veb oyunlar",
        path: "/services?id=3&tab=3",
        details: {},
      },
      {
        title: "VR simulyatorlar",
        path: "/services?id=3&tab=4",
        details: {},
      },
      {
        title: "Oyun monitoru kirayəsi",
        path: "/services?id=3&tab=5",
        details: {},
      },
    ],
  },
  {
    title: "Data Analitikası",
    path: "/services?id=4&tab=1",
    childrens: [
      {
        title: "Data analitikası",
        path: "/services?id=4&tab=1",
        details: {
          title: "Proqram təminatı",
          description:
            "BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür. Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.",
        },
      },
      {
        title: "Maliyyə təhlili",
        path: "/services?id=4&tab=2",
        details: {},
      },
      {
        title: "İnsan Resurslarının təhlili",
        path: "/services?id=4&tab=3",
        details: {},
      },
      {
        title: "Optimizasiya təhlili",
        path: "/services?id=4&tab=4",
        details: {},
      },
      {
        title: "Satınalma təhlili",
        path: "/services?id=4&tab=5",
        details: {},
      },
      {
        title: "Əsas Performans Göstəriciləri (KPI) təhlili",
        path: "/services?id=4&tab=6",
        details: {},
      },
      {
        title: "1C proqramı ilə inteqrasiya",
        path: "/services?id=4&tab=7",
        details: {},
      },
      {
        title: "SƏTƏM təhlili",
        path: "/services?id=4&tab=8",
        details: {},
      },
      {
        title: "Satış/KPI",
        path: "/services?id=4&tab=9",
        details: {},
      },
      {
        title: "Sosial Media",
        path: "/services?id=4&tab=10",
        details: {},
      },
      {
        title: "Restoranlar",
        path: "/services?id=4&tab=11",
        details: {},
      },
    ],
  },
];
