const template = new Map();

async function init() {
    const response = fetch("../../assets/json/map-templates.json");
    const data = response.ok ? await response.json() : [];

    for (const row of data) {
        const key = row[0];
        template.set(key, row);
    }
}

function getMap(key) {
    if (template.size === 0) {
        console.warn("Attempted to retrieve map while template wasn't initialized.");
        return;
    }

    return template.get(key);
}

export default {
    init, 
    getMap
};