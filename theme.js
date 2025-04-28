/*document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const mainStyle = document.getElementById('main-style');
    const lightStyle = document.getElementById('light-style');
    
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }

    if (!mainStyle || !lightStyle) {
        console.error('Style sheets not found');
        return;
    }

    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    // Add click event listener
    themeToggle.addEventListener('click', () => {
        console.log('Theme toggle clicked');
        const newTheme = mainStyle.disabled ? 'dark' : 'light';
        console.log('Switching to theme:', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        if (theme === 'light') {
            mainStyle.disabled = true;
            lightStyle.disabled = false;
            themeIcon.className = 'fa fa-sun-o';
        } else {
            mainStyle.disabled = false;
            lightStyle.disabled = true;
            themeIcon.className = 'fa fa-moon-o';
        }
    }
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const mainStyle = document.querySelector('link[href="style.css"]');
    const lightStyle = document.querySelector('link[href="light-theme.css"]');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    // Add click event listener
    themeToggle.addEventListener('click', () => {
        const newTheme = mainStyle.disabled ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function setTheme(theme) {
        if (theme === 'light') {
            mainStyle.disabled = true;
            lightStyle.disabled = false;
            themeIcon.className = 'fa fa-sun-o';
            document.body.classList.add('light-theme');
        } else {
            mainStyle.disabled = false;
            lightStyle.disabled = true;
            themeIcon.className = 'fa fa-moon-o';
            document.body.classList.remove('light-theme');
        }
    }
});