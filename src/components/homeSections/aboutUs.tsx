"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Users, Target, CheckCircle } from "lucide-react"
import type { Variants } from "framer-motion";

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const stats = [
  { number: "50+", label: "Projects Delivered", icon: "🚀" },
  { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  { number: "5+", label: "Years Experience", icon: "💪" },
  { number: "24/7", label: "Support Available", icon: "🛟" },
]

const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technology and creative solutions.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Focused",
    description: "Your success is our success. We listen, collaborate, and deliver results.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality Driven",
    description: "Every line of code is crafted with precision and attention to detail.",
  },
]

const missionPoints = [
  "Building scalable, maintainable software solutions",
  "Fostering long-term client partnerships",
  "Embracing technological innovation",
  "Delivering exceptional user experiences",
]

export const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-sm font-medium text-secondary/60 tracking-wide"
          >
            ↓ WHO WE ARE ↓
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              Dedicated to Excellence
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-foreground/60 max-w-3xl mx-auto"
          >
            A team of passionate engineers and designers committed to transforming your vision into powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              variants={fadeInUpVariant}
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              className="bg-border/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-border/80 transition-colors duration-300"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              variants={fadeInUpVariant}
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255,255,255,0.08)"
              }}
              className="border border-border/20 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-border/20 pt-20"
        >
          {/* Left Content */}
          <motion.div className="space-y-6">
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="inline-block text-sm font-medium text-secondary/60 tracking-wide"
              >
                ↓ OUR MISSION ↓
              </motion.span>
              <h3 className="text-4xl font-bold text-foreground">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block"
                >
                  Empowering Growth
                </motion.span>
              </h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg text-foreground/60 leading-relaxed"
            >
              We partner with visionary companies to create digital products that matter. Through innovation, collaboration, and technical excellence, we transform ambitious ideas into thriving digital ecosystems.
            </motion.p>

            <div className="space-y-3 pt-6">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  variants={fadeInUpVariant}
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-12 border border-accent/20 overflow-hidden group">
              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-16 -left-16 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 text-center space-y-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-6xl font-light text-accent"
                >
                  ✦
                </motion.div>
                <p className="text-lg text-foreground font-medium">
                  Building the future, one line of code at a time.
                </p>
                <p className="text-foreground/60">
                  Innovation, precision, and dedication in every project we undertake.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
