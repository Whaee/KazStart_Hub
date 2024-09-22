const purposeCtx = document.getElementById('purposeChart').getContext('2d');
const purposeChart = new Chart(purposeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Business', 'Function', 'Other', 'Vacation'],
        datasets: [{
            label: 'Purpose',
            data: [249, 92, 54, 291],
            backgroundColor: ['#00aaff', '#ff0077', '#ffaa00', '#77ff00'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

const ratingCtx = document.getElementById('ratingChart').getContext('2d');
const ratingChart = new Chart(ratingCtx, {
    type: 'radar',
    data: {
        labels: ['Staff Attitude', 'Staff Check-in', 'Room Service', 'Room Cleanliness', 'Restaurant Food Quality', 'Variety of Food', 'Facility Gym'],
        datasets: [{
            label: 'Rating',
            data: [3.7, 3.8, 3.6, 3.0, 3.0, 2.9, 3.2],
            backgroundColor: 'rgba(0, 200, 255, 0.2)',
            borderColor: '#00c8ff',
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
const sourceCtx = document.getElementById('sourceChart').getContext('2d');
const sourceChart = new Chart(sourceCtx, {
    type: 'bar',
    data: {
        labels: ['Organization', 'Hotel Booking Sites', 'Word of Mouth', 'Search Engine', 'Internet Ads', 'Newspaper'],
        datasets: [{
            label: 'Sources',
            data: [289, 102, 86, 84, 58, 31],
            backgroundColor: ['#0077ff', '#ff7700', '#77ff00', '#ffaa00', '#00aaff', '#ff0077'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
