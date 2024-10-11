const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const content = entry.target.querySelector('.timeline-content');
        const dot = entry.target.querySelector('.timeline-dot');
        const date = entry.target.querySelector('.timeline-date');

        if (entry.isIntersecting) {
            content.classList.add('highlight'); // Menyala jika terlihat
            dot.style.backgroundColor = 'rgba(234, 160, 35, 1)'; // Dot cerah
            date.style.color = 'rgba(234, 160, 35, 1)'; // Teks cerah
            entry.target.querySelector('h3').style.color = '#ffffff'; // Warna teks cerah
            entry.target.querySelector('p').style.color = '#c8c8c8'; // Warna teks cerah
        } else {
            content.classList.remove('highlight'); // Hilangkan warna menyala
            dot.style.backgroundColor = 'rgba(234, 160, 35, 0.5)'; // Dot redup
            date.style.color = 'rgba(234, 160, 35, 0.5)'; // Teks redup
            entry.target.querySelector('h3').style.color = 'rgba(255, 255, 255, 0.5)'; // Warna teks redup
            entry.target.querySelector('p').style.color = 'rgba(200, 200, 200, 0.5)'; // Warna teks redup
        }
    });
}, { threshold: 0.5 }); // Threshold untuk melihat elemen

timelineItems.forEach(item => {
    observer.observe(item);
});