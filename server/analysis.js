const cricketers = require("./data/cricketers");

function calculateMatch(userTraits) {
  const scores = {};

  // 1. Calculate frequency of each trait in user's answers
  const traitFrequency = {};
  userTraits.forEach(t => {
    traitFrequency[t] = (traitFrequency[t] || 0) + 1;
  });

  Object.entries(cricketers).forEach(([name, data]) => {
    let score = 0;

    // 2. Sum up frequencies for this cricketer's traits
    // If a cricketer has 'calm' and user picked 'calm' 3 times, add 3.
    data.traits.forEach(trait => {
      if (traitFrequency[trait]) {
        score += traitFrequency[trait];
      }
    });

    // 3. Normalize score?
    // Max possible score for a cricketer = sum of their trait frequencies * max_weight? 
    // Easier: Just use raw weighted score first, then convert to percentage relative to "perfect match".
    // A perfect match would be if EVERY user answer contributed to this cricketer.
    // Max traits collected = userTraits.length. 
    // So if user picked 20 options * ~2 traits/option = 40 traits.
    // If a cricketer hits 15 of those, that's their score.

    // Let's stick to a relative percentage against the "Best Possible for THIS User" or just raw comparison.
    // The previous logic returned percentage 0-100. Frontend expects %.

    // Let's cap matching. If you matched 10+ points, that's high.
    // Let's refine:
    // We compare the cricketer's score against the TOTAL traits they COULD have matched.
    // Actually, simple percentage of "Traits Matched / Total User Traits" favors generic players?
    // No, let's do: Score / (CricketerTraitsCount * AverageMultiplier) 

    // Alternative:
    // Similarity Score.
    // Let's use the frequency Score calculated above.

    // To make it a percentage:
    // Estimate max possible score for 20 questions ~ 30-40 points.
    // Let's map the highest scorer to ~95-98% and others relative to that.

    scores[name] = score;
  });

  // Normalize scores to percentages
  const maxScore = Math.max(...Object.values(scores)) || 1;

  Object.keys(scores).forEach(name => {
    // Map maxScore to 98%, others relative
    // Avoid 100% to keep it realistic, or allow it.
    let pct = (scores[name] / maxScore) * 100;
    scores[name] = Math.round(pct);
  });

  return scores;
}

module.exports = calculateMatch;
