const { filterSkillsByCategory, calculateTotalCosts, matchSkillsToUser } = require("../skillswap-functions");


describe("matchSkillsToUser", () => {
    const skills = [
        { title: "Python Tutoring", category: "Programming", price: 20 },
        { title: "JavaScript Help", category: "Programming", price: 25 },
        { title: "Guitar Lessons", category: "Music", price: 15 },
        { title: "Resume Review", category: "Career", price: 0 },
    ];

    test("matches by category and max price", () => {
        const userNeeds = { category: "Programming", maxPrice: 30 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: "Python Tutoring", category: "Programming", price: 20 },
            { title: "JavaScript Help", category: "Programming", price: 25 },
        ]);
    });

    test("filters by max price correctly", () => {
        const userNeeds = { category: "Programming", maxPrice: 20 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: "Python Tutoring", category: "Programming", price: 20 },
        ]);
    });

    test("returns empty array when no matches", () => {
        const userNeeds = { category: "Cooking", maxPrice: 100 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([]);
    });

    test("includes free skills when max price is 0", () => {
        const userNeeds = { category: "Career", maxPrice: 0 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: "Resume Review", category: "Career", price: 0 },
        ]);
    });
});
