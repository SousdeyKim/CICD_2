document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        enableDarkMode();
    }
    
    darkModeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<span class="toggle-icon">☀️</span><span class="toggle-text">Light Mode</span>';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        body.removeAttribute('data-theme');
        darkModeToggle.innerHTML = '<span class="toggle-icon">🌙</span><span class="toggle-text">Dark Mode</span>';
        localStorage.setItem('theme', 'light');
    }
    
    // Watch for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        if (!localStorage.getItem('theme')) {
            if (newColorScheme === 'dark') {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
});
