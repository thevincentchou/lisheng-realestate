const wikiData = [
    {
        title: 'Getting Started',
        content: 'This is a guide to help new employees get started with our company.'
    },
    {
        title: 'Company Policies',
        content: 'This section outlines the company policies and guidelines that all employees must follow.'
    },
    // Add more wiki entries here
];

const contentElement = document.getElementById('content');

wikiData.forEach(entry => {
    const card = `
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-2">${entry.title}</h2>
            <p>${entry.content}</p>
        </div>
    `;
    contentElement.insertAdjacentHTML('beforeend', card);
});
