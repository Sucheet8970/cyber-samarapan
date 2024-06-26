import './QuizPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [ageGroup, setAgeGroup] = useState('');
  const [profession, setProfession] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = {
    teenage: {
      cs: [
        // Teenage CS questions
            {
              question: 'You receive an email from an unknown sender claiming that you have won a prize. The email asks you to click on a link and enter your personal information. What should you do?',
              options: [
                'Click the link and enter your information',
                'Delete the email immediately',
                'Forward the email to your friends',
                'Reply to the email asking for more details'
              ],
              answer: 1,
            },
            {
              question: 'You are using a public Wi-Fi network at a coffee shop. What should you do to ensure your data is secure?',
              options: [
                'Access sensitive information like banking websites',
                'Use a VPN to encrypt your connection',
                'Share the network with others',
                'Disable your device’s security features'
              ],
              answer: 1,
            },
            {
              question: 'You notice that your computer is running slower than usual and strange pop-ups keep appearing. What should you do?',
              options: [
                'Ignore it and continue using your computer',
                'Run a full antivirus scan',
                'Download more software to fix the issue',
                'Turn off your computer and hope it resolves'
              ],
              answer: 1,
            },
            {
              question: 'A friend asks you for your email password so they can check something quickly. What should you do?',
              options: [
                'Share your password',
                'Politely refuse and suggest they create their own account',
                'Share the password but change it immediately after',
                'Ask for their password in return'
              ],
              answer: 1,
            },
            {
              question: 'You come across a website that looks similar to your bank’s website but the URL seems off. What should you do?',
              options: [
                'Enter your login details as usual',
                'Call your bank to verify the website',
                'Bookmark the site for future use',
                'Ignore the warning signs and proceed'
              ],
              answer: 1,
            },
          ],
          common: [
            {
              question: 'You receive a message on social media from someone you don’t know, asking for personal information. What should you do?',
              options: [
                'Give them your information',
                'Ignore the message',
                'Respond and ask why they need it',
                'Report the message to the platform'
              ],
              answer: 3,
            },
            {
              question: 'You get a notification that your software needs an update. What should you do?',
              options: [
                'Ignore the update',
                'Update the software as soon as possible',
                'Update only if you face an issue',
                'Uninstall the software'
              ],
              answer: 1,
            },
            {
              question: 'You receive a call from someone claiming to be tech support and asking for remote access to your computer. What should you do?',
              options: [
                'Give them access',
                'Hang up and call the official tech support number',
                'Provide them with your login details',
                'Ask them to call back later'
              ],
              answer: 1,
            },
            {
              question: 'You are creating a new account on a website. What is a strong password?',
              options: [
                'Your birthdate',
                'A mix of letters, numbers, and symbols',
                'Your pet’s name',
                '123456'
              ],
              answer: 1,
            },
            {
              question: 'You are using a friend’s computer to check your email. What should you do after you finish?',
              options: [
                'Log out of your account',
                'Just close the browser',
                'Leave the computer as is',
                'Clear the browsing history'
              ],
              answer: 0,
            },
          ],
        },
        adult: {
          cs: [
            {
              question: 'Your company’s IT department sends an email asking you to update your password through a provided link. What should you do?',
              options: [
                'Click the link and update your password',
                'Ignore the email',
                'Verify the request with IT directly',
                'Forward the email to colleagues'
              ],
              answer: 2,
            },
            {
              question: 'You receive a notification about a data breach at a website you use. What should you do?',
              options: [
                'Ignore the notification',
                'Change your password immediately',
                'Close your account',
                'Notify your friends'
              ],
              answer: 1,
            },
            {
              question: 'You notice unauthorized transactions on your credit card statement. What should you do?',
              options: [
                'Wait to see if more transactions occur',
                'Report it to your bank immediately',
                'Ignore it, assuming it’s a mistake',
                'Share your credit card details online'
              ],
              answer: 1,
            },
            {
              question: 'A coworker asks you to share your login details for a project. What should you do?',
              options: [
                'Share your login details',
                'Suggest a secure way to share the necessary information',
                'Ignore the request',
                'Write down your details and hand them over'
              ],
              answer: 1,
            },
            {
              question: 'Your computer prompts you to install a software update. What is the best practice?',
              options: [
                'Install the update as soon as possible',
                'Ignore the prompt',
                'Wait until the end of the day',
                'Ask a coworker if you should update'
              ],
              answer: 0,
            },
          ],
          common: [
            {
              question: 'You receive a text message claiming you’ve won a prize and asking for your bank details. What should you do?',
              options: [
                'Provide your bank details',
                'Delete the message',
                'Click the link in the message',
                'Forward the message to friends'
              ],
              answer: 1,
            },
            {
              question: 'You get an alert that your account password was found in a data breach. What should you do?',
              options: [
                'Ignore the alert',
                'Change your password immediately',
                'Use the same password but change a letter',
                'Delete the account'
              ],
              answer: 1,
            },
            {
              question: 'You are shopping online and the website asks for your credit card information. What should you look for to ensure it’s secure?',
              options: [
                'A padlock icon in the address bar',
                'Low prices on products',
                'Lots of customer reviews',
                'The website’s design quality'
              ],
              answer: 0,
            },
            {
              question: 'You receive an email from a friend with a link to a funny video. What should you do?',
              options: [
                'Click the link immediately',
                'Verify with your friend that they sent the email',
                'Forward the email to others',
                'Reply asking for more information'
              ],
              answer: 1,
            },
            {
              question: 'You are creating a new account on a website. What should you include in your password?',
              options: [
                'Only lowercase letters',
                'Your birthdate',
                'A combination of letters, numbers, and symbols',
                'Your name'
              ],
              answer: 2,
            },
          ],
        },
      };

  const handleOptionChange = (event) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = parseInt(event.target.value);
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    const selectedQuestions = questions[ageGroup][profession];
    for (let i = 0; i < selectedQuestions.length; i++) {
      if (userAnswers[i] === selectedQuestions[i].answer) {
        correctAnswers++;
      }
    }
    return correctAnswers;
  };

  const displayResults = () => {
    const score = calculateScore();
    const selectedQuestions = questions[ageGroup][profession];
    const percentage = Math.round((score / selectedQuestions.length) * 100);

    return (
      <div>
        <h2>Your Results</h2>
        <p>
          You answered {score} out of {selectedQuestions.length} questions correctly.
        </p>
        <p>Your score is: {percentage}%</p>
        <p>
          <button className="resource-button" onClick={handleGoToVideoLibrary}>
            Feeling unsure? Check out some helpful cybersecurity resources here.
          </button>
        </p>
      </div>
    );
  };

  const handleNextQuestion = () => {
    const selectedQuestions = questions[ageGroup][profession];
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz(); // Submit the quiz if it's the last question
    }
  };

  const renderProgressBar = () => {
    const selectedQuestions = questions[ageGroup][profession];
    const progress = (currentQuestion + 1) / selectedQuestions.length;
    const progressStyle = { width: `${progress * 100}%` }; // Dynamic progress bar width

    return (
      <div className="progress-bar">
        <div className="progress" style={progressStyle}></div>
      </div>
    );
  };

  const handleStartQuiz = () => {
    if (ageGroup && profession) {
      setQuizStarted(true);
    } else {
      alert('Please select your age group and profession.');
    }
  };

  const handleGoToVideoLibrary = () => {
    // Add logic here to redirect to the video library page
    // For example: navigate('/video-library');
    console.log('Redirecting to video library...');
    navigate('/video-library');
  };

  return (
    <div className="quiz-page">
    <div className="quiz-container">
      <h1>Cybersecurity Awareness Quiz</h1>
      {quizStarted ? (
        showResults ? (
          displayResults()
        ) : (
          <div>
            {renderProgressBar()}
            <p>Question {currentQuestion + 1} of {questions[ageGroup][profession].length}</p>
            <h2>{questions[ageGroup][profession][currentQuestion].question}</h2>
            <form onSubmit={handleSubmitQuiz}>
              {questions[ageGroup][profession][currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="answer"
                    value={index}
                    checked={userAnswers[currentQuestion] === index}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              ))}
              <button type="button" disabled={userAnswers[currentQuestion] === undefined} onClick={handleNextQuestion}>
                {currentQuestion === questions[ageGroup][profession].length - 1 ? 'Submit Quiz' : 'Next Question'}
              </button>
            </form>
          </div>
        )
      ) : (
        <div className="intro-container">
          <h2>Please select your age group and profession to start the quiz</h2>
          <form>
            <label>
              Age Group:
              <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
                <option value="">Select Age Group</option>
                <option value="teenage">14 - 20 (Teenage)</option>
                <option value="adult">21 and above (Adult)</option>
              </select>
            </label>
            <br />
            <label>
              Profession:
              <select value={profession} onChange={(e) => setProfession(e.target.value)}>
                <option value="">Select Profession</option>
                <option value="cs">CS Background</option>
                <option value="common">Others....</option>
              </select>
            </label>
            <br />
            <button type="button" onClick={handleStartQuiz}>Start Quiz</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuizPage;
