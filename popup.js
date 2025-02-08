alert("hello welcome")

document.getElementById("testButton").addEventListener("click", () => {
    alert("Extension is working!");
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Popup script loaded!");

    // Get UI elements
    const fontSizeSlider = document.getElementById("font_size_slider");
    const fontStyleSelector = document.getElementById("font_style_selector");
    const themeSelector = document.getElementById("theme_selector");
    const lineSpacingSlider = document.getElementById("line_spacing_slider");
    const letterSpacingSlider = document.getElementById("letter_spacing_slider");
    const backgroundColorPicker = document.getElementById("background_color_picker");
    const textColorPicker = document.getElementById("text_color_picker");

    // Send messages to content.js to update styles
    function updateContentStyle(setting, value) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: (setting, value) => {
                    document.body.style[setting] = value;
                },
                args: [setting, value],
            });
        });
    }

    // Font Size Change
    fontSizeSlider.addEventListener("input", () => {
        updateContentStyle("fontSize", fontSizeSlider.value + "px");
    });

    // Font Style Change
    fontStyleSelector.addEventListener("change", () => {
        const fontMap = {
            open_dyslexia: "'OpenDyslexic', sans-serif",
            "lexie-readable": "'Lexie Readable', sans-serif",
            monospace: "monospace",
        };
        updateContentStyle("fontFamily", fontMap[fontStyleSelector.value]);
    });

    // Theme Change
    themeSelector.addEventListener("change", () => {
        const themeMap = {
            creamPaper: { bg: "#FAF3DD", color: "#333" },
            default: { bg: "#FFFFFF", color: "#000" },
            darkMode: { bg: "#121212", color: "#E0E0E0" },
            sepia: { bg: "#704214", color: "#F5DEB3" },
        };
        const theme = themeMap[themeSelector.value];
        updateContentStyle("backgroundColor", theme.bg);
        updateContentStyle("color", theme.color);
    });

    // Line Spacing Change
    lineSpacingSlider.addEventListener("input", () => {
        updateContentStyle("lineHeight", lineSpacingSlider.value / 10);
    });

    // Letter Spacing Change
    letterSpacingSlider.addEventListener("input", () => {
        updateContentStyle("letterSpacing", letterSpacingSlider.value + "px");
    });

    // Background Color Change
    backgroundColorPicker.addEventListener("input", () => {
        updateContentStyle("backgroundColor", backgroundColorPicker.value);
    });

    // Text Color Change
    textColorPicker.addEventListener("input", () => {
        updateContentStyle("color", textColorPicker.value);
    });
});

