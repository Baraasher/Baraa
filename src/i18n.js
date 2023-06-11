import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            Title: "Baraa Alsher",
            "Job Title": "React.js Frontend Developer",
            Description:
                "Hello! I'm Baraa Alsher, a skilled Front End Developer specializing in creating innovative web designs and features. Proficient in HTML, CSS, JavaScript, and React, I have a proven ability to adapt quickly to new technologies. With a meticulous approach to coding, I focus on delivering high-quality solutions that meet client requirements. I excel at troubleshooting complex code issues and ensuring adherence to design standards. Through my work, I aim to create engaging websites that leave a lasting impact. Explore my website to learn more about my skills and projects.",
            "Follow Description":
                "I'm a big fan of side-projects. You can find some of my projects below.",
            Timescape: "Timescape",
            SNote: "SNote",
            "Gradients CSS": "Gradients CSS",
            mailto:
                "If you have any questions or want to discuss a project, feel free to email me at ",
            footer: "Baraa - All rights reserved.",
            "dark mode": "dark mode",
            "light mode": "light mode",
            "send email": "send email now ✉️",
            formTitle: "Send Email",
            name: "Name",
            email: "Email",
            typeYourMessage: "type your message",
            send: "send",
            github: "github",
            linkedin: "linkedin",
            youtube: "youtube",
            successMessage: "Your message has been successfully sent.",
            emptyFieldsMessage: "Please enter your email and message.",
            emptyMessageMessage: "Please enter your message.",
            emptyEmailMessage: "Please enter your email address."
        },
    },
    ar: {
        translation: {
            Title: "براء الشاعر",
            "Job Title": "مهندس برمجيات",
            Description:
                " مرحبًا! أنا براء الشاعر، مهندس برمجيات متخصص في تطوير تطبيقات الويب المبتكرة. لدي خبرة قوية في لغات HTML، CSS، JavaScript وReact، وأستطيع التكيف بسهولة مع أحدث التقنيات. أهتم بشدة بتفاصيل البرمجة وأركز على تقديم حلول عالية الجودة لتلبية متطلبات العملاء. أتميز في معالجة المشاكل المعقدة في الشفرة وضمان الالتزام بمعايير التصميم. هدفي هو إنشاء تطبيقات ويب جذابة تترك أثرًا إيجابيًا.",
            "Follow Description":
                "أنا مهتم بالمشاريع الفرعية. يمكنك العثور على بعض المشاريع الخاصة بي أدناه.",
            Timescape: "Timescape (تطبيق ويب لحفظ المواعيد أونلاين)",
            SNote: "SNote (تطبيق ويب لحفظ الملاحظات)",
            "Gradients CSS": "Gradients CSS (عباره عن أداه لنسخ تدرجات الألوان)",
            mailto: "اذا كان لديك أي استفسار تواصل معي على الايميل :",
            footer: "براء",
            "dark mode": "الوضع اليلي",
            "light mode": "الوضع النهاري",
            "send email": "أرسل ايميل الأن ✉️",
            formTitle: "ارسال ايميل",
            name: "الاسم",
            email: "الايميل",
            typeYourMessage: "الرساله",
            send: "ارسال",
            github: "جيت هاب",
            linkedin: "لينكد إن ",
            youtube: "يوتيوب ",
            successMessage: "تم إرسال رسالتك بنجاح.",
            emptyFieldsMessage: "يرجى إدخال بريدك الإلكتروني ورسالتك.",
            emptyMessageMessage: "يرجى إدخال رسالتك.",
            emptyEmailMessage: "يرجى إدخال عنوان بريدك الإلكتروني."
        },
    },
};

i18n.use(initReactI18next).init({
    resources: resources,
    lng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;