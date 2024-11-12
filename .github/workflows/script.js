
const wishes = [
    "Hang sebenarnya tak cantik, Setuju?",
    "Hang pantang nampak makanan, Setuju?",
    "Hang lagi lemah dari aku bab hiking, Setuju?",
    "Hang sayang aku, Setuju?"
];

let currentWishIndex = 0;
const wishElement = document.getElementById("wish");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

const pranks = [
    // First prank: The "No" button moves randomly
    function () {
        noBtn.style.position = "absolute";
        noBtn.style.top = `${Math.random() * 80 + 10}vh`;
        noBtn.style.left = `${Math.random() * 80 + 10}vw`;
    },
    // Second prank: "No" button rotates and falls
    function () {
        noBtn.classList.add("animated-no");
        setTimeout(() => noBtn.style.display = "none", 1500);
    },
    // Third prank: Popup shows a funny message
    function () {
        showPopup("Hang ingat aku nak bagi hang tekan no");
    },
    // Fourth prank: Spawn multiple "Yes" buttons and remove "No"
    function () {
        noBtn.remove();
        for (let i = 0; i < 100; i++) {
            const btn = document.createElement("button");
            btn.textContent = "Yes";
            btn.className = "yes-btn";
            btn.style.position = "absolute";
            btn.style.top = `${Math.random() * 80 + 10}vh`;
            btn.style.left = `${Math.random() * 80 + 10}vw`;
            btn.style.fontSize = "14px"; // Mobile-friendly size
            btn.style.padding = "8px 16px";
            document.body.appendChild(btn);
            btn.addEventListener("click", () => {
                currentWishIndex++;
                if (currentWishIndex < wishes.length) {
                    wishElement.textContent = wishes[currentWishIndex];
                    document.querySelectorAll(".yes-btn").forEach(b => b.remove());
                    resetNoButton();
                } else {
                    showPopup("HAHAHA saja ja usik.<br><br> Happy birthday yan!!! <br><br> Semoga Panjang Umur, Murah Rezeki, Sihat Slalu, Thankyou jadi kawan yang baik!! i appreaciate you HOHO, Dah tu ja Bye Bye..<br><br>");
                }
            });
        }
    }
];

yesBtn.addEventListener("click", () => {
    currentWishIndex++;
    if (currentWishIndex < wishes.length) {
        wishElement.textContent = wishes[currentWishIndex];
        resetNoButton();
    } else {
        showPopup("HAHAHA saja ja usik.<br><br> Happy birthday yan!!! <br><br> Semoga Panjang Umur, Murah Rezeki, Sihat Slalu, Thankyou jadi kawan yang baik!! i appreaciate you HOHO, Dah tu ja Bye Bye..<br><br>");
    }
});

function showPopup(message) {
popupMessage.innerHTML = message; // Use innerHTML to render HTML content
popup.style.display = "block";
}

noBtn.addEventListener("click", () => {
    pranks[currentWishIndex % pranks.length]();
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});



function resetNoButton() {
    noBtn.style.position = "static";
    noBtn.style.transform = "none";
    noBtn.style.display = "inline-block";
    noBtn.textContent = "No";
    noBtn.classList.remove("animated-no");
    noBtn.style.background = "#f44336";
}