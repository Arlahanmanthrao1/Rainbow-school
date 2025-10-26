import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { sendContactEmail } from "@/lib/emailjs";
import WhatsAppButton from "@/components/WhatsAppButton";
import schoolStreetView from "@/assets/school-street-view.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await sendContactEmail(formData);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please check your EmailJS configuration.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Education Street, Learning City, 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rainbowhigh.edu"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 8:00 AM - 4:00 PM"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary to-primary-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <info.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Street View */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <Card className="h-[calc(100%-4rem)]">
                <CardContent className="p-0 h-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1761458564624!6m8!1m7!1sP-Jkl0sOANzPZMPVYD4yyQ!2m2!1d17.48175355834103!2d78.48078623436272!3f136.11482044942764!4f20.010594158623718!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                      onClick={() => window.open('https://maps.app.goo.gl/aqvvGZLkXvCocA3Q7', '_blank')}
                    >
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <SocialMediaSidebar />
      <Footer />
    </div>
  );
};

export default Contact;
