import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/icons/symptom.svg',
    title: 'Disease Prediction',
    description: 'Enter symptoms and let our AI analyze and suggest possible conditions.'
  },
  {
    icon: '/icons/medicine.svg',
    title: 'Medicine Recognition',
    description: 'Snap a photo of your medicine and our AI will identify it and provide usage instructions.'
  },
  {
    icon: '/icons/report.svg',
    title: 'Detailed Reports',
    description: 'Receive comprehensive analysis reports with condition insights and treatment recommendations.'
  }
];

const testimonials = [
  { name: 'Alice', feedback: 'AI Health accurately predicted my condition and saved me a trip to the clinic!' },
  { name: 'Bob', feedback: 'The medicine recognition feature is a game-changer for keeping track of my prescriptions.' },
  { name: 'Carol', feedback: 'I love the detailed reports—helps me understand my health better.' }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Health Predictor</title>
        <meta name="description" content="AI-driven healthcare app: disease prediction and medicine recognition" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Hero */}
      <section className="relative h-screen bg-gradient-to-r from-blue-500 to-green-500 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/hero-bg.svg')] opacity-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="relative z-10 container mx-auto text-center pt-40">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-6xl font-extrabold text-white mb-6">
            Empowering Healthcare with AI
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl text-white mb-8">
            Accurate disease prediction and medicine recognition at your fingertips.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }} className="space-x-4">
            <Link href="/predict" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Predict Disease
            </Link>
            <Link href="/recognize" className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Recognize Medicine
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <motion.div key={f.title} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Image src={f.icon} alt={f.title} width={64} height={64} className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="container mx-auto flex space-x-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="min-w-[300px] bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <p className="text-gray-900 font-medium mt-4">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'Is my data secure?', a: 'Yes, we use industry-standard encryption...' },
            { q: 'How accurate are the predictions?', a: 'Our models have over 90% accuracy...' },
            { q: 'Can I trust the medicine recognition?', a: 'The system is validated by pharmacists...' }
          ].map((item, idx) => (
            <details key={idx} className="bg-white p-4 rounded-lg shadow">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
          <p className="mb-8">Get started with AI Health today.</p>
          <Link href="/signup" className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Sign Up Now
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} AI Health. All rights reserved.
        </div>
      </footer>
    </>
  );
}
