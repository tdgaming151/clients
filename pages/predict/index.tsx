import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type PredictResponse = {
  extracted: string[];
  symptoms: number[];
  predicted_disease: string;
  confidence: number;
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [username, setUsername] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [notes, setNotes] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!text.trim()) {
      setError('Please describe at least one symptom.');
      return;
    }

    setLoading(true);
    try {
      const payload = { text, age, gender, weight, height };
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const textErr = await res.text();
        throw new Error(`Server returned ${res.status}: ${textErr}`);
      }
      const json: PredictResponse = await res.json();
      setResult(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const baseInputClass = `mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 shadow-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-150 text-sm`;

  return (
    <motion.main
      className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-lg mx-auto bg-white shadow rounded-xl p-6" variants={fieldVariants}>
        <motion.h1 className="text-2xl font-bold text-center text-indigo-600 mb-6" variants={fieldVariants}>
          Disease Prediction Tool
        </motion.h1>
        <motion.form onSubmit={handleSubmit} className="space-y-4" variants={fieldVariants}>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3" variants={fieldVariants}>
            <motion.div variants={fieldVariants}>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
              <motion.input
                id="username"
                type="text"
                className={baseInputClass}
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <motion.input
                id="age"
                type="number"
                min={0}
                className={baseInputClass}
                placeholder="30"
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || '')}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <motion.select
                id="gender"
                className={baseInputClass}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value="" disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </motion.select>
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <motion.input
                id="weight"
                type="number"
                min={0}
                className={baseInputClass}
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value) || '')}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <motion.input
                id="height"
                type="number"
                min={0}
                className={baseInputClass}
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || '')}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
            <motion.input
              id="notes"
              type="text"
              className={baseInputClass}
              placeholder="Any extra details"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Symptom Description</label>
            <motion.textarea
              id="text"
              rows={4}
              className={baseInputClass + ' resize-none h-24'}
              placeholder="e.g. Cough, fever, fatigue"
              value={text}
              onChange={(e) => setText(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 text-sm font-semibold rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-150"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Predicting...' : 'Predict Disease'}
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {error && (
            <motion.div
              className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <strong>Error:</strong> {error}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {result && (
            <motion.div
              className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-lg font-medium text-gray-800">Results</h2>
              <div>
                <span className="font-semibold">Extracted:</span>
                <ul className="list-disc list-inside text-sm">
                  {result.extracted.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Disease:</span>{' '}
                <Link href={`/diseases/${result.predicted_disease.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:underline">
                  {result.predicted_disease}
                </Link>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Confidence:</span> {(result.confidence * 100).toFixed(1)}%
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.main>
  );
}
