import { useState, useEffect } from "react";

const Typewriter = ({ words, typeSpeed = 100, deleteSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState(""); // Current text being displayed
  const [wordIndex, setWordIndex] = useState(0); // Current word index in words array
  const [isDeleting, setIsDeleting] = useState(false); // Whether text is being deleted

  useEffect(() => {
    const currentWord = words[wordIndex]; // Get current word
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1)); // Remove last character
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1)); // Add next character
      }, typeSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay); // Wait before deleting
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Move to next word
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [text, isDeleting, wordIndex]);

  return <span>{text} |</span>; // Show blinking cursor
};
export default Typewriter;