import { useState, useEffect } from 'react';
import './Forum.css';
import axios from 'axios';

const Forum = () => {
   const [questions, setQuestions] = useState([]);
   const [newQuestion, setNewQuestion] = useState('');
   const [questionName, setQuestionName] = useState('');
   const [reply, setReply] = useState('');
   const [replyName, setReplyName] = useState('');
   const [expandedQuestion, setExpandedQuestion] = useState(null); // Хранит ID вопроса с видимыми ответами
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
      if (questionName && newQuestion) {
         const newEntry = { name: questionName, question: newQuestion, replies: [] };
         axios.post(API_URL, newEntry).then((response) => {
            setQuestions([...questions, response.data]);
            setNewQuestion('');
            setQuestionName('');
         });
      } else {
         alert('Please provide both your name and a question!');
      }
   };

   // Add a reply
   const addReply = (id) => {
      if (replyName && reply) {
         const question = questions.find((q) => q.id === id);
         const updatedReplies = [...question.replies, `${replyName}: ${reply}`];
         axios.put(`${API_URL}/${id}`, { ...question, replies: updatedReplies }).then(() => {
            setQuestions(
               questions.map((q) => (q.id === id ? { ...q, replies: updatedReplies } : q))
            );
            setReply('');
            setReplyName('');
         });
      } else {
         alert('Please provide your name and a reply!');
      }
   };

   // Delete a question
   const deleteQuestion = (id) => {
      axios.delete(`${API_URL}/${id}`).then(() => {
         setQuestions(questions.filter((q) => q.id !== id));
      });
   };

   // Delete a reply
   const deleteReply = (id, index) => {
      const question = questions.find((q) => q.id === id);
      const updatedReplies = question.replies.filter((_, i) => i !== index);
      axios.put(`${API_URL}/${id}`, { ...question, replies: updatedReplies }).then(() => {
         setQuestions(
            questions.map((q) => (q.id === id ? { ...q, replies: updatedReplies } : q))
         );
      });
   };

   // Toggle visibility of replies
   const toggleReplies = (id) => {
      setExpandedQuestion((prev) => (prev === id ? null : id));
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
                  value={questionName}
                  onChange={(e) => setQuestionName(e.target.value)}
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
                     <div className="question-header">
                        <h3 onClick={() => toggleReplies(q.id)} style={{ cursor: 'pointer' }}>
                           {q.name}: {q.question}
                        </h3>
                        <button onClick={() => deleteQuestion(q.id)} className="delete-btn">Delete</button>
                     </div>

                     {/* Replies */}
                     {expandedQuestion === q.id && (
                        <>
                           <ul>
                              {q.replies.map((r, index) => (
                                 <li key={index} className="reply-item">
                                    {r}
                                    <button onClick={() => deleteReply(q.id, index)} className="delete-btn-small">x</button>
                                 </li>
                              ))}
                           </ul>
                           <div className='reply-forum'>
                              <input
                                 type="text"
                                 placeholder="Your name"
                                 value={replyName}
                                 onChange={(e) => setReplyName(e.target.value)}
                              />
                              <textarea
                                 placeholder="Write your reply..."
                                 value={reply}
                                 onChange={(e) => setReply(e.target.value)}
                              />
                              <button onClick={() => addReply(q.id)}>Post Reply</button>
                           </div>
                        </>
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
