// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // 1. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // 3. Fetch data from the API
        const response = await fetch(apiUrl);

        // Optional: you could check response.ok here
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }

        const users = await response.json();

        // 4. Clear the loading message
        dataContainer.innerHTML = '';

        // 5. Create a <ul> to hold user names
        const userList = document.createElement('ul');

        // 6. Loop through users and create <li> for each name
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 7. Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 8. Handle any errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 9. Run fetchUserData after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});
