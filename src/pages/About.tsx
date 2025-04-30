import React from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Rocket,
  Search,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import ImageReveal from "@/components/ui/ImageReveal";
import AnimatedCard from "@/components/ui/AnimatedCard";
import SectionTitle from "@/components/ui/section-title";

const About: React.FC = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            >
              About <span className="text-gradient">Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              At ChapterInfo, we believe that technology is the bridge to a
              better future. We are a passionate team providing cutting-edge IT
              services today while simultaneously building the innovative
              products of tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-black min-h-screen">
        {/* Who We Are Section */}
        {/* Who We Are Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Text Content - Spans 7 columns */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Who We Are
                  </motion.h3>

                  <motion.div
                    className="prose prose-lg prose-invert"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      We are ChapterInfo — a collective of curious minds and
                      passionate builders committed to pushing the boundaries of
                      what's possible. Our story began with a belief that great
                      technology comes from thoughtful collaboration, and that
                      belief still drives us today. We focus on solving
                      real-world problems with practical, forward-thinking
                      digital solutions. Every project we undertake is rooted in
                      understanding — of user behavior, market needs, and
                      technological potential. We’re not afraid to ask the hard
                      questions or rethink the obvious. Innovation for us isn’t
                      a buzzword, it’s a mindset we live by.
                      <br />
                      <br />
                      At ChapterInfo, we value transparency, open communication,
                      and mutual respect. We’ve cultivated a culture where
                      creativity is empowered, feedback is embraced, and
                      everyone’s voice matters. Our team spans different
                      disciplines — from product strategy and UI/UX to backend
                      systems and emerging tech — and we bring it all together
                      to build experiences that inspire. We pride ourselves on
                      staying lean, adaptive, and quality-focused, balancing
                      speed with precision. Our goal is never just to deliver,
                      but to delight — to build products that users love and
                      clients are proud to own.
                      <br />
                      <br />
                      Whether we’re scaling a startup, revamping legacy systems,
                      or launching a new brand, we bring the same level of
                      energy and commitment. We listen closely, move
                      intentionally, and execute with purpose. We are more than
                      just coders or designers — we are partners in progress,
                      and your success is our mission.
                    </p>
                  </motion.div>
                </div>

                {/* Image Section - Spans 5 columns */}
                <div className="lg:col-span-5 sticky top-8">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <ImageReveal
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                      alt="Our team collaboration"
                      className="rounded-xl aspect-[4/3] object-cover"
                    />
                    <motion.div
                      className="absolute -bottom-6 -right-6 bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-xl w-72"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-techblue-500/10 rounded-full">
                          <Users size={18} className="text-techblue-500" />
                        </div>
                        <h4 className="text-white font-semibold text-sm">
                          Team Spirit
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        A passionate team of dreamers, doers, and
                        problem-solvers making impact through technology.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Additional Info Card */}
                  <motion.div
                    className="mt-16 bg-gray-900 p-6 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-techblue-500/10 rounded-full">
                        <Rocket size={18} className="text-techblue-500" />
                      </div>
                      <h4 className="text-white font-semibold">Our Approach</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300 text-sm">
                        <ArrowRight
                          size={14}
                          className="text-techblue-500 mr-2 flex-shrink-0"
                        />
                        <span>Customer-first problem solving</span>
                      </li>
                      <li className="flex items-center text-gray-300 text-sm">
                        <ArrowRight
                          size={14}
                          className="text-techblue-500 mr-2 flex-shrink-0"
                        />
                        <span>Cross-functional collaboration</span>
                      </li>
                      <li className="flex items-center text-gray-300 text-sm">
                        <ArrowRight
                          size={14}
                          className="text-techblue-500 mr-2 flex-shrink-0"
                        />
                        <span>Scalable and sustainable solutions</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Core Values"
              subtitle="What Drives Us"
              center
              light
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <AnimatedCard
                icon={<Lightbulb size={24} className="text-techblue-500" />}
                title="Innovation"
                delay={0.2}
              >
                We thrive on new ideas and creative problem-solving, constantly
                pushing the boundaries of what's possible.
              </AnimatedCard>

              <AnimatedCard
                icon={<Brain size={24} className="text-techblue-500" />}
                title="Adaptability"
                delay={0.3}
              >
                We embrace every new challenge with enthusiasm and resilience,
                always ready to evolve.
              </AnimatedCard>

              <AnimatedCard
                icon={<Shield size={24} className="text-techblue-500" />}
                title="Integrity"
                delay={0.4}
              >
                We believe in transparency, trust, and doing the right thing in
                every situation.
              </AnimatedCard>

              <AnimatedCard
                icon={<TrendingUp size={24} className="text-techblue-500" />}
                title="Excellence"
                delay={0.5}
              >
                We commit to delivering the highest quality solutions and
                services, every time.
              </AnimatedCard>

              <AnimatedCard
                icon={<Zap size={24} className="text-techblue-500" />}
                title="Growth"
                delay={0.6}
              >
                We believe in growing together — as a team, with our clients,
                and with our community.
              </AnimatedCard>

              <AnimatedCard
                icon={<Search size={24} className="text-techblue-500" />}
                title="Curiosity"
                delay={0.7}
              >
                We constantly seek knowledge and understanding to fuel
                innovation and progress.
              </AnimatedCard>
            </div>
          </div>
        </section>
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-6 order-2 lg:order-1">
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  What Makes Us Different
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  At ChapterInfo, what sets us apart is our relentless passion
                  for building, growing, and innovating. We don't just keep up
                  with technology we push its boundaries. Our team thrives on
                  curiosity, constantly experimenting with ideas and
                  transforming challenges into impactful solutions. We believe
                  that research drives relevance, and creativity powers results.
                  Our solutions blend user-centered design with deep technical
                  insight to make a lasting difference. Collaboration fuels
                  everything we do, and our culture encourages bold thinking and
                  fearless execution. We pride ourselves on being the kind of
                  team that says "yes" when others hesitate, and we never back
                  down from solving the hard problems. With a hands-on approach
                  and a heart for quality, we aim not only to serve clients but
                  also to inspire industries. Our strength lies in our agility
                  to shift, evolve, and improve. We don’t settle for generic; we
                  tailor. And most of all, we measure success not just in lines
                  of code or shipped features, but in the value we bring to
                  people, products, and progress.
                </motion.p>
              </div>

              <motion.div
                className="relative h-[400px] order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ImageReveal
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Team innovation"
                  className="rounded-xl h-full w-full object-cover"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-xl w-72"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-techblue-500/10 rounded-full">
                      <Rocket size={18} className="text-techblue-500" />
                    </div>
                    <h4 className="text-white font-semibold text-sm">
                      Driving Change
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    We drive purposeful innovation that blends ambition with
                    execution — creating real, lasting change.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
