
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create list and append user names
        const userList = document.createElement('ul');
        users.forEach(function(user) {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // On error show a friendly message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the fetch when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});

