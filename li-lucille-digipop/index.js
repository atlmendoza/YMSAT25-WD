// Function to simulate a mini-game reward system
function playMiniGame() {
    // Define the array of possible rewards
    const rewards = [
        "Cute Hat",
        "Stylish Sunglasses",
        "Charming Shoes",
        "Trendy Shirt",
        "Adorable Accessory"
    ];

    // Randomly select a reward
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const selectedReward = rewards[randomIndex];

    // Display the reward in the popup
    document.getElementById("rewardText").textContent = `You won: ${selectedReward}!`;
    document.getElementById("rewardPopup").style.display = "block";
}

// Function to toggle photos based on the button clicked
document.getElementById("lucille").addEventListener("click", function() {
    let lucillePhoto = document.getElementById("lucille-photo");
    let chescaPhoto = document.getElementById("chesca-photo");

    // Toggle visibility of Lucille's photo
    if (lucillePhoto.style.display === "block") {
        lucillePhoto.style.display = "none"; // Hide Lucille's photo
    } else {
        lucillePhoto.style.display = "block"; // Show Lucille's photo
        chescaPhoto.style.display = "none";  // Hide Chesca's photo
    }
});

document.getElementById("chesca").addEventListener("click", function() {
    let chescaPhoto = document.getElementById("chesca-photo");
    let lucillePhoto = document.getElementById("lucille-photo");

    // Toggle visibility of Chesca's photo
    if (chescaPhoto.style.display === "block") {
        chescaPhoto.style.display = "none"; // Hide Chesca's photo
    } else {
        chescaPhoto.style.display = "block"; // Show Chesca's photo
        lucillePhoto.style.display = "none"; // Hide Lucille's photo
    }
});

function toggleImage(imgElement, img1, img2) {
    // Check if the current image is img1
    if (imgElement.src === img1) {
        imgElement.src = img2; // Change to img2
    } else {
        imgElement.src = img1; // Change back to img1
    }
}
