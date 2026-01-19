const cricketers = require("./data/cricketers");

function calculateMatch(userTraits) {
  const scores = {};

  Object.entries(cricketers).forEach(([name, data]) => {
    let matchCount = 0;

    // Strict matching
    data.traits.forEach(trait => {
      if (userTraits.includes(trait)) {
        matchCount++;
      }
    });

    // Score Calculation Upgrade:
    // We normalize by the number of player traits to see "how much of THIS player fits user choices"
    // But we also add a weight for absolute number of matches to reward hitting many key traits.

    const traitCount = Math.max(data.traits.length, 5);

    // Base Percentage: (Matches / PlayerTraits) * 100
    // If a player has only 5 traits and you match 5, that's 100%.
    // If a player has 10 traits and you match 5, that's 50%.
    // This rewards specificity.

    let rawScore = (matchCount / traitCount) * 100;

    // Tie-Breaker / Differentiator
    // If the decimal is .0, add a tiny random fraction based on name hash to keep order stable but distinct? 
    // No, better to stick to pure logic.
    // Let's round it to 1 decimal place to avoid long floats but distinct enough.

    scores[name] = Math.round(rawScore);
  });

  return scores;
}

module.exports = calculateMatch;
