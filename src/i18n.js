import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "Title": "I'm Baraa Alsher",
            "Job Title": "Frontend Developer with Mobile Development Experience",
            "Description": "Experienced Full-Stack Frontend Developer with a proven track record of over 3 years in developing innovative web applications. Committed to delivering clean, efficient, and responsive code. Dedicated to client satisfaction, offering 24/7 support and transparent communication. Let's collaborate and discuss your business goals. Contact me to get started!",
            "Follow Description": "I'm a big fan of side-projects. You can find some of my projects below.",
            "Timescape": "Timescape",
            "SNote": "SNote",
            "Gradients CSS": "Gradients CSS",
            "mailto": "If you have any questions or want to discuss a project, feel free to email me at ",
            "footer": "Baraa - All rights reserved.",
            "dark mode": "dark mode",
            "light mode": "light mode",
            "send email" : "send email now ✉️",
        }
    },
    ar: {
        translation: {
            "Title": "أهلا",
            "Job Title": "مطور ويب و تطبيقات أندرويد",
            "Description": " اسمي براء الشاعر مطور واجهة مستخدم محترف بخبرة أكثر من 3 سنوات في تطوير تطبيقات الويب الابتكارية. ملتزم بتقديم رمز نظيف وفعّال ومتجاوب. مهتم برضا العملاء وأقدم الدعم على مدار الساعة والتواصل الشفاف. بنتعاون ونناقش أهداف مشروعك. تواصل معي للبدء!",
            "Follow Description": "أنا مهتم بالمشاريع الفرعية. يمكنك العثور على بعض المشاريع الخاصة بي أدناه.",
            "Timescape": "Timescape (تطبيق ويب لحفظ المواعيد أونلاين)",
            "SNote": "SNote (تطبيق ويب لحفظ الملاحظات)",
            "Gradients CSS": "Gradients CSS (عباره عن أداه لنسخ تدرجات الألوان)",
            "mailto": "اذا كان لديك أي استفسار تواصل معي على الايميل ",
            "footer": "براء",
            "dark mode": "الوضع اليلي",
            "light mode": "الوضع النهاري",
            "send email" : "أرسل ايميل الأن ✉️",

        }
    }
};
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});
export default i18n;
