import React, { useState, useEffect } from 'react';
import GardenGrid from './components/GardenGrid';
import Confetti from 'react-confetti';
import './App.css'; 
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [gardenSize, setGardenSize] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [bubMode, setBubMode] = useState(false);
  const [showDancer, setShowDancer] = useState(false);
  const { width, height } = useWindowSize();
  useEffect(() => {
    if (gardenSize && tasks.length === gardenSize) {
      setShowConfetti(true);
      setBubMode(true);
      setShowDancer(true);

      setTimeout(() => {
        setShowConfetti(false);
        setBubMode(false);
        setShowDancer(false);
      }, 6000);
    }
  }, [tasks, gardenSize]);
  const handleAddTask = () => {
    if (input.trim() === '' || tasks.length >= gardenSize) return;
    const newTask = {
      task: input,
      tile: tasks.length,
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };
  const handleReset = () => {
    setTasks([]);
    setInput('');
    setGardenSize(null);
    setShowConfetti(false);
    setBubMode(false);
    setShowDancer(false);
  };
  const handleStart = (e) => {
    e.preventDefault();
    const num = parseInt(input);
    if (!isNaN(num) && num > 0 && num <= 100) {
      setGardenSize(num);
      setInput('');
    }
  };
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen p-6 text-center font-sans transition-all
        ${bubMode
          ? 'bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-100 animate-glow'
          : 'bg-gradient-to-br from-pink-100 via-green-100 to-red-100 dark:from-gray-900 dark:via-black dark:to-gray-800'}`}
      >
        {showConfetti && <Confetti width={width} height={height} />}

        <div className="flex justify-center items-center mb-4">
          <h1 className="text-4xl font-bold text-green-700 dark:text-pink-300">
            🍉 Welcome to Nisha's WatermelonVerse 🍉
          </h1>
        </div>
        <div className="absolute top-4 right-6 flex space-x-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-md hover:scale-105 transition-all"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        {!gardenSize ? (
          <form onSubmit={handleStart} className="space-y-4 mt-10">
            <p className="text-lg font-medium dark:text-white">
              How many tasks do you want to complete today?
            </p>
            <input
              type="number"
              min="1"
              max="100"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter number (max 100)"
            />
            <br />
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            >
              Let's Start Gardening
            </button>
          </form>
        ) : (
          <>
            <div className="flex justify-center space-x-4 my-4">
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-1/2 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Plant 🍉
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-all"
              >
                Reset
              </button>
            </div>

            <GardenGrid plants={tasks} totalTiles={gardenSize} />

            {showDancer && (
              <div className="mt-10 animate-bounce flex flex-col items-center">
                <div className="dancer"></div>
                <h2 className="text-3xl font-extrabold text-pink-600 dark:text-pink-400 mt-4">
                  🎉 PROUD OF YOU BUB, YOU DID GREAT 🎉
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default App;
