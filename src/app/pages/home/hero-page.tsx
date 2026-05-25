"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Custom Solutions",
    description: "Tailored software crafted for your unique business needs and growth",
  },
  {
    number: "02",
    title: "Web & Mobile",
    description: "Responsive platforms that deliver seamless experiences across devices",
  },
  {
    number: "03",
    title: "Expert Support",
    description: "Dedicated team ensuring your success from concept to deployment",
  },
];

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Text */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm font-medium text-secondary/60 tracking-wide"
            >
              ↓ DIGITAL INNOVATION ↓
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                Transform Ideas
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block text-accent"
              >
                Into Reality
              </motion.span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/60 max-w-2xl leading-relaxed"
            >
              We build intelligent, scalable software solutions that solve real problems and drive meaningful growth for startups and enterprises alike.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/pages/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:border-foreground/40 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border/20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4 group cursor-default"
              >
                <motion.div
                  className="text-4xl font-light text-accent/40 group-hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              delay: 2,
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="flex justify-center pt-12"
          >
            <div className="text-center">
              <p className="text-sm text-foreground/40 tracking-widest mb-2">
                SCROLL TO EXPLORE
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="flex justify-center"
              >
                <div className="w-1 h-8 border-r-2 border-foreground/20" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
