import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import schoolBuildingImg from "@/assets/gallery/school-building.jpg";
import classroomImg from "@/assets/gallery/classroom.jpg";
import laboratoryImg from "@/assets/gallery/laboratory.jpg";
import libraryImg from "@/assets/gallery/library.jpg";
import sportsFieldImg from "@/assets/gallery/sports-field.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: "School Building", category: "Campus", image: "https://res.cloudinary.com/dl8hswxt2/image/upload/v1761032778/unnamed_zhqzgd.webp" },
    { id: 2, title: "Modern Classroom", category: "Facilities", image: classroomImg },
    { id: 3, title: "Science Laboratory", category: "Facilities", image: laboratoryImg },
    { id: 4, title: "Library", category: "Facilities", image: "https://res.cloudinary.com/dl8hswxt2/image/upload/v1761459233/7562CFFF0691FE2EB5083B09BA_1496331054718_cropped_450X450_xlvsjc.webp"},
    { id: 5, title: "Sports Field", category: "Campus", image: sportsFieldImg },
  ];

  const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our campus, facilities, and memorable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image.id)}
              >
                <Card className="overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.category}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur p-2 rounded-full hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <img 
                src={images.find(img => img.id === selectedImage)?.image}
                alt={images.find(img => img.id === selectedImage)?.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <WhatsAppButton />
      <SocialMediaSidebar />
      <Footer />
    </div>
  );
};

export default Gallery;
