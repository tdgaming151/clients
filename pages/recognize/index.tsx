import { useState, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.1 } },
};

const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const RecognizePage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string>("");
    const [confidence, setConfidence] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setPrediction("");
        setConfidence(null);
        setError("");
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setPreviewUrl(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!selectedFile) {
            setError("Please select an image before submitting.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("image", selectedFile);

            const res = await fetch("http://localhost:5000/recognize_image", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Error recognizing image.");
            }

            const data = await res.json();
            setPrediction(data.prediction);
            setConfidence(data.confidence);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getLinkPath = (name: string) => {
        return `/medicines/${name.toLowerCase().replace(/\s+/g, "-")}`;
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-50 flex flex-col items-center p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Head><title>Medicine Recognition</title></Head>

            <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow"
                variants={fieldVariants}
            >
                <motion.h1 className="text-2xl text-center font-bold mb-6" variants={fieldVariants}>
                    Recognize Medicine from Image
                </motion.h1>

                <motion.div variants={fieldVariants} className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                        Select an image:
                    </label>
                    <motion.input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>

                <AnimatePresence>
                    {previewUrl && (
                        <motion.div
                            className="mb-4 text-center"
                            variants={fieldVariants}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <img src={previewUrl} alt="preview" className="mx-auto h-40 object-contain" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                    variants={fieldVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {loading ? "Processing..." : "Recognize"}
                </motion.button>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            className="mt-4 text-red-500 text-sm"
                            variants={fieldVariants}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >{error}</motion.p>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {prediction && (
                        <motion.div
                            className="mt-6 bg-green-50 p-4 rounded-lg text-center"
                            variants={fieldVariants}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <p className="text-lg">
                                Prediction:{' '}
                                <Link href={getLinkPath(prediction)}>
                                    <span className="font-semibold text-blue-600 hover:underline">
                                        {prediction}
                                    </span>
                                </Link>
                            </p>
                            {confidence !== null && (
                                <p className="text-sm text-gray-700">
                                    Confidence: {(confidence * 100).toFixed(2)}%
                                </p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.form>
        </motion.div>
    );
};

export default RecognizePage;
