# Cognitive Accessibility Browser Extension

## Overview
Millions of individuals with reading disabilities, ADHD, and dyslexia struggle with engaging in daily content due to inadequate accessibility tools. This browser extension leverages AI to improve cognitive accessibility while preserving the depth and integrity of the content.

## Features
- **Breakdown Content Mode**: Simplifies complex sentences for easier comprehension.
- **Structure Reading Mode**: Enhances text readability for dyslexic users.
- **Optimize for Focus Mode**: Summarizes content to help ADHD users maintain attention.
- **Customization Options**: Users can adjust font size, spacing, and select dyslexia-friendly fonts.

## Tech Stack
### **Frontend:**
- HTML, CSS, JavaScript
- Chrome Runtime API for extension handling

### **Backend:**
- Flask (Python) for processing requests
- Meta-Llama-3.1-70B model for AI-driven text transformation
- Datasets: WikiLarge (simplification), CNN/DailyNews (summarization)
- TF-IDF for key information extraction
