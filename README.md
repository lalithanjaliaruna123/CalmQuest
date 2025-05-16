# CalmQuest - Stress Assessment & Relief App 🌿
A stress assessment and relief web application

[![GitHub license](https://img.shields.io/github/license/lalithanjaliaruna123/CalmQuest)](https://github.com/lalithanjaliaruna123/CalmQuest/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/lalithanjaliaruna123/CalmQuest)](https://github.com/lalithanjaliaruna123/CalmQuest/issues)
[![Live Demo](https://img.shields.io/website?url=https%3A%2F%2Flalithanjaliaruna123.github.io%2FCalmQuest)](https://lalithanjaliaruna123.github.io/CalmQuest)


## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## About
CalmQuest is an interactive web application designed to help users:
- Assess stress levels through a clinically-inspired questionnaire
- Receive personalized coping strategies based on results
- Access immediate relaxation tools
- Get weather-appropriate wellness suggestions

## Features

### Assessment Tools
- 📝 8-question stress evaluation
- 📊 Visual stress level indicator
- 🎯 Personalized recommendations

### Relaxation Resources
- 🌬️ Guided breathing exercises (4-7-8 technique)
- 🌳 Nature sound player (optional)
- 🧠 5-4-3-2-1 grounding method

### Technical Highlights
- 🌦️ Real-time weather integration
- 📱 Mobile-responsive design
- 🎨 Customizable color themes

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge)
- (Optional) Visual Studio Code with Live Server extension

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lalithanjaliaruna123/CalmQuest.git
   cd CalmQuest
2. Set up required files:

Ensure all assets are in place:
/index.html
/style.css
/script.js
/assets/logo.png
/assets/favicon.ico
/sounds/forest.mp3 (optional)

3. Launch the application:

Open index.html directly in your browser, or

Use VS Code's Live Server for optimal experience

### Usage
1. Initial Assessment:

Select your current mood using the emoji tracker

Complete all 8 questions honestly

Submit to receive your stress evaluation

2. Results Dashboard:

View your stress level (Low/Medium/High)

Explore recommended coping strategies

Try the interactive breathing exercise

3. Ongoing Tools:

Use Quick Calm for immediate relief

Check weather-specific suggestions

Read daily inspirational quotes

### API Integration
The app integrates with these services:

Service       	       Usage	                      Key Required
OpenWeatherMap	 Weather data & suggestions	        Yes
ZenQuotes	       Inspirational quotes	              No

To add your OpenWeatherMap API key:
// In script.js
const WEATHER_API_KEY = "your_api_key_here";

### Customization
Simple Changes
Branding: Replace /assets/logo.png and /assets/favicon.ico

Colors: Modify in style.css:
:root {
  --primary: #4f46e5; /* Main brand color */
  --secondary: #10b981; /* Accent color */
}
**Advanced Modifications**
Add new questionnaire items in index.html

Extend coping strategies in script.js

Implement user persistence with localStorage

### Contributing
We welcome contributions! Please follow these steps:

**Fork the repository**

Create a feature branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

**Open a Pull Request**

See our Contribution Guidelines for details.

### License
Distributed under the MIT License. See LICENSE for more information.

Made with ❤️ by Lalithanjali Aruna 
## Live Demo
➡️ [Try CalmQuest Now](https://lalithanjaliaruna123.github.io/CalmQuest)

## Found an Issue?
🐛 [Report a Problem](https://github.com/lalithanjaliaruna123/CalmQuest/issues/new/choose)

Key improvements made:
1. Added **status badges** for license, issues, and live demo
2. Organized content into clearer sections
3. Added **prerequisites** section
4. Created a **comparison table** for APIs
5. Improved **customization instructions**
6. Added **placeholder for contribution guidelines**
7. Enhanced **formatting and readability**
8. Made **technical details** more precise
9. Added **emoji visual cues** for better scanning

Would you like me to:
1. Add a more detailed troubleshooting section?
2. Include a code snippet example for customization?
3. Add a version compatibility table?
4. Include a screenshot guide for visual reference?
