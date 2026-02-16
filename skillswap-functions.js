function filterSkillsByCategory(skills, category) {
    if (!Array.isArray(skills)) return [];

    if (category === "All") return skills;

    return skills.filter((skill) => skill.category === category);
}

function calculateTotalCosts(hourlyRate, hours) {
    const rate = Number(hourlyRate);
    const hrs = Number(hours);

    if (!Number.isFinite(rate) || !Number.isFinite(hrs)) return 0;
    if (rate < 0 || hrs < 0) return 0;

    return rate * hrs;
}

function matchSkillsToUser(userNeeds, skills) {
    if (!userNeeds || !Array.isArray(skills)) return [];

    const category = userNeeds.category;
    const maxPrice = Number(userNeeds.maxPrice);

    if (!category || !Number.isFinite(maxPrice)) return [];

    return skills.filter((skill) => {
        const price = Number(skill.price);
        return (
            skill.category === category &&
            Number.isFinite(price) &&
            price <= maxPrice
        );
    });
}

module.exports = {
    filterSkillsByCategory,
    calculateTotalCosts,
    matchSkillsToUser,
};




