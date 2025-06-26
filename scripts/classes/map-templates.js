export default class MapTemplates {
    #maps = new Map();

    async init() {
        const response = await fetch(".assets/json/map-templates.json");
        const data = response.ok ? response.json() : [];

        const results = new Map();
        for (const row of data) {
            const key = row.shift();
            results.set(key, row);
        }

        this.#maps = results;
        return this;
    }

    getMap(key) {
        if (!this.#maps) {
            console.log("MapTemplates attempted to return maps, but maps weren't initialized.");
            return;
        }
        return this.#maps.get(key);
    }
}