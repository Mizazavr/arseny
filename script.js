// Sample video data
const videoData = [
    {
        id: 1,
        title: "Сумашедший Арсений напал на беспомощного мальчика",
        thumbnail: "\img/arsenii1.png",
        duration: "10:23",
        views: 1245678,
        likes: 45678,
        timestamp: "3 days ago"
    },
    {
        id: 2,
        title: "Арсений показывает как готовить бургер",
        thumbnail: "\img/arsenii2.png",
        duration: "7:45",
        views: 987543,
        likes: 32456,
        timestamp: "1 week ago"
    },
    {
        id: 3,
        title: "Что, а где твой папа? Я научу тебя манерам 😈",
        thumbnail: "\img/arsenii3.png",
        duration: "15:30",
        views: 2345678,
        likes: 87654,
        timestamp: "2 days ago"
    },
    {
        id: 4,
        title: "Арсений и Великий Подъем: Бетономешалка в деле!",
        thumbnail: "\img/arsenii4.png",
        duration: "32:15",
        views: 3456789,
        likes: 98765,
        timestamp: "5 days ago"
    },
    {
        id: 5,
        title: "Арсений vs Диван: Битва за доминирование",
        thumbnail: "\img/arsenii5.png",
        duration: "12:48",
        views: 876543,
        likes: 23456,
        timestamp: "1 day ago"
    },
    {
        id: 6,
        title: "Арсений и тайна тугой спортивной формы",
        thumbnail: "\img/arsenii6.png",
        duration: "25:10",
        views: 1567890,
        likes: 54321,
        timestamp: "4 days ago"
    },
    {
        id: 7,
        title: "Арсений на стройке: Где цемент, там и радость!",
        thumbnail: "\img/arsenii7.png",
        duration: "18:22",
        views: 654321,
        likes: 12345,
        timestamp: "2 weeks ago"
    },
    {
        id: 8,
        title: "Арсений и неожиданный поворот сюжета (и тела)",
        thumbnail: "\img/arsenii8.png",
        duration: "21:05",
        views: 2345678,
        likes: 76543,
        timestamp: "3 weeks ago"
    },
    {
        id: 9,
        title: "Арсений в спортзале: Жим лежа и не только!",
        thumbnail: "\img/arsenii9.png",
        duration: "8:15",
        views: 987654,
        likes: 34567,
        timestamp: "6 days ago"
    },
    {
        id: 10,
        title: "Арсений и сосед снизу: Шумные примирения",
        thumbnail: "\img/arsenii10.png",
        duration: "14:30",
        views: 1234567,
        likes: 45678,
        timestamp: "1 month ago"
    },
    {
        id: 11,
        title: "Арсений и забытый гель для душа (и его последствия)",
        thumbnail: "\img/arsenii11.png",
        duration: "16:42",
        views: 2345678,
        likes: 87654,
        timestamp: "2 days ago"
    },
    {
        id: 12,
        title: "Арсений и командная работа: Чем больше, тем веселее!",
        thumbnail: "\img/arsenii12.png",
        duration: "19:55",
        views: 3456789,
        likes: 98765,
        timestamp: "1 week ago"
    }
];

// Format numbers for views and likes (e.g., 1.2M, 456K)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Create video cards and add them to the container
function renderVideos() {
    const videosContainer = document.getElementById('videos-container');
    
    videoData.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <span>${video.timestamp}</span>
                    <div class="video-stats">
                        <div class="video-stat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <span>${formatNumber(video.views)}</span>
                        </div>
                        <div class="video-stat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2  0 0 1 2-2h3"></path></svg>
                            <span>${formatNumber(video.likes)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // // Add click event to the video card
        // videoCard.addEventListener('click', () => {
        //     console.log(`Video clicked: ${video.title}`);
        //     // In a real application, this would navigate to the video page
        //     alert(`Playing video: ${video.title}`);
        // });
        
        videosContainer.appendChild(videoCard);
    });
}

// Add event listeners to category tabs
function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tabs button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // In a real application, this would filter videos by category
            console.log(`Category selected: ${tab.textContent}`);
        });
    });
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check if user prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize the application
function init() {
    renderVideos();
    setupCategoryTabs();
    setupThemeToggle();
    
    // Add event listener to search bar
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log(`Searching for: ${searchTerm}`);
            // In a real application, this would perform a search
            alert(`Searching for: ${searchTerm}`);
        }
    }
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    searchButton.addEventListener('click', handleSearch);
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);