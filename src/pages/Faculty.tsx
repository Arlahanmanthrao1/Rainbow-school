import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teacher1Img from "@/assets/faculty/teacher-1.jpg";
import teacher2Img from "@/assets/faculty/teacher-2.jpg";
import teacher3Img from "@/assets/faculty/teacher-3.jpg";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";

const Faculty = () => {
  const faculty = [
    {
      name: "Mr. David Chen",
      role: "Science Department Head",
      image: teacher1Img,
      subjects: "Physics & Chemistry"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Mathematics Department",
      image: teacher2Img,
      subjects: "Advanced Mathematics"
    },
    {
      name: "Ms. Priya Patel",
      role: "English Department Head",
      image: teacher3Img,
      subjects: "Literature & Language Arts"
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-primary-foreground/90">
              Meet our dedicated team of educators committed to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Faculty</h2>
            <p className="text-lg text-muted-foreground">
              Experienced educators dedicated to student success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.subjects}</p>
                    </div>
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

export default Faculty;
