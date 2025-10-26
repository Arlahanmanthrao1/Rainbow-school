import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Heart } from "lucide-react";
import principalImg from "@/assets/faculty/principal.jpg";

const About = () => {
  const achievements = [
    { year: "1995", title: "School Founded", description: "Rainbow High School was established with a vision" },
    { year: "2005", title: "Accreditation", description: "Received international accreditation" },
    { year: "2015", title: "Excellence Award", description: "National Education Excellence Award" },
    { year: "2023", title: "Digital Transformation", description: "Fully integrated smart classrooms" }
  ];

  const values = [
    { icon: Award, title: "Excellence", description: "Striving for the highest standards in all endeavors" },
    { icon: Users, title: "Community", description: "Building strong relationships and collaboration" },
    { icon: BookOpen, title: "Learning", description: "Fostering curiosity and lifelong learning" },
    { icon: Heart, title: "Integrity", description: "Upholding honesty, respect, and responsibility" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rainbow High School</h1>
            <p className="text-xl text-primary-foreground/90">
              Building on 28 years of educational excellence, we continue to shape young minds for a brighter tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming a beacon of educational excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 flex items-start gap-6">
                      <div className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                        {achievement.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <img 
                        src="https://res.cloudinary.com/dl8hswxt2/image/upload/v1761033462/unnamed_1_gwgf15.webp" 
                        alt="Dr. Patricia Williams" 
                        className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      />
                      <h3 className="text-xl font-semibold mt-4">Dr. Patricia Williams</h3>
                      <p className="text-muted-foreground">Principal</p>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-bold mb-4">Principal's Message</h2>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Dear Students, Parents, and Guardians,
                        </p>
                        <p>
                          It is with immense pride and joy that I welcome you to Rainbow High School. For nearly three decades, 
                          we have been committed to providing an exceptional educational experience that prepares our students 
                          not just for exams, but for life.
                        </p>
                        <p>
                          Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum ensure that every 
                          student receives personalized attention and opportunities to excel. We believe in nurturing the whole 
                          child – academically, socially, emotionally, and physically.
                        </p>
                        <p>
                          Together, let us continue this journey of excellence, innovation, and growth.
                        </p>
                        <p className="font-semibold text-foreground">
                          Warm regards,<br />
                          Dr. Patricia Williams
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <SocialMediaSidebar />
      <Footer />
    </div>
  );
};

export default About;
