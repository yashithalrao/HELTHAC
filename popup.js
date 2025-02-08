


// const guide = document.querySelector(".guide_real");
// const eye = document.querySelector(".eye");

// const info = document.querySelector(".infolala");


// eye.addEventListener("click", () => {
//     guide.style.display = guide.style.display === "block"?"none":"block";
//     info.style.display = info.style.display === "none"?"block":"none";
// });


// if(!localStorage.getItem("welcome_shown"))
// {
//     alert("Hello, welcome!");
//     localStorage.setItem("welcome_shown", "true");
// }


// //ai shit : 
// const simplify_text = document.querySelector("#simplyfy_complex")
// const visual_org = document.querySelector("#visual_org")
// const reading_flow = document.querySelector("#reading_flow")


// //wait i just need to get value lmao ok 

// const selected_option = document.querySelector("optimize_selector")

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Popup script loaded!");

//     const simplifyButton = document.querySelector("#simplyfy_complex");
//     const visualizeButton = document.querySelector("#visual_org");
//     const readingButton = document.querySelector("#reading_flow");
//     const selectedOption = document.querySelector("#optimize_selector");
//     const inputText = document.querySelector("#user_input"); // Your input field
//     const outputDiv = document.querySelector("#ai_output");  // Where AI response will show

//     function sendToFlask(text, mode) {
//         fetch("http://127.0.0.1:5000/process", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ text: text, mode: mode })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.error) {
//                 outputDiv.innerText = "Error: " + data.error;
//             } else {
//                 outputDiv.innerText = data.output;  // Show AI response
//             }
//         })
//         .catch(error => {
//             console.error("Request failed:", error);
//             outputDiv.innerText = "Error: Unable to connect to AI.";
//         });
//     }

//     // Event Listeners for buttons
//     simplifyButton.addEventListener("click", () => {
//         const text = inputText.value;
//         sendToFlask(text, "simplify");
//     });

//     visualizeButton.addEventListener("click", () => {
//         const text = inputText.value;
//         sendToFlask(text, "structure");
//     });

//     readingButton.addEventListener("click", () => {
//         const text = inputText.value;
//         sendToFlask(text, "summarize");
//     });
// });









// //normal js shit: 




// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Popup script loaded!");

//     const testButton = document.getElementById("testButton");
//     const fontSizeSlider = document.getElementById("font_size_slider");
//     const fontStyleSelector = document.getElementById("font_style_selector");
//     const themeSelector = document.getElementById("theme_selector");
//     const lineSpacingSlider = document.getElementById("line_spacing_slider");
//     const letterSpacingSlider = document.getElementById("letter_spacing_slider");
//     const backgroundColorPicker = document.getElementById("background_color_picker");
//     const textColorPicker = document.getElementById("text_color_picker");

//     // Button to confirm extension works
//     if (testButton) {
//         testButton.addEventListener("click", () => {
//             alert("Extension is working!");
//         });
//     }


// function updateContentStyle(setting, value) {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         if (tabs.length === 0) return;
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             func: (setting, value) => {
//                 document.querySelectorAll("*").forEach((el) => {
//                     el.style[setting] = value;
//                 });
//             },
//             args: [setting, value],
//         });
//     });
// }

//     // Font Size Change
//     if (fontSizeSlider) {
//         fontSizeSlider.addEventListener("input", () => {
//             updateContentStyle("fontSize", fontSizeSlider.value + "px");
//         });
//     }

//     // Font Style Change
//     if (fontStyleSelector) {
//         fontStyleSelector.addEventListener("change", () => {
//             const fontMap = {
//                 open_dyslexia: "'OpenDyslexic', sans-serif",
//                 lexie_readable: "'Lexie Readable', sans-serif",
//                 monospace: "monospace",
//             };
//             updateContentStyle("fontFamily", fontMap[fontStyleSelector.value] || "inherit");
//         });
//     }

//     // Theme Change
//     if (themeSelector) {
//         themeSelector.addEventListener("change", () => {
//             const themeMap = {
//                 creamPaper: { bg: "#FAF3DD", color: "#333" },
//                 default: { bg: "#FFFFFF", color: "#000" },
//                 darkMode: { bg: "#121212", color: "#E0E0E0" },
//                 sepia: { bg: "#704214", color: "#F5DEB3" },
//             };
//             const theme = themeMap[themeSelector.value] || themeMap.default;
//             updateContentStyle("backgroundColor", theme.bg);
//             updateContentStyle("color", theme.color);
//         });
//     }

//     // Line Spacing Change
//     if (lineSpacingSlider) {
//         lineSpacingSlider.addEventListener("input", () => {
//             updateContentStyle("lineHeight", (lineSpacingSlider.value / 10) + "em");
//         });
//     }

//     // Letter Spacing Change
//     if (letterSpacingSlider) {
//         letterSpacingSlider.addEventListener("input", () => {
//             updateContentStyle("letterSpacing", letterSpacingSlider.value + "px");
//         });
//     }

//     // Background Color Change
//     if (backgroundColorPicker) {
//         backgroundColorPicker.addEventListener("input", () => {
//             updateContentStyle("backgroundColor", backgroundColorPicker.value);
//         });
//     }

//     // Text Color Change
//     if (textColorPicker) {
//         textColorPicker.addEventListener("input", () => {
//             updateContentStyle("color", textColorPicker.value);
//         });
//     }
// });



const guide = document.querySelector(".guide_real");
const eye = document.querySelector(".eye");
const info = document.querySelector(".infolala");

eye.addEventListener("click", () => {
    guide.style.display = guide.style.display === "block" ? "none" : "block";
    info.style.display = info.style.display === "none" ? "block" : "none";
});

if (!localStorage.getItem("welcome_shown")) {
    alert("Hello, welcome!");
    localStorage.setItem("welcome_shown", "true");
}

// AI Feature Buttons
const simplifyBtn = document.querySelector("#simplify_complex");
const structureBtn = document.querySelector("#visual_org");
const summarizeBtn = document.querySelector("#reading_flow");

// Function to send AI request & modify page
function sendAIRequest(mode) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: modifyPageWithAI,
            args: [mode],
        });
    });
}

// AI Feature Event Listeners
if (simplifyBtn) simplifyBtn.addEventListener("click", () => sendAIRequest("simplify"));
if (structureBtn) structureBtn.addEventListener("click", () => sendAIRequest("structure"));
if (summarizeBtn) summarizeBtn.addEventListener("click", () => sendAIRequest("summarize"));


document.getElementById("optimize_selector").addEventListener("change", (event) => {
    let mode = event.target.value; // Get selected mode
    sendToFlask(mode);
});

function sendToFlask(mode) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: modifyPageWithAI,
            args: [mode],
        });
    });
}

function modifyPageWithAI(mode) {
    const text = document.body.innerText;
    fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.modified_text) {
            document.body.innerHTML = `<div style="font-size:18px; padding:20px;">${data.modified_text}</div>`;
        } else {
            alert("AI processing failed.");
        }
    })
    .catch((err) => console.error("Error:", err));
}



















// Normal Popup Features
document.addEventListener("DOMContentLoaded", function () {
    console.log("Popup script loaded!");

    const testButton = document.getElementById("testButton");
    const fontSizeSlider = document.getElementById("font_size_slider");
    const fontStyleSelector = document.getElementById("font_style_selector");
    const themeSelector = document.getElementById("theme_selector");
    const lineSpacingSlider = document.getElementById("line_spacing_slider");
    const letterSpacingSlider = document.getElementById("letter_spacing_slider");
    const backgroundColorPicker = document.getElementById("background_color_picker");
    const textColorPicker = document.getElementById("text_color_picker");

    // Button to confirm extension works
    if (testButton) {
        testButton.addEventListener("click", () => {
            alert("Extension is working!");
        });
    }

    function updateContentStyle(setting, value) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: (setting, value) => {
                    document.querySelectorAll("*").forEach((el) => {
                        el.style[setting] = value;
                    });
                },
                args: [setting, value],
            });
        });
    }

    // Font Size Change
    if (fontSizeSlider) {
        fontSizeSlider.addEventListener("input", () => {
            updateContentStyle("fontSize", fontSizeSlider.value + "px");
        });
    }

    // Font Style Change
    if (fontStyleSelector) {
        fontStyleSelector.addEventListener("change", () => {
            const fontMap = {
                open_dyslexia: "'OpenDyslexic', sans-serif",
                lexie_readable: "'Lexie Readable', sans-serif",
                monospace: "monospace",
            };
            updateContentStyle("fontFamily", fontMap[fontStyleSelector.value] || "inherit");
        });
    }

    // Theme Change
    if (themeSelector) {
        themeSelector.addEventListener("change", () => {
            const themeMap = {
                creamPaper: { bg: "#FAF3DD", color: "#333" },
                default: { bg: "#FFFFFF", color: "#000" },
                darkMode: { bg: "#121212", color: "#E0E0E0" },
                sepia: { bg: "#704214", color: "#F5DEB3" },
            };
            const theme = themeMap[themeSelector.value] || themeMap.default;
            updateContentStyle("backgroundColor", theme.bg);
            updateContentStyle("color", theme.color);
        });
    }

    // Line Spacing Change
    if (lineSpacingSlider) {
        lineSpacingSlider.addEventListener("input", () => {
            updateContentStyle("lineHeight", (lineSpacingSlider.value / 10) + "em");
        });
    }

    // Letter Spacing Change
    if (letterSpacingSlider) {
        letterSpacingSlider.addEventListener("input", () => {
            updateContentStyle("letterSpacing", letterSpacingSlider.value + "px");
        });
    }

    // Background Color Change
    if (backgroundColorPicker) {
        backgroundColorPicker.addEventListener("input", () => {
            updateContentStyle("backgroundColor", backgroundColorPicker.value);
        });
    }

    // Text Color Change
    if (textColorPicker) {
        textColorPicker.addEventListener("input", () => {
            updateContentStyle("color", textColorPicker.value);
        });
    }
});
