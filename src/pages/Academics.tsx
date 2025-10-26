import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Award, FlaskConical } from "lucide-react";

const Academics = () => {
  const grades = [
    {
      grade: "K-5",
      title: "Elementary School",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
      description: "Building strong foundations in core subjects with hands-on learning"
    },
    {
      grade: "6-8",
      title: "Middle School",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Foreign Language", "Technology"],
      description: "Developing critical thinking and preparing for advanced studies"
    },
    {
      grade: "9-12",
      title: "High School",
      subjects: ["Advanced English", "Calculus", "Physics", "Chemistry", "Biology", "Computer Science"],
      description: "College preparatory curriculum with AP and honors courses"
    }
  ];

  const teachers = [
    { name: "Dr. John Smith", subject: "Mathematics", experience: "15 years", education: "PhD in Mathematics" },
    { name: "Ms. Sarah Johnson", subject: "English", experience: "12 years", education: "MA in English Literature" },
    { name: "Mr. David Lee", subject: "Science", experience: "10 years", education: "MSc in Physics" },
    { name: "Ms. Emily Brown", subject: "History", experience: "8 years", education: "MA in History" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive curriculum designed to inspire learning and foster academic achievement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-lg text-muted-foreground">
              Structured learning paths from kindergarten through high school
            </p>
          </motion.div>

          <Tabs defaultValue="K-5" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {grades.map((grade) => (
                <TabsTrigger key={grade.grade} value={grade.grade}>
                  {grade.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {grades.map((grade, index) => (
              <TabsContent key={grade.grade} value={grade.grade}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{grade.title} ({grade.grade})</CardTitle>
                      <p className="text-muted-foreground">{grade.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {grade.subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                          >
                            <BookOpen className="h-5 w-5 text-primary" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Programs</h2>
            <p className="text-lg text-muted-foreground">
              Additional opportunities to excel and explore
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Honors Program",
                description: "Advanced courses for high-achieving students with challenging curriculum"
              },
              {
                icon: FlaskConical,
                title: "STEM Excellence",
                description: "Science, Technology, Engineering, and Mathematics focus with lab facilities"
              },
              {
                icon: Users,
                title: "Leadership Development",
                description: "Student council, clubs, and community service opportunities"
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary to-primary-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <program.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
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

export default Academics;
