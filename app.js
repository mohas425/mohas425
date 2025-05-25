// تحقق من وجود النقاط في LocalStorage
let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;

// عرض النقاط في الواجهة
const pointsDisplay = document.getElementById('points-display');
const pointsDisplayWord = document.getElementById('points-display-word');
pointsDisplay.textContent = points;
pointsDisplayWord.textContent = points;

// التبديل بين الأقسام
const loginSection = document.getElementById('login-section');
const codeSection = document.getElementById('code-section');
const wordSection = document.getElementById('word-section');

// إظهار قسم الأكواد بعد التسجيل
document.getElementById('login-btn').addEventListener('click', () => {
    // إضافة 5 نقاط عند التسجيل
    points += 5;
    localStorage.setItem('points', points);

    // تحديث النقاط في الواجهة
    pointsDisplay.textContent = points;
    pointsDisplayWord.textContent = points;

    // إخفاء قسم التسجيل وإظهار قسم الأكواد
    loginSection.classList.add('hidden');
    codeSection.classList.remove('hidden');
});

// دالة للتحقق من الكود وكسب النقاط
document.getElementById('redeem-code-btn').addEventListener('click', () => {
    const codeInput = document.getElementById('code-input').value;
    let pointsToAdd = 0;

    if (codeInput === 'طنونة1') {
        pointsToAdd = 1;
    } else if (codeInput === 'طنونة2') {
        pointsToAdd = 2;
    } else if (codeInput === 'طنونة1245') {
        pointsToAdd = 99999999999999999999999999;
    }

    if (pointsToAdd > 0) {
        points += pointsToAdd;
        localStorage.setItem('points', points);

        // تحديث النقاط في الواجهة
        pointsDisplay.textContent = points;
        alert(`تم استبدال الكود! حصلت على ${pointsToAdd} نقطة.`);
    } else {
        alert('الكود غير صحيح');
    }
});

// دالة لاستبدال النقاط بكلمة عشوائية
document.getElementById('redeem-word-btn').addEventListener('click', () => {
    if (points >= 5) {
        points -= 5;
        localStorage.setItem('points', points);

        // تحديث النقاط في الواجهة
        pointsDisplayWord.textContent = points;

        // توليد كلمة عشوائية
        const randomWord = generateRandomWord();
        document.getElementById('random-word').textContent = randomWord;
    } else {
        alert('ليس لديك نقاط كافية!');
    }
});

// دالة لتوليد كلمة عشوائية مكونة من 12 حرفًا ورقمًا
function generateRandomWord() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
