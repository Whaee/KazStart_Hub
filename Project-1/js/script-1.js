const ctx = document.getElementById('servicesChart').getContext('2d');
const servicesChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Artificial Intelligence', 'ERP Consulting', 'Custom Software Development',
            'Application Management & Support', 'E-Commerce Development',
            'Mobile App Development', 'Web Development', 'Web Design', 
            'Business Consulting', 'CRM Consulting', 'UX/UI Design', 
            'Enterprise App Modernization', 'Application Testing', 'IT Consulting', 
            'IT Managed', 'Logo Design', 'Graphic Design', 'Product Design', 'SEO'
        ],
        datasets: [{
            data: [10, 10, 8, 8, 8, 8, 5, 5, 5, 5, 4, 3, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
                '#45d1bd', '#efbf3b', '#3da5e0', '#ff6f61', '#ef463b',
                '#ff6f61', '#3da5e0', '#a65fca', '#f8ce43', '#fbd73e',
                '#ff9252', '#f396a2', '#f15476', '#95a5a6', '#94e5e0',
                '#fc636b', '#ff9b89', '#f7b841', '#5c7ddf'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const ctx1 = document.getElementById('profileStrengthChart').getContext('2d');

const gradient = ctx1.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(61, 165, 224, 0.5)');
gradient.addColorStop(1, 'rgba(61, 165, 224, 0)');

const profileStrengthChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Poor', 'Below Average', 'Average', 'Good', 'Above Average', 'Strong', 'Excellent'],
        datasets: [{
            label: 'In Uzbekistan',
            data: [3, 7, 4, 3, 2, 2, 6],
            fill: true,
            backgroundColor: gradient,
            borderColor: '#3da5e0',
            pointBackgroundColor: '#3da5e0',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#3da5e0',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Companies',
                },
            },
        },
        plugins: {
            legend: {
                display: false
            },
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(function(bar) {
        const value = bar.getAttribute('data-value');
        bar.style.width = value + '%';
    });
});

const ctx2 = document.getElementById('serviceChargesChart').getContext('2d');
    const serviceChargesChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['$ (< 30/h)', '$$ (30 - 70/h)', '$$$ (70 - 150/h)'],
            datasets: [
                {
                    label: 'In Uzbekistan',
                    data: [5, 9, 4],
                    backgroundColor: 'rgba(65, 105, 225, 0.8)', // Darker blue
                    borderColor: 'rgba(65, 105, 225, 1)',
                    borderWidth: 1
                },
                {
                    label: 'In Tashkent',
                    data: [4, 9, 4],
                    backgroundColor: 'rgba(173, 216, 230, 0.8)', // Lighter blue
                    borderColor: 'rgba(173, 216, 230, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Companies'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Average Cost of Services'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });