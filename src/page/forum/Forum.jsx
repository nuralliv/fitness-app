import { useState, useEffect } from 'react';
import './Forum.css'
import axios from 'axios';

const Forum = () => {
   const [questions, setQuestions] = useState([]);
   const [newQuestion, setNewQuestion] = useState('');
   const [name, setName] = useState('');
   const [reply, setReply] = useState('');
   const [selectedQuestion, setSelectedQuestion] = useState(null);
   const API_URL = 'https://6750be1869dc1669ec1c295a.mockapi.io/ques';

   // Fetch questions
   useEffect(() => {
      axios
         .get(API_URL)
         .then((response) => setQuestions(response.data))
         .catch((error) => console.error(error));
   }, []);

   // Add new question
   const addQuestion = () => {
      if (name && newQuestion) {
         const newEntry = { name, question: newQuestion, replies: [] };
         axios.post(API_URL, newEntry).then((response) => {
            setQuestions([...questions, response.data]);
            setNewQuestion('');
            setName('');
         });
      } else {
         alert('Please provide both your name and a question!');
      }
   };

   // Add a reply
   const addReply = (id) => {
      if (name && reply) {
         const question = questions.find((q) => q.id === id);
         const updatedReplies = [...question.replies, `${name}: ${reply}`];
         axios.put(`${API_URL}/${id}`, { ...question, replies: updatedReplies }).then(() => {
            setQuestions(
               questions.map((q) => (q.id === id ? { ...q, replies: updatedReplies } : q))
            );
            setReply('');
            setName('');
         });
      } else {
         alert('Please provide your name and a reply!');
      }
   };

   return (
      <div className='forum-page'>
         <h1>Community Forum</h1>

         {/* Add New Question */}
         <div className="question-all">
            <div className='question-forum'>
               <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <textarea
                  placeholder="Ask a question..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
               />
               <button onClick={addQuestion}>Post Question</button>
            </div>

            {questions.length > 0 ? (
               questions.map((q) => (
                  <div className='answer' key={q.id}>
                     <h3>{q.name}</h3>
                     <p>{q.question}</p>
                     <ul>
                        {q.replies.map((r, index) => (
                           <li key={index}>{r}</li>
                        ))}
                     </ul>
                     <button onClick={() => setSelectedQuestion(q.id)}>
                        Reply
                     </button>

                     {/* Add Reply */}
                     {selectedQuestion === q.id && (
                        <div className='reply-forum'>
                           <input
                              type="text"
                              placeholder="Your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                           <textarea
                              placeholder="Write your reply..."
                              value={reply}
                              onChange={(e) => setReply(e.target.value)}
                           />
                           <button onClick={() => addReply(q.id)}>Post Reply</button>
                        </div>
                     )}
                  </div>
               ))
            ) : (
               <p>No questions available. Be the first to ask!</p>
            )}
         </div>
         
      </div>
   );
};

export default Forum;
