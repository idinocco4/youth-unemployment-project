const ctx = document.getElementById('unemploymentChart').getContext('2d');

const unemploymentChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2000, 2005, 2010, 2015, 2020, 2024], // Replace with your actual years
        datasets: [{
            label: 'Youth Unemployment Rate (%)',
            data: [12, 10, 18, 14, 16, 15], // Replace with your actual data
            borderColor: 'rgba(0, 86, 179, 1)',
            backgroundColor: 'rgba(0, 86, 179, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Youth Unemployment Rate Over Time' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
