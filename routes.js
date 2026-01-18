import fetch from 'node-fetch';

// Hello World route
export const hello = (req, res) => res.send('Hello World!');

// API Names route
export const APINames = async (req, res) => {
    const url = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data;

    try {
        const response = await fetch(url);
        data = await response.json();

        const output = data
            .map(user => `ID: ${user.id}, Name: ${user.name}`)
            .join('<br>');

        return output;
    } catch (error) {
        console.error("Fetch error:", error);
        return "Error loading names.";
    }
};