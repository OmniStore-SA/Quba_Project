// 1. دالة التنبيه (تظهر أول ما تفتح الصفحة)
alert("ستقام فعالية الحفل الختامي في المدرسة بتاريخ 11/17");

// 2. دالة العرض التفاعلي لتغير النص بتغير الوقت
function displayGreeting() {
    // جلب الوقت الحالي
    let currentHour = new Date().getHours();
    let greetingText = "";

    // تحديد الرسالة بناءً على الساعة (نظام 24 ساعة)
    if (currentHour < 12) {
        greetingText = "صباح الخير - مرحب بك";
    } else {
        greetingText = "مساء الخير - مرحب بك";
    }

    // عرض النص في الصفحة الرئيسية داخل العنصر المخصص له
    document.getElementById("greetingMessage").innerText = greetingText;
}

// استدعاء الدالة لتنفيذها
displayGreeting();
