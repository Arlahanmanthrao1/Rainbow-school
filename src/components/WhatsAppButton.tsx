import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const whatsappNumber = "9949067773"; // Replace with actual WhatsApp number
  const message = "Hello! I'd like to know more about Rainbow High School.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-all duration-300 group rounded-full"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="h-16 w-16 rounded-full drop-shadow-lg hover:drop-shadow-2xl transition-all"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
