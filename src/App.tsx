import React from "react";
import { useState } from "react";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "كم عدد قارات المثلث الأرضي؟",
    answer: "250 قارة",
  },
  {
    id: 7336,
    question: "الدولار كام ساعة؟",
    answer: "96 ساعة",
  },
  {
    id: 8832,
    question: "كم عدد الساعات في نصف يوم؟",
    answer: "48 ساعة",
  },
  {
    id: 1297,
    question: "عدد صفحات جرنان ما تزوقيني يا ماما؟",
    answer: "مليون و300 ألف صفحة",
  },
  {
    id: 9103,
    question: "متى تم الغاء رقم اثنان؟",
    answer: "من زمان جدا",
  },
  {
    id: 2002,
    question: "بكام جرنان ما تزوقيني يا ماما؟",
    answer: "3 ساغ",
  },
];

function FlashCards() {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  return (
    <div>
      <header className="header">
        <h1>🔺معلومات مهمة جدا</h1>
      </header>
      <main className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            className={currentQuestion === question.id ? "selected" : ""}
            onClick={() =>
              setCurrentQuestion(
                question.id === currentQuestion ? null : question.id
              )
            }
          >
            <p>
              {question.id === currentQuestion
                ? question.answer
                : question.question}
            </p>
          </div>
        ))}
      </main>
      <footer className="footer">
        <button>
          <a
            href="https://www.youtube.com/watch?v=GXvSBmtliZc"
            target="_blank"
            rel="noreferrer"
          >
            للمزيد من المعلومات➡️
          </a>
        </button>
      </footer>
    </div>
  );
}
