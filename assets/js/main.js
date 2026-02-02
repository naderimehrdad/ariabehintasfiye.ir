// Year
document.getElementById("y").textContent = new Date().getFullYear();

// i18n dictionary
const I18N = {
  fa: {
    "nav.intro": "معرفی",
    "nav.ceo": "مدیرعامل",
    "nav.advantages": "مزیت‌ها",
    "nav.about": "درباره ما",
    "nav.rnd": "R&D",
    "nav.contact": "تماس",

    "hero.h1": "شرکت فنی و مهندسی آریا بهین تصفیه (سهامی خاص)",
    "hero.p": "ارائه راهکارهای کارآمد، اقتصادی و سازگار با محیط زیست برای صنایع، سازمان‌ها و پروژه‌های عمرانی کشور",
    "hero.cta1": "دریافت مشاوره",
    "hero.cta2": "بیشتر بدانید",

    "intro.h2": "معرفی کوتاه",
    "intro.p": "شرکت فنی و مهندسی آریا بهین تصفیه با تکیه بر دانش فنی، تجربه تخصصی و بهره‌گیری از فناوری‌های روز، و با همکاری و مشاوره اساتید مطرح و فارغ‌التحصیلان دانشگاه‌های تهران، علوم پزشکی تهران (دانشکده بهداشت) و سایر دانشگاه‌های معتبر کشور، در زمینه طراحی، مشاوره، نظارت و اجرای پروژه‌های مرتبط با آب، فاضلاب، HSE، محیط زیست و انرژی‌های تجدیدپذیر فعالیت می‌نماید.",

    "ceo.h2": "مدیرعامل",
    "ceo.name": "داود کاهه",
    "ceo.title": "مدیرعامل شرکت فنی و مهندسی آریا بهین تصفیه",
    "ceo.p": "شرکت آریا بهین تصفیه با مدیریت آقای داود کاهه و با تکیه بر دانش فنی، تجربه اجرایی و رویکرد توسعه پایدار، در مسیر ارائه راهکارهای نوین و تخصصی در حوزه آب، فاضلاب و محیط زیست گام برمی‌دارد.",

    "advantages.h2": "مزیت‌های رقابتی",
    "advantages.i1": "بهره‌گیری از رویکردهای نوین مهندسی و فناوری‌های روز",
    "advantages.i2": "همکاری علمی با اساتید و متخصصان دانشگاه‌های معتبر کشور",
    "advantages.i3": "تمرکز بر توسعه پایدار و حفاظت از محیط زیست",
    "advantages.i4": "توانمندی در طراحی و اجرای پروژه‌های EPC",
    "advantages.i5": "ارائه خدمات مشاوره تخصصی و مطالعات زیست‌محیطی",

    "about.h2": "درباره ما",
    "about.p1": "شرکت فنی و مهندسی آریا بهین تصفیه با هدف ارائه خدمات تخصصی در حوزه آب، فاضلاب، محیط زیست و انرژی‌های نو تأسیس گردیده است. این شرکت با بهره‌گیری از نیروهای متخصص، دانش فنی به‌روز و همکاری و مشاوره مستمر با اساتید دانشگاه‌های تهران، علوم پزشکی تهران (دانشکده بهداشت) و سایر مراکز علمی معتبر کشور، تلاش دارد پاسخگوی نیازهای فنی و زیست‌محیطی پروژه‌های عمرانی، صنعتی و شهری باشد.",
    "about.p2": "آریا بهین تصفیه با تمرکز بر اصول توسعه پایدار، کاهش آلاینده‌ها و بهینه‌سازی مصرف منابع، خدماتی جامع از مرحله مطالعات و طراحی تا اجرا، بهره‌برداری و نگهداری پروژه‌ها ارائه می‌دهد.",
    "about.p3": "ما بر این باوریم که تلفیق دانش مهندسی، پشتوانه علمی دانشگاهی و مسئولیت‌پذیری زیست‌محیطی، مسیر دستیابی به آینده‌ای پایدار را هموار می‌سازد.",

    "rnd.h2": "تحقیق و توسعه (R&D)",
    "rnd.p1": "واحد تحقیق و توسعه شرکت آریا بهین تصفیه با هدف ارتقاء دانش فنی، بومی‌سازی فناوری‌ها و ارائه راهکارهای نوین زیست‌محیطی فعالیت می‌نماید.",
    "rnd.p2": "این واحد با همکاری اساتید مطرح، پژوهشگران و فارغ‌التحصیلان دانشگاه‌های تهران، علوم پزشکی تهران (دانشکده بهداشت) و سایر دانشگاه‌های معتبر کشور، در زمینه توسعه فناوری‌های نوین تصفیه آب و پساب، تجهیزات زیست‌محیطی و راهکارهای پایدار تحقیق و فعالیت می‌کند.",

    "contact.h2": "تماس با ما",
    "contact.p": "جهت دریافت مشاوره تخصصی، همکاری و کسب اطلاعات بیشتر با ما در ارتباط باشید.",
    "contact.infoTitle": "اطلاعات تماس",
    "contact.addressLabel": "آدرس:",
    "contact.addressValue": "تهران، منطقه ۲۲، خیابان کرمانشاه، شهرک الهیه غرب، خیابان سهند، کوچه سهند ۲، پلاک ۷۵، واحد ۲",
    "contact.phoneLabel": "تلفن ثابت:",
    "contact.mobileLabel": "تلفن همراه:",
    "contact.emailLabel": "ایمیل:",
    "contact.domainLabel": "دامنه:",

    "form.title": "فرم درخواست مشاوره",
    "form.name": "نام و نام خانوادگی",
    "form.phone": "شماره تماس",
    "form.subject": "موضوع",
    "form.message": "پیام",
    "form.submit": "ارسال",
    "form.hint": "این فرم موقتا غیرفعال است (لطفا تماس بگیرید).",
    "form.namePh": "مثلاً مهرداد نادری",
    "form.phonePh": "09xxxxxxxxx",
    "form.subjectPh": "تصفیه پساب صنعتی",
    "form.messagePh": "توضیحات...",

    "footer.copy": "© <span id=\"y\"></span> آریا بهین تصفیه",
    "footer.back": "بازگشت به بالا",

    "alerts.form": "این فرم فعلاً نمایشی است. برای ارسال واقعی می‌توانیم آن را به سرویس‌های فرم (مثل Formspree) یا بک‌اند وصل کنیم."
  },

  en: {
    "nav.intro": "Intro",
    "nav.ceo": "CEO",
    "nav.advantages": "Advantages",
    "nav.about": "About",
    "nav.rnd": "R&D",
    "nav.contact": "Contact",

    "hero.h1": "Aria Behin Tasfiye",
    "hero.p": "Efficient, cost-effective, and environmentally responsible solutions for industries, organizations, and construction projects.",
    "hero.cta1": "Get Consultation",
    "hero.cta2": "Learn More",

    "intro.h2": "Brief Introduction",
    "intro.p": "Aria Behin Tasfiye is a technical and engineering company focused on design, consulting, supervision, and execution of projects related to water, wastewater, HSE, environment, and renewable energy, supported by up-to-date technologies and academic collaboration with leading experts and graduates from top universities in Iran.",

    "ceo.h2": "Chief Executive Officer",
    "ceo.name": "Davood Kaheh",
    "ceo.title": "CEO, Aria Behin Tasfiye Technical & Engineering Co.",
    "ceo.p": "Under the leadership of Mr. Davood Kaheh, Aria Behin Tasfiye pursues innovative and specialized solutions in water, wastewater, and environmental fields, relying on technical knowledge, execution experience, and a sustainable development approach.",

    "advantages.h2": "Competitive Advantages",
    "advantages.i1": "Modern engineering approaches and up-to-date technologies",
    "advantages.i2": "Academic collaboration with leading professors and experts",
    "advantages.i3": "Focus on sustainability and environmental protection",
    "advantages.i4": "Capability in EPC project design and execution",
    "advantages.i5": "Specialized consulting and environmental studies",

    "about.h2": "About Us",
    "about.p1": "Aria Behin Tasfiye was established to provide specialized services in water, wastewater, environment, and new energy. With skilled experts, updated technical knowledge, and continuous academic consulting, the company addresses technical and environmental needs of urban, industrial, and construction projects.",
    "about.p2": "By focusing on sustainable development, pollution reduction, and resource optimization, we deliver comprehensive services from studies and design to execution, operation, and maintenance.",
    "about.p3": "We believe combining engineering expertise, academic support, and environmental responsibility paves the way toward a sustainable future.",

    "rnd.h2": "Research & Development (R&D)",
    "rnd.p1": "Our R&D unit aims to enhance technical knowledge, localize technologies, and develop innovative environmental solutions.",
    "rnd.p2": "In collaboration with academics and researchers from top universities, we work on advanced water and wastewater treatment technologies, environmental equipment, and sustainable solutions.",

    "contact.h2": "Contact Us",
    "contact.p": "For consultation, partnership, and more information, get in touch with us.",
    "contact.infoTitle": "Contact Info",
    "contact.addressLabel": "Address:",
    "contact.addressValue": "Unit 2, No. 75, Sahand Alley 2, Sahand St., Elahieh-e Gharb Town, Kermanshah St., District 22, Tehran, Iran",
    "contact.phoneLabel": "Landline:",
    "contact.mobileLabel": "Mobile:",
    "contact.emailLabel": "Email:",
    "contact.domainLabel": "Domain:",

    "form.title": "Consultation Request",
    "form.name": "Full Name",
    "form.phone": "Phone Number",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.submit": "Send",
    "form.hint": "This form is currently a demo (static site).",
    "form.namePh": "e.g., John Doe",
    "form.phonePh": "+98...",
    "form.subjectPh": "Industrial wastewater treatment",
    "form.messagePh": "Your message...",

    "footer.copy": "© <span id=\"y\"></span> Aria Behin Tasfiye",
    "footer.back": "Back to top",

    "alerts.form": "This form is currently a demo. We can connect it to a form service (e.g., Formspree) or a backend for real submissions."
  },

  ar: {
    "nav.intro": "نبذة",
    "nav.ceo": "المدير التنفيذي",
    "nav.advantages": "المزايا",
    "nav.about": "من نحن",
    "nav.rnd": "البحث والتطوير",
    "nav.contact": "اتصل بنا",

    "hero.h1": "شركة آريا بهين تصفية الفنية والهندسية",
    "hero.p": "حلول فعّالة واقتصادية ومتوافقة مع البيئة للصناعات والمؤسسات والمشاريع الإنشائية.",
    "hero.cta1": "طلب استشارة",
    "hero.cta2": "اعرف المزيد",

    "intro.h2": "تعريف مختصر",
    "intro.p": "تعمل شركة آريا بهين تصفية في تصميم واستشارات وإشراف وتنفيذ المشاريع المتعلقة بالمياه والصرف الصحي وHSE والبيئة والطاقة المتجددة، بالاعتماد على أحدث التقنيات والتعاون العلمي مع خبراء وخريجي الجامعات المرموقة في إيران.",

    "ceo.h2": "المدير التنفيذي",
    "ceo.name": "داود كاهه",
    "ceo.title": "المدير التنفيذي لشركة آريا بهين تصفية الفنية والهندسية",
    "ceo.p": "تسعى آريا بهين تصفية بقيادة السيد داود كاهه إلى تقديم حلول مبتكرة ومتخصصة في مجالات المياه والصرف الصحي والبيئة، اعتماداً على المعرفة الفنية والخبرة التنفيذية ونهج التنمية المستدامة.",

    "advantages.h2": "المزايا التنافسية",
    "advantages.i1": "اعتماد مناهج هندسية حديثة وتقنيات متقدمة",
    "advantages.i2": "تعاون علمي مع أساتذة وخبراء من جامعات مرموقة",
    "advantages.i3": "التركيز على الاستدامة وحماية البيئة",
    "advantages.i4": "القدرة على تصميم وتنفيذ مشاريع EPC",
    "advantages.i5": "استشارات متخصصة ودراسات بيئية",

    "about.h2": "من نحن",
    "about.p1": "تأسست شركة آريا بهين تصفية لتقديم خدمات متخصصة في المياه والصرف الصحي والبيئة والطاقة الجديدة. وبالاعتماد على خبراء مؤهلين ومعرفة فنية محدثة واستشارات أكاديمية مستمرة، تسعى الشركة لتلبية الاحتياجات الفنية والبيئية للمشاريع الحضرية والصناعية والإنشائية.",
    "about.p2": "من خلال التركيز على التنمية المستدامة وتقليل الملوثات وتحسين استخدام الموارد، نقدم خدمات شاملة من الدراسة والتصميم إلى التنفيذ والتشغيل والصيانة.",
    "about.p3": "نؤمن بأن دمج الخبرة الهندسية والدعم الأكاديمي والمسؤولية البيئية يمهد الطريق نحو مستقبل مستدام.",

    "rnd.h2": "البحث والتطوير (R&D)",
    "rnd.p1": "يهدف قسم البحث والتطوير إلى تعزيز المعرفة الفنية وتوطين التقنيات وتقديم حلول بيئية مبتكرة.",
    "rnd.p2": "بالتعاون مع الأكاديميين والباحثين، نعمل على تطوير تقنيات متقدمة لمعالجة المياه ومياه الصرف وتجهيزات بيئية وحلول مستدامة.",

    "contact.h2": "اتصل بنا",
    "contact.p": "للاستشارة والشراكة ولمزيد من المعلومات، تواصل معنا.",
    "contact.infoTitle": "معلومات الاتصال",
    "contact.addressLabel": "العنوان:",
    "contact.addressValue": "الوحدة 2، رقم 75، زقاق سهند 2، شارع سهند، مدينة الإلهية غرب، شارع كرمانشاه، المنطقة 22، طهران، إيران",
    "contact.phoneLabel": "هاتف ثابت:",
    "contact.mobileLabel": "هاتف محمول:",
    "contact.emailLabel": "البريد:",
    "contact.domainLabel": "الموقع:",

    "form.title": "طلب استشارة",
    "form.name": "الاسم الكامل",
    "form.phone": "رقم الهاتف",
    "form.subject": "الموضوع",
    "form.message": "الرسالة",
    "form.submit": "إرسال",
    "form.hint": "هذا النموذج تجريبي حالياً (موقع ثابت).",
    "form.namePh": "مثلاً: أحمد علي",
    "form.phonePh": "+98...",
    "form.subjectPh": "معالجة مياه صرف صناعية",
    "form.messagePh": "اكتب رسالتك...",

    "footer.copy": "© <span id=\"y\"></span> آريا بهين تصفية",
    "footer.back": "العودة للأعلى",

    "alerts.form": "هذا النموذج تجريبي حالياً. يمكن ربطه بخدمة نماذج (مثل Formspree) أو بخادم لإرسال الرسائل فعلياً."
  }
};

function setLang(lang){
  const html = document.documentElement;
  const dir = (lang === "en") ? "ltr" : "rtl";

  html.setAttribute("lang", lang);
  html.setAttribute("dir", dir);
  html.setAttribute("data-lang", lang);

  // active button
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
  });

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N?.[lang]?.[key];
    if (typeof val === "string") el.innerHTML = val;
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = I18N?.[lang]?.[key];
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });

  // persist
  try { localStorage.setItem("site_lang", lang); } catch(e){}
}

function showFormNotice(){
  const lang = document.documentElement.getAttribute("data-lang") || "fa";
  alert(I18N?.[lang]?.["alerts.form"] || I18N.fa["alerts.form"]);
}

// init
(function init(){
  const saved = (() => { try { return localStorage.getItem("site_lang"); } catch(e){ return null; } })();
  const lang = saved || "fa";
  setLang(lang);

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });
})();
