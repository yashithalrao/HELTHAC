// console.log("Web Accessibility Enhancer content script loaded!");
// document.body.style.border = "5px solid red";

// // here we will be adding the code for the following funct:  front end part 
// //1. spacing : a. spaceing between lines b. spacing between words c. spacing between letters
// //2. font size adjustment
// //3. font style
// //4. font color, background color


// //backend part 
// // simplifying complex ideas 
// // summarizing 
// // highlighting important points
// //better visualization 
// //easier reading flow 
// // none 

// Function to apply spacing adjustments
function applySpacingAdjustments(settings) {
    document.body.style.lineHeight = settings.lineSpacing ? settings.lineSpacing + '%' : 'normal';
    document.body.style.letterSpacing = settings.letterSpacing ? settings.letterSpacing + 'px' : 'normal';
    document.body.style.wordSpacing = settings.wordSpacing ? settings.wordSpacing + 'px' : 'normal';
}

// Function to apply theme
function applyTheme(theme) {
    switch (theme) {
        case 'creamPaper':
            document.body.style.backgroundColor = '#f5deb3';
            document.body.style.color = '#000';
            break;
        case 'darkMode':
            document.body.style.backgroundColor = '#1e1e1e';
            document.body.style.color = '#ffffff';
            break;
        case 'sepia':
            document.body.style.backgroundColor = '#704214';
            document.body.style.color = '#f5f5dc';
            break;
        default:
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
    }
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'applySpacing') {
        applySpacingAdjustments(message);
    } else if (message.action === 'applyTheme') {
        applyTheme(message.theme);
    }
});

// Load saved settings on page load
chrome.storage.sync.get(['lineSpacing', 'letterSpacing', 'wordSpacing', 'selectedTheme'], function(result) {
    applySpacingAdjustments(result);
    applyTheme(result.selectedTheme || 'default');
});


function modifyPageWithAI(mode) {
    fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: document.body.innerText, mode }),
    })
    .then(response => response.json())
    .then(data => {
        let newContent = document.createElement("div");
        newContent.innerHTML = data.modified_text;
        newContent.style.fontSize = "18px";
        newContent.style.lineHeight = "1.5";
        newContent.style.padding = "20px";
        document.body.innerHTML = "";
        document.body.appendChild(newContent);
    })
    .catch(error => console.error("Error:", error));
}
