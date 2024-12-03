// Chatbot JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const chatbotContainer = document.querySelector(".chatbot-container");
    const chatbotToggleBtn = document.getElementById("chatbot-toggle-btn");
    const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSendBtn = document.getElementById("chatbot-send-btn");
  
    // Toggle chatbot visibility
    chatbotToggleBtn.addEventListener("click", () => {
      chatbotContainer.style.display = "flex";
      chatbotToggleBtn.style.display = "none";
    });
  
    chatbotCloseBtn.addEventListener("click", () => {
      chatbotContainer.style.display = "none";
      chatbotToggleBtn.style.display = "block";
    });
  
    // Handle sending a message
    const sendMessage = () => {
      const userInput = chatbotInput.value.trim();
      if (userInput === "") return;
  
      // Display user message
      const userMessage = document.createElement("div");
      userMessage.classList.add("message", "user-message");
      userMessage.textContent = userInput;
      chatbotMessages.appendChild(userMessage);
  
      // Scroll to the latest message
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  
      // Clear input
      chatbotInput.value = "";
  
      // Generate bot response
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
  
        // Simple predefined responses
        const responses = {
          hello: "Hi there! 👋 How can I help you today?",
          about: "Hey! I'm Andronica, a Junior Software Developer. I’m detail-oriented, highly motivated, and passionate about coding! Let me know if you'd like to hear more about my journey. 😊",
          skills: "I’m skilled in HTML, CSS, JavaScript, SQL, and .NET Core. Oh, and I’m a pro with Git for version control. Need help with any of these? Let me know! 💻",
          education: "I hold a National Diploma in Financial Information Systems. 📚 Feel free to ask me about my academic background!",
          experience: "I’ve built web applications and worked with agile methodologies. If you’re curious about my projects, just ask! 🚀",
          contact: "You can email me at maswanganyea30@gmail.com, give me a call at 0684193783, or connect with me on LinkedIn here: https://www.linkedin.com/in/andronica-maswanganye. Can’t wait to hear from you! ✨",
          adaptability: "Adaptability is my superpower! 🚀 I thrive in learning new tools and embracing challenges. Let’s talk about how I can add value!",
          default: "I’m here to chat about my portfolio, skills, or experience. Ask me anything, and I’ll do my best to answer! 😄"
        };
  
        const lowerInput = userInput.toLowerCase();
        botMessage.textContent =
          responses[lowerInput] || responses["default"];
  
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 1000);
    };
  
    chatbotSendBtn.addEventListener("click", sendMessage);
  
    chatbotInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  });
  