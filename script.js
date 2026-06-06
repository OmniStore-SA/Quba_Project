// التأكد من تحميل الصفحة بالكامل قبل تنفيذ الأكواد
window.onload = function() {
    
    // 1. دالة التنبيه المطلوبة في المشروع
    setTimeout(function() {
        alert("ستقام فعالية الحفل الختامي في المدرسة بتاريخ 11/17");
    }, 500); // تأخير نصف ثانية لضمان ظهور الموقع بالخلفية أولاً

    // 2. دالة الترحيب التفاعلية
    function displayGreeting() {
        let currentHour = new Date().getHours();
        let greetingElement = document.getElementById("greetingMessage");
        
        if (currentHour < 12) {
            greetingElement.innerHTML = "✨ صباح الخير – مرحب بك ✨";
        } else {
            greetingElement.innerHTML = "✨ مساء الخير – مرحب بك ✨";
        }
    }

    // تشغيل الترحيب
    displayGreeting();
};
