document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the player's gem count from localStorage, or default to 0 if not found
    let gems = parseInt(localStorage.getItem('playerGems')) || 0;
    document.getElementById('gemCount').textContent = gems;

    // Figurine Selection logic
    const figurines = document.querySelectorAll(".figurine");
    let selectedFigurine = localStorage.getItem('selectedFigurine') || "None";
    document.getElementById("selectedFigurine").textContent = selectedFigurine;

    // Loop through each figurine and add event listeners for selecting a figurine
    figurines.forEach(figurine => {
        // Check if the figurine is the currently selected one and mark it
        if (figurine.dataset.type === selectedFigurine) {
            figurine.classList.add("selected-figurine");
        }

        figurine.addEventListener("click", function() {
            // Remove the selection from all figurines
            figurines.forEach(f => f.classList.remove("selected-figurine"));

            // Set the clicked figurine as the selected one
            selectedFigurine = this.dataset.type;
            document.getElementById("selectedFigurine").textContent = selectedFigurine;
            localStorage.setItem("selectedFigurine", selectedFigurine);

            // Highlight the selected figurine
            this.classList.add("selected-figurine");
        });
    });

    // Load rewards from localStorage and display them, or show a message if there are no rewards
    let rewards = JSON.parse(localStorage.getItem('playerRewards')) || [];

    if (rewards.length === 0) {
        document.getElementById('rewardList').innerHTML = "<li>No rewards earned yet!</li>";
    } else {
        let rewardList = document.getElementById('rewardList');
        rewards.forEach(function(reward) {
            let li = document.createElement('li');
            li.classList.add('reward-item');
            li.textContent = reward;
            rewardList.appendChild(li);
        });
    }

    // Handling the purchase of clothing items
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Retrieve the price of the item
            let price = parseInt(this.parentElement.dataset.price);

            // Check if the player has enough gems to buy the item
            if (gems >= price) {
                gems -= price;
                localStorage.setItem("playerGems", gems); // Update gem count in localStorage
                document.getElementById("gemCount").textContent = gems; // Update gem display
                alert("Item purchased successfully!");

                // Optionally, add the purchased item to the player's rewards list
                let purchasedItem = this.previousElementSibling.alt; // Get the item name from the image alt text
                let playerRewards = JSON.parse(localStorage.getItem('playerRewards')) || [];
                playerRewards.push(purchasedItem); // Add the purchased item to the rewards array
                localStorage.setItem('playerRewards', JSON.stringify(playerRewards)); // Save the rewards back to localStorage
            } else {
                alert("Not enough gems!"); // Alert if the player doesn't have enough gems
            }
        });
    });
});

