document.addEventListener('DOMContentLoaded', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    const template = document.getElementById('item-template');
    const itemList = document.getElementById('item-list');

    items.forEach(item => {
        const clone = document.importNode(template.content, true);
        clone.querySelector(".item-name").textContent = item;
        itemList.appendChild(clone);
    });

    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
