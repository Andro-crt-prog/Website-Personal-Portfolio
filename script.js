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
            hello: "Hi there! How can I assist you today?",
            skills: "I specialize in HTML, CSS, JavaScript, SQL, and .NET Core. I also excel in Git version control.",
            experience: "I have experience in developing web applications, and using agile methodologies.",
            contact: "You can reach me at maswanganyea30@gmail.com or connect with me on LinkedIn.",
            adaptability: "Adaptability is one of my core strengths. I excel in learning new tools and adapting to challenges.",
            default: "I'm here to answer questions about my portfolio, skills, or experience. Ask me something specific!",
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
  