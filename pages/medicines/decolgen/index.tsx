import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DecolgenPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Decolgen</title>
                <meta
                    name="description"
                    content="Information about Decolgen: ingredients, indications, dosage, side effects, and precautions."
                />
            </Head>

            {/* Hero Section */}
            <motion.section
                className="relative h-64 w-full overflow-hidden rounded-b-2xl shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/images/decolgen-hero.jpg"
                    alt="Decolgen pack"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                        Decolgen
                    </h1>
                </div>
            </motion.section>

            <main className="container mx-auto py-8 space-y-6">
                {/* Overview */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                Decolgen is a combination medication used to relieve symptoms of common cold and flu, including headache, sore throat, nasal congestion, and runny nose. It contains an analgesic, an antihistamine, and a decongestant.
                            </p>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* Composition & Indications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.section
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Ingredients</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Paracetamol 500mg (analgesic and antipyretic)</li>
                                    <li>Chlorpheniramine Maleate 4mg (antihistamine)</li>
                                    <li>Phenylephrine HCl 10mg (decongestant)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.section>

                    <motion.section
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Indications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Pain relief and fever reduction in common cold and flu</li>
                                    <li>Relief of nasal congestion and runny nose</li>
                                    <li>Mild allergic symptoms such as sneezing and itching</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.section>
                </div>

                {/* Dosage & Side Effects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.section
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Dosage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li>Adults and children over 12 years: 1 tablet every 4–6 hours as needed (maximum 4 tablets in 24 hours).</li>
                                    <li>Children 6–12 years: ½ tablet every 4–6 hours as needed (maximum 2 tablets in 24 hours).</li>
                                    <li>Not recommended for children under 6 years without medical advice.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.section>

                    <motion.section
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Side Effects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Dry mouth, drowsiness (due to chlorpheniramine)</li>
                                    <li>Increased heart rate, palpitations (due to phenylephrine)</li>
                                    <li>Allergic reactions (rash, itching) in rare cases</li>
                                    <li>Risk of liver damage with paracetamol overdose</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.section>
                </div>

                {/* Precautions & References */}
                <motion.section
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Precautions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Do not use if allergic to any component of the product.</li>
                                <li>Use with caution in elderly patients and those with hypertension or cardiovascular disease.</li>
                                <li>Avoid driving or operating machinery if drowsy.</li>
                                <li>Consult a healthcare professional before using other products containing paracetamol.</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                                For more details, visit{' '}
                                <Link href="https://www.drugs.com/decolgen.html" target="_blank" className="text-blue-600 hover:underline">
                                    Drugs.com
                                </Link>.
                            </p>
                        </CardContent>
                    </Card>
                </motion.section>
            </main>
        </>
    );
};

export default DecolgenPage;
