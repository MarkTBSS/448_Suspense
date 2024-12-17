import connectToDatabase from './database.js';

export const getCabins = async function () {
    try {
        const db = connectToDatabase();
        const stmt = db.prepare(`
            SELECT id, name, maxCapacity, regularPrice, discount, image
            FROM cabins
            ORDER BY name
        `);
        // For testing
        //await new Promise((res) => setTimeout(res, 2000));

        const data = stmt.all();
        db.close();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
};