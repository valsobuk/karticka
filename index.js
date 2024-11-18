document.addEventListener("DOMContentLoaded", () => {
  const text = `This is a smooth typing effect
  with multiline support.
  It works dynamically and looks greaort.
  It works dynamically and looks great!th typing effect
  with multiline support.th typing effect
  with multiline support.th typing effect
  with multiline support.th typing effect
  with multiline support.`;

  const typingEffectElement = document.getElementById("typing-effect");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingEffectElement.textContent += text.charAt(index);
      index++;

      const delay = text.charAt(index - 1) === "\n" ? 100 : 30;
      setTimeout(type, delay);
    }
  }

  type();
});
