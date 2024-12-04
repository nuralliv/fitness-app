import  { useState, useEffect } from 'react';
import axios from 'axios';

function Forum() {
   const [questions, setQuestions] = useState([]);
   const [newQuestion, setNewQuestion] = useState({ name: '', question: '' });
   const [newReply, setNewReply] = useState('');
   const [errors, setErrors] = useState({ name: '', question: '' });
   const [loading, setLoading] = useState(false); // Индикатор загрузки
   const [error, setError] = useState(null); // Для вывода ошибок

   const apiUrl = 'https://673a044ba3a36b5a62f0759b.mockapi.io/prac';

   // Fetch questions from the server
   useEffect(() => {
      const fetchQuestions = async () => {
         setLoading(true);
         try {
            const response = await axios.get(apiUrl);
            setQuestions(response.data);
         } catch (err) {
            setError('Failed to load questions. Please check the API or your connection.');
         } finally {
            setLoading(false);
         }
      };

      fetchQuestions();
   }, []);

   // Validate form inputs
   const validateForm = () => {
      const newErrors = { name: '', question: '' };
      if (!newQuestion.name.trim()) newErrors.name = 'Name is required.';
      if (!newQuestion.question.trim()) newErrors.question = 'Question is required.';
      setErrors(newErrors);
      return !newErrors.name && !newErrors.question;
   };

   // Handle adding a new question
   const handleAddQuestion = async () => {
      if (!validateForm()) return;

      try {
         const response = await axios.post(apiUrl, { ...newQuestion, replies: [] });
         setQuestions([...questions, response.data]);
         setNewQuestion({ name: '', question: '' });
      } catch (err) {
         setError('Failed to add a question. Please try again.');
      }
   };

   // Handle adding a reply to a question
   const handleAddReply = async (id) => {
      if (!newReply.trim()) return;

      try {
         const questionToUpdate = questions.find((q) => q.id === id);
         const updatedReplies = [...questionToUpdate.replies, newReply];

         await axios.put(`${apiUrl}/${id}`, { ...questionToUpdate, replies: updatedReplies });

         setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
               q.id === id ? { ...q, replies: updatedReplies } : q
            )
         );
         setNewReply('');
      } catch (err) {
         setError('Failed to add a reply. Please try again.');
      }
   };

   if (error) {
      return (
         <div style={{ padding: '20px', color: 'red' }}>
            <h2>Error</h2>
            <p>{error}</p>
         </div>
      );
   }

   return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
         <h2>Community Forum</h2>

         {loading ? <p>Loading...</p> : null}

         {/* Add a new question */}
         <h3>Ask a Question</h3>
         <div>
            <input
               type="text"
               placeholder="Your Name"
               value={newQuestion.name}
               onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
               style={{ marginBottom: '5px', display: 'block', width: '100%', padding: '8px' }}
            />
            {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}

            <textarea
               placeholder="Your Question"
               value={newQuestion.question}
               onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
               style={{ marginBottom: '5px', display: 'block', width: '100%', padding: '8px', height: '80px' }}
            />
            {errors.question && <p style={{ color: 'red', fontSize: '12px' }}>{errors.question}</p>}

            <button onClick={handleAddQuestion} style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
               Post Question
            </button>
         </div>

         {/* List of questions */}
         <h3>Questions</h3>
         {questions.map((q) => (
            <div key={q.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
               <p><strong>{q.name}:</strong> {q.question}</p>
               <h4>Replies:</h4>
               {q.replies.length > 0 ? (
                  q.replies.map((reply, idx) => <p key={idx} style={{ marginLeft: '10px' }}>- {reply}</p>)
               ) : (
                  <p style={{ marginLeft: '10px', fontStyle: 'italic' }}>No replies yet.</p>
               )}
               <div style={{ marginTop: '10px' }}>
                  <input
                     type="text"
                     placeholder="Write a reply..."
                     value={newReply}
                     onChange={(e) => setNewReply(e.target.value)}
                     style={{ width: 'calc(100% - 110px)', padding: '8px', marginRight: '10px' }}
                  />
                  <button
                     onClick={() => handleAddReply(q.id)}
                     style={{ padding: '8px', backgroundColor: '#28A745', color: 'white', border: 'none', borderRadius: '5px' }}
                  >
                     Reply
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Forum;
