
const wishes = [
    "",
    "You are more ego than me, Setuju?",
    "Crying is your hobby, Setuju?",
    "You love me, Setuju?"
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
        showPopup("Asal tekan no? pat tekan yes!!");
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
                    showPopup(
                        `HAHAHA saja nak usik! 😘<br><br>
                        Happy Birthday, Balqis!!! 🎉🎂✨ <br><br>
                        Semoga panjang umur, murah rezeki, sihat selalu, dan dilimpahi kebahagiaan. 
                        Terima kasih sebab selalu dengar semua cerita saya, walaupun kadang-kadang bosan. 
                        You always say yes to me, and for that, I’m forever grateful! ❤️<br><br>
                        You’ve been my rock, my support system, and my partner in crime for this whole time together. 
                        Thank you for all the beautiful memories we’ve created. 
                        I’m so glad and happy to be part of your life. I really, truly appreciate you so much, more than words can ever express. <br><br>
                        May today bring you all the joy you deserve, and may our bond grow stronger as time goes on. 
                        You’re the best, Balqis, and I’m so lucky to have you in my life. 
                        Here's to many more adventures, laughs, and unforgettable moments! Love you 🎁💖<br><br>
                        <img src="balqisajiem.jpg" alt="Happy Birthday Image" style="width:100%; max-width:100px; height:100px; border-radius:10px; display:block; margin:10px auto;">`
                    );
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
        showPopup(
            `HAHAHA saja nak usik! 😘<br><br>
            Happy Birthday, Balqis!!! 🎉🎂✨ <br><br>
            Semoga panjang umur, murah rezeki, sihat selalu, dan dilimpahi kebahagiaan. 
            Terima kasih sebab selalu dengar semua cerita saya, walaupun kadang-kadang bosan. 
            You always say yes to me, and for that, I’m forever grateful! ❤️<br><br>
            You’ve been my rock, my support system, and my partner in crime for this whole time together. 
            Thank you for all the beautiful memories we’ve created. 
            I’m so glad and happy to be part of your life. I really, truly appreciate you so much, more than words can ever express. <br><br>
            May today bring you all the joy you deserve, and may our bond grow stronger as time goes on. 
            You’re the best, Balqis, and I’m so lucky to have you in my life. 
            Here's to many more adventures, laughs, and unforgettable moments! Love you 🎁💖<br><br>
            <img src="balqisajiem.jpg" alt="Happy Birthday Image" style="width:100%; max-width:100px; height:100px; border-radius:10px; display:block; margin:10px auto;">`
        );
    }
});

function showPopup(message) {
popupMessage.innerHTML = message; // Use innerHTML to render HTML content
popup.style.display = "block";
    // Play the song
const audio = document.getElementById("birthdaySong");
audio.play();
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
