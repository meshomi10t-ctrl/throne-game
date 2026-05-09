// عداد المشاهدين المباشر
let viewers = Math.floor(Math.random() * 20) + 5;

function updateViewerCount() {
    viewers += Math.floor(Math.random() * 3) - 1;
    if (viewers < 1) viewers = 1;
    document.getElementById('viewerCount').textContent = viewers;
}

// تحديث كل 5 ثواني
setInterval(updateViewerCount, 5000);
