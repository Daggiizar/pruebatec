const findBestCombination = (products, budget) => {
    products.sort((a, b) => a.price - b.price);
    let bestCombo = [];
    let maxTotal = 0;

    const backtrack = (index, currentCombo, currentTotal) => {
        if (currentTotal > budget) return;
        if (currentTotal > maxTotal) {
            maxTotal = currentTotal;
            bestCombo = [...currentCombo];
        }
        for (let i = index; i < products.length; i++) {
            backtrack(i + 1, [...currentCombo, products[i]], currentTotal + products[i].price);
        }
    };

    backtrack(0, [], 0);
    return bestCombo;
};

export { findBestCombination };