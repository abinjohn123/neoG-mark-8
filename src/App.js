import "./styles.css";
import { useState } from "react";

const UIMessages = {
  initMessage: {
    title: "Type an emoji 👆",
    meaning: ""
  },
  errorMessage: {
    title: "Sorry! we don't have that emoji in our database",
    meaning: ""
  }
};

const emojiDB = {
  "😊": {
    title: "Smiling Face with Smiling Eyes",
    meaning: "Often expresses genuine happiness and warm, positive feelings."
  },
  "😉": {
    title: "Winking Face",
    meaning:
      "May signal a joke, flirtation, hidden meaning, or general positivity."
  },
  "🤔": {
    title: "Thinking Face",
    meaning:
      "Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone"
  },
  "🥺": {
    title: "Pleading Face",
    meaning:
      "A yellow face with furrowed eyebrows, a small frown, and large, “puppy dog” eyes, as if begging or pleading. May also represent adoration or feeling touched by a loving gesture."
  },
  "😅": {
    title: "Grinning Face with Sweat",
    meaning:
      "Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead."
  },
  "😛": {
    title: "Face with Tongue",
    meaning:
      "A yellow face with small, open eyes and a big grin, playfully sticking out its tongue. Can variously convey a sense of fun, excitement, silliness, cuteness, happiness, or jesting, as if saying Just kidding!"
  },
  "😒": {
    title: "Unamused Face",
    meaning:
      "May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism, as if giving the side-eye."
  },
  "🤪": {
    title: "Zany Face",
    meaning:
      "A yellow face with its head tilted, its tongue hanging out of a big grin, and wide eyes in a wild, cockeyed expression. Generally used to express silliness."
  },
  "🧐": {
    title: "Face with Monocle",
    meaning:
      "A yellow face with furrowed eyebrows wearing a monocle. Usually depicted with a small, intent frown and head slightly upturned, as if in careful inspection."
  },
  "🥴": {
    title: "Woozy Face",
    meaning:
      "A yellow face with a crumpled mouth and a cockeyed expression, as if tired and emotional from inebriation or smitten with love."
  }
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(UIMessages.initMessage);
  const [outputEmoji, setOutputEmoji] = useState("");

  function inputChangeHandler(input) {
    if (input === "") {
      setEmojiMeaning(UIMessages.initMessage);
      setOutputEmoji("");
      return;
    }

    if (input in emojiDB) {
      setEmojiMeaning(emojiDB[input]);
      setOutputEmoji(input);
    } else setEmojiMeaning(UIMessages.errorMessage);
  }

  function listClickHandler(e) {
    if (e.target.classList.contains("emoji-list-items")) return;
    inputChangeHandler(e.target.innerText);
  }

  return (
    <div className="App">
      <h1>What's that emoji?</h1>
      <input
        className="emoji-input"
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
      <div className="emoji-meaning">
        <p className="emoji-meaning-title">
          {outputEmoji === "" ? "" : outputEmoji} {emojiMeaning.title}
        </p>
        <p className="emoji-meaning-desc">{emojiMeaning.meaning}</p>
      </div>
      <div className="emoji-list">
        <p className="emoji-list-title">Emojis we know</p>
        <hr />
        <ul className="emoji-list-items" onClick={listClickHandler}>
          {Object.keys(emojiDB).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
