const WEATHER_API_KEY = "374a068efbd6dfe7185bcabc4ce53a86";
const MAX_STRESS_SCORE = 24;
let currentMood = null;
let breathingInterval;

// Mood tracker functionality
document.querySelectorAll('.emoji-options span').forEach(emoji => {
  emoji.addEventListener('click', function() {
    currentMood = this.getAttribute('data-mood');
    document.querySelectorAll('.emoji-options span').forEach(e => {
      e.style.transform = 'scale(1)';
      e.style.opacity = '0.7';
    });
    this.style.transform = 'scale(1.3)';
    this.style.opacity = '1';
  });
});


// Breathing exercise
function startBreathingExercise() {
  const text = document.querySelector('.breathing-text');
  let phase = 0;
  
  breathingInterval = setInterval(() => {
    phase = (phase + 1) % 4;
    switch(phase) {
      case 0: text.textContent = "Breathe in..."; break;
      case 1: text.textContent = "Hold..."; break;
      case 2: text.textContent = "Breathe out..."; break;
      case 3: text.textContent = "Hold..."; break;
    }
  }, 4000);
}

document.getElementById('stop-breathing').addEventListener('click', function() {
  clearInterval(breathingInterval);
  document.getElementById('breathing-exercise').classList.add('hidden');
});

// Quick calm technique
document.getElementById('quick-calm').addEventListener('click', function() {
  const steps = [
    "Look around and name 5 things you can see",
    "Focus on 4 things you can touch",
    "Notice 3 sounds you can hear",
    "Identify 2 smells you can detect",
    "Name 1 thing you can taste"
  ];
  
  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      alert(steps[currentStep]);
      currentStep++;
    } else {
      clearInterval(interval);
      alert("You've completed the grounding exercise. How do you feel now?");
    }
  }, 10000);
});

// Affirmation generator
function generateAffirmation() {
  const affirmations = [
    "I am capable of handling whatever comes my way",
    "My challenges help me grow",
    "I choose peace over worry",
    "I am enough just as I am",
    "I release what I cannot control"
  ];
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}

// Show coping strategies based on stress level
function showCopingMeasures(level) {
  const measures = document.getElementById("coping-measures");
  measures.innerHTML = "";
  let tips = [];

  if (level === "Low") {
    tips = [
      "Keep a consistent sleep schedule and aim for 7-9 hours nightly",
      "Practice 10 minutes of mindfulness meditation each morning",
      "Maintain a gratitude journal - write 3 things you're thankful for daily",
      "Take short movement breaks every hour if you sit for long periods",
      "Stay hydrated and eat balanced meals throughout the day"
    ];
  } else if (level === "Moderate") {
    tips = [
      "Try the 4-7-8 breathing technique: inhale 4s, hold 7s, exhale 8s",
      "Schedule 'worry time' - 15 minutes to process concerns then move on",
      "Connect with a friend or family member about how you're feeling",
      "Take a 20-minute walk in nature to reset your nervous system",
      "Reduce caffeine and screen time, especially before bedtime"
    ];
  } else if (level === "High") {
    tips = [
      "Contact a counselor or helpline for professional support",
      "Practice progressive muscle relaxation (tense/release each muscle group)",
      "Implement the 5-4-3-2-1 grounding technique during anxious moments",
      "Schedule complete rest periods without any obligations",
      "Consider a digital detox - step away from work/study screens for set periods"
    ];
  }

  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    measures.appendChild(li);
  });
}

// Handle stress form submission
document.getElementById("stressForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  let score = 0;
  
  // Check if all questions are answered
  let allAnswered = true;
  for (let i = 1; i <= 8; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      allAnswered = false;
      break;
    }
    score += parseInt(selected.value);
  }

  if (!allAnswered) {
    alert("Please answer all questions to get an accurate assessment.");
    return;
  }

  // Calculate percentage for progress bar
  const percentage = (score / MAX_STRESS_SCORE) * 100;
  document.getElementById("stress-progress").style.width = `${percentage}%`;

  // Show results with animation
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const levelElement = document.getElementById("stress-level");
  const suggestion = document.getElementById("suggestion");

  // Remove previous stress level classes
  levelElement.className = '';
  
  if (score <= 8) {
    levelElement.innerText = "Low Stress";
    levelElement.classList.add("low-stress");
    suggestion.innerText = "You're managing well! Keep up your healthy habits and self-care routines.";
    showCopingMeasures("Low");
  } else if (score <= 16) {
    levelElement.innerText = "Moderate Stress";
    levelElement.classList.add("moderate-stress");
    suggestion.innerText = "You're experiencing some stress. Try incorporating relaxation techniques into your daily routine.";
    showCopingMeasures("Moderate");
    document.getElementById('breathing-exercise').classList.remove('hidden');
    startBreathingExercise();
  } else {
    levelElement.innerText = "High Stress";
    levelElement.classList.add("high-stress");
    suggestion.innerText = "Your stress levels are concerning. Please consider reaching out for support and prioritizing self-care.";
    showCopingMeasures("High");
    document.getElementById('breathing-exercise').classList.remove('hidden');
    startBreathingExercise();
  }

  // Add affirmation
  document.getElementById('affirmation').textContent = generateAffirmation();
  getQuote();
});

// Fetch motivational quote
function getQuote() {
  // First try ZenQuotes API
  fetch("https://zenquotes.io/api/random")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    })
    .then(data => {
      document.getElementById("quote").innerText = `"${data[0].q}" — ${data[0].a}`;
    })
    .catch(() => {
      // Fallback to local quotes if API fails
      const fallbackQuotes = [
        {q: "You are enough just as you are.", a: "Megan Markle"},
        {q: "This too shall pass.", a: "Persian Proverb"},
        {q: "The only way out is through.", a: "Robert Frost"},
        {q: "You don't have to control your thoughts. You just have to stop letting them control you.", a: "Dan Millman"},
        {q: "Self-care is how you take your power back.", a: "Lalah Delia"}
      ];
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      document.getElementById("quote").innerText = `"${randomQuote.q}" — ${randomQuote.a}`;
    });
}

// Fetch weather data and give coping advice
function getWeather() {
  if (!navigator.geolocation) {
    document.getElementById("weather").innerText = "Weather: Enable location to get personalized advice";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
        .then(res => {
          if (!res.ok) throw new Error("Weather data unavailable");
          return res.json();
        })
        .then(data => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp);
          let advice = "";
          let emoji = "☀️";

          if (weather.includes("Rain") || weather.includes("Drizzle")) {
            emoji = "🌧️";
            advice = " — Perfect time for cozy indoor activities like journaling or meditation.";
          } else if (weather.includes("Thunderstorm")) {
            emoji = "⛈️";
            advice = " — Stay safe indoors and try calming activities like deep breathing.";
          } else if (weather.includes("Cloud")) {
            emoji = "☁️";
            advice = " — Gentle weather for reflection or a mindful walk.";
          } else if (weather.includes("Clear")) {
            emoji = "☀️";
            advice = " — Great day for outdoor stress relief like walking in nature.";
          } else if (weather.includes("Snow")) {
            emoji = "❄️";
            advice = " — Try mindful movement indoors if it's too cold outside.";
          }

          document.getElementById("weather").innerHTML = 
            `${emoji} Current Weather: ${weather}, ${temp}°C${advice}`;
        })
        .catch(() => {
          document.getElementById("weather").innerText = "Weather data unavailable";
        });
    },
    () => {
      document.getElementById("weather").innerText = "Weather: Enable location for personalized advice";
    }
  );
}

// Reset the quiz
function resetQuiz() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("stressForm").reset();
  document.getElementById("coping-measures").innerHTML = "";
  document.getElementById("quote").innerText = "Loading inspirational quote...";
  document.getElementById("affirmation").textContent = "";
  document.getElementById("stress-progress").style.width = "0%";
  clearInterval(breathingInterval);
  document.getElementById('breathing-exercise').classList.add('hidden');
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  getWeather();
  getQuote();
});