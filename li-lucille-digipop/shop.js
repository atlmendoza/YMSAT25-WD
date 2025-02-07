document.addEventListener("DOMContentLoaded", function() {
    // Load initial gems from localStorage and display them
    let gems = parseInt(localStorage.getItem('playerGems')) || 0;
    document.getElementById('gemCountShop').textContent = gems;

    // Initialize the figurine selection event listeners
    const figurineOptions = document.querySelectorAll('input[name="figurine"]');
    figurineOptions.forEach(option => {
        option.addEventListener('click', () => updateFigurine(option.value));
    });
});

// Clothing items for each figurine
        const clothingItems = {
            "Smiski": [
                { name: "Limited Edition: Pisay Skirt", cost: 10, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/smiski_skirt.png?v=1738858694779" },
                { name: "Balenciova Hair Clip", cost: 15, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/smiski_clip.png?v=1738858690318https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/sonny_tiara.png?v=1738858679100" },
                { name: "Pradé Wig", cost: 20, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/smiski_wig.png?v=1738858701884" }
            ],
            "Sonny Angel": [
                { name: "Louvreton Necklace", cost: 12, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/sonny_necklace.png?v=1738858683301" },
                { name: "Doir Dress", cost: 18, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/sonny_dress.png?v=1738858676407" },
                { name: "Channell Tiara", cost: 8, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/sonny_tiara.png?v=1738858679100" }
            ],
            "Mofusand": [
                { name: "Gutti Handbag", cost: 14, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/mofusand_bag.png?v=1738860170053" },
                { name: "MofuSkirt", cost: 16, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/mofusand_skirt.png?v=1738860171937" },
                { name: "Lobiton Ribbon", cost: 10, img: "https://cdn.glitch.global/cc92d4a5-369d-405a-a3a0-74560d8a6cbc/mofusand_ribbon.png?v=1738860167160" }
                      ]
        };

// Update the clothing catalog based on selected figurine
function updateFigurine(figurine) {
    const catalog = document.getElementById('clothingCatalog');
    catalog.innerHTML = '';  // Clear existing catalog

    // Get clothing items for the selected figurine
    const selectedClothingItems = clothingItems[figurine];
    selectedClothingItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('clothing-item');
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="clothing-image">
            <span>${item.name} - ${item.cost} gems</span>
            <button onclick="selectItem('${item.name}', ${item.cost}, '${figurine}')">Select</button>
        `;
        catalog.appendChild(itemDiv);
    });
}

// Handle item selection
function selectItem(itemName, itemCost, figurine) {
    let gems = parseInt(localStorage.getItem('playerGems')) || 0;
    if (gems >= itemCost) {
        localStorage.setItem('selectedItem', itemName);
        localStorage.setItem('selectedItemCost', itemCost);
        alert(`You have selected ${itemName} for ${figurine}!`);
    } else {
        alert('Not enough gems!');
    }
}

// Handle item purchase
function buyItem() {
    let gems = parseInt(localStorage.getItem('playerGems')) || 0;
    let selectedItem = localStorage.getItem('selectedItem');
    let itemCost = parseInt(localStorage.getItem('selectedItemCost'));

    if (selectedItem && itemCost && gems >= itemCost) {
        gems -= itemCost;
        localStorage.setItem('playerGems', gems);
        alert(`You have bought: ${selectedItem}`);
        localStorage.removeItem('selectedItem');
        localStorage.removeItem('selectedItemCost');
        // Reload the page to update gems and reset selection
        window.location.href = 'shop.html';
    } else {
        alert('You have not selected an item or don\'t have enough gems!');
    }
}
