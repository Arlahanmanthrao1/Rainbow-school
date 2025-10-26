import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import collegeCampus from "@/assets/college-campus.jpg";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Globe, 
  ArrowRight,
  Star,
  Award,
  Target
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum aligned with international standards"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Dedicated teachers committed to student success"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Consistent excellence in academics and extracurriculars"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "International collaborations and exchange programs"
    }
  ];

  const stats = [
    { label: "Students", value: "1,200+" },
    { label: "Teachers", value: "80+" },
    { label: "Success Rate", value: "98%" },
    { label: "Years of Excellence", value: "28+" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      text: "Rainbow High has transformed my child's learning experience. The teachers are exceptional!"
    },
    {
      name: "Michael Chen",
      role: "Alumni",
      text: "The foundation I received here prepared me excellently for university and beyond."
    },
    {
      name: "Emily Davis",
      role: "Current Student",
      text: "I love the supportive environment and opportunities to explore my interests."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialMediaSidebar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dl8hswxt2/image/upload/v1761032778/unnamed_zhqzgd.webp" 
            alt="Rainbow High School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-primary/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Award className="h-16 w-16 mx-auto text-secondary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Rainbow High School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Nurturing Excellence, Inspiring Innovation, Building Tomorrow's Leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button size="lg" variant="secondary" className="group">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Rainbow High?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a holistic education that nurtures academic excellence, character development, and lifelong learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary to-primary-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide a comprehensive, student-centered education that fosters intellectual curiosity, 
                critical thinking, and moral values. We are committed to creating a nurturing environment 
                where every student can discover their potential and develop the skills needed to thrive in 
                an ever-changing world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution that inspires excellence, innovation, and global citizenship. 
                We envision a future where our students become compassionate leaders, creative thinkers, 
                and responsible citizens who contribute positively to society and make a meaningful 
                difference in the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground">Hear from our community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Start your journey towards excellence today
            </p>
            <Link to="/admissions">
              <Button size="lg" variant="secondary" className="group">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
      <SocialMediaSidebar />
      <Footer />
    </div>
  );
};

export default Index;
