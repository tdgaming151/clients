import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const medications = [
    {
        name: 'Selective Serotonin Reuptake Inhibitors (SSRIs)',
        image: '/images/ssri.jpg',
        description:
            'Commonly prescribed for anxiety and depression; may be used if acute stress reaction evolves into PTSD.',
        link: 'https://www.who.int/mental_health/management/ssris'
    },
    {
        name: 'Benzodiazepines',
        image: '/images/benzo.jpg',
        description:
            'Short-term relief of severe anxiety; should be used cautiously due to dependence risk.',
        link: 'https://www.ncbi.nlm.nih.gov/books/NBK519071/'
    },
    {
        name: 'Beta-blockers',
        image: '/images/beta-blocker.jpg',
        description:
            'Helps manage physical symptoms such as rapid heartbeat and trembling.',
        link: 'https://www.mayoclinic.org/diseases-conditions/anxiety/in-depth/anxiety-medications'
    }
];

const resources = [
    {
        title: 'National Center for PTSD',
        url: 'https://www.ptsd.va.gov',
        description: 'Evidence-based information and support for trauma survivors.'
    },
    {
        title: 'Mind - Mental Health Charity',
        url: 'https://www.mind.org.uk',
        description: 'Resources and community support for anyone experiencing mental health problems.'
    }
];

const AcuteStressReaction: NextPage = () => {
    return (
        <>
            <Head>
                <title>Acute Stress Reaction</title>
                <meta
                    name="description"
                    content="Information about Acute Stress Reaction (ASR) – diagnosis, symptoms, treatment, and medications."
                />
            </Head>

            {/* Hero Section */}
            <motion.section
                className="relative h-64 w-full bg-gray-200 overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/images/stress-hero.jpg"
                    alt="Stressed person silhouette"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        Acute Stress Reaction
                    </h1>
                </div>
            </motion.section>

            <main className="bg-gray-100 py-6 px-4 md:px-20 space-y-6">
                {/* Overview */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p className="text-lg text-gray-700" layout>
                        Acute Stress Reaction (ASR) is a severe psychological response that occurs immediately after a traumatic event. Symptoms can appear within minutes and last up to several days. Early recognition and support can prevent progression to chronic conditions.
                    </motion.p>
                </motion.section>

                {/* Causes */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Causes</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Exposure to a traumatic event (e.g., traffic accident, natural disaster)</li>
                        <li>Experiencing or witnessing violence or assault</li>
                        <li>Witnessing severe injury or death of others</li>
                        <li>Perceived threat to one’s life or safety</li>
                    </ul>
                </motion.section>

                {/* Symptoms */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Symptoms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                        <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-medium mb-2">Emotional</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Anxiety, fear</li>
                                <li>Mood swings</li>
                                <li>Anger or emotional numbness</li>
                            </ul>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-medium mb-2">Physical</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Rapid heartbeat, elevated blood pressure</li>
                                <li>Sweating, trembling</li>
                                <li>Headache, muscle tension</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Treatment & Prevention */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Treatment</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Immediate psychological support: active listening and reassurance</li>
                        <li>Cognitive-Behavioral Therapy (CBT) within the first few days</li>
                        <li>Mild anxiolytics if necessary to manage acute anxiety</li>
                        <li>Education and support for family members or support groups</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">Prevention</h2>
                    <p className="text-gray-700">
                        Social support, stress-management training, and mental health education for high-risk groups can reduce ASR risk. Early debriefing and resilience workshops are effective preventive measures.
                    </p>
                </motion.section>

                {/* Medications Section */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-6 text-blue-600">Medications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {medications.map((med) => (
                            <motion.div
                                key={med.name}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-50 rounded-2xl shadow p-4 flex flex-col justify-between h-full"
                            >
                                {/* 1. Ảnh */}
                                <div className="relative w-full h-32">
                                    <Image
                                        src={med.image}
                                        alt={med.name}
                                        fill
                                        objectFit="contain"
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* 2. Tiêu đề + mô tả */}
                                <div className="mt-4">
                                    <h3 className="text-lg font-medium">{med.name}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{med.description}</p>
                                </div>

                                {/* 3. Nút Learn More luôn ở đáy */}
                                <Link
                                    href={med.link}
                                    target="_blank"
                                    className="mt-4 px-4 mx-auto py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition self-start"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Additional Resources */}
                <motion.section
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Resources & Support</h2>
                    <ul className="list-inside text-gray-700 space-y-4">
                        {resources.map((res) => (
                            <li key={res.url}>
                                <Link
                                    href={res.url}
                                    target="_blank"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    {res.title}
                                </Link>
                                <p className="text-sm text-gray-600">{res.description}</p>
                            </li>
                        ))}
                    </ul>
                </motion.section>
            </main>
        </>
    );
};

export default AcuteStressReaction;
