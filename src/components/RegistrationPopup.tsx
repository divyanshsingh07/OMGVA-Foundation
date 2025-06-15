import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaGlobe, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import yogaImage from "../assets/yoga_day_registration_qr.png";

const GOOGLE_FORM_URL = "https://forms.gle/NBaEQb4WadSTmDtr7"; // Replace with your actual link

const RegistrationPopup = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <button style={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
          <FaTimes />
        </button>
        <img src={yogaImage} alt="Yoga Day" style={styles.image} />
        <h2 style={styles.title}>International Yoga Day Registration</h2>
        <div style={styles.badge}>100% Free / बिल्कुल फ्री</div>
        <div style={styles.infoRow}>
          <FaCalendarAlt style={styles.icon} />
          <span>Sat, 21 Jun, 2025</span>
        </div>
        <div style={styles.infoRow}>
          <FaMapMarkerAlt style={styles.icon} />
          <span>Ayodhya</span>
        </div>
        <div style={styles.infoRow}>
          <FaGlobe style={styles.icon} />
          <a href="https://forms.gle/NBaEQb4WadSTmDtr7" target="_blank" rel="noopener noreferrer" style={styles.link}>https://forms.gle/NBaEQb4WadSTmDtr7</a>
        </div>
        <p style={styles.desc}>
  International Yoga Day पर हमारे साथ जुड़ें और मुफ्त रजिस्ट्रेशन करके स्वास्थ्य और सकारात्मकता का अनुभव लें! 🧘‍♂️  
  📲 रजिस्टर करने के लिए QR को स्कैन करें या नीचे दिए गए बटन पर क्लिक करें।
</p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.animatedButton}
          className="yoga-animated-btn"
        >
          <FcGoogle style={{ marginRight: 10, fontSize: 24 }} />
          
          Click Here / यहाँ क्लिक करें
          <span className="arrow-animate" style={{ marginLeft: 12, display: 'flex', alignItems: 'center' }}>
            <FaArrowRight />
          </span>
        </a>
      </div>
      <style>{`
        @keyframes yogaPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.09); }
          100% { transform: scale(1); }
        }
        @keyframes arrowMove {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
        .yoga-animated-btn {
          animation: yogaPulse 1.3s infinite cubic-bezier(.4,2,.6,1);
        }
        .arrow-animate {
          animation: arrowMove 1.3s infinite cubic-bezier(.4,2,.6,1);
        }
        .yoga-animated-btn:hover {
          background: #ffe0b2;
          color: #e65100;
          box-shadow: 0 8px 24px rgba(255, 152, 0, 0.18);
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.45)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(2px)",
  },
  container: {
    position: "relative" as const,
    width: "90%",
    maxWidth: 420,
    padding: "30px 24px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #fffdf5 0%, #ffe9b5 100%)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
    textAlign: "center" as const,
    animation: "fadeIn 0.3s ease-in-out",
  },
  closeBtn: {
    position: "absolute" as const,
    top: 14,
    right: 14,
    background: "transparent",
    border: "none",
    fontSize: 24,
    cursor: "pointer",
    color: "#666",
    transition: "transform 0.2s ease-in-out",
  },
  image: {
    width: "100%",
    maxWidth: 250,
    display: "block",
    borderRadius: "16px",
    marginBottom: 20,
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 10,
    color: "#3c3c3c",
  },
  badge: {
    display: "inline-block",
    background: "#ff9800",
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    borderRadius: 8,
    padding: "4px 14px",
    margin: "8px 0 12px 0",
    letterSpacing: 1,
    boxShadow: "0 2px 8px rgba(255,152,0,0.10)",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontSize: 17,
    margin: "6px 0",
    color: "#555",
  },
  icon: {
    color: "#ff9800",
    fontSize: 20,
  },
  link: {
    color: "#1565c0",
    textDecoration: "underline",
    fontSize: 15,
  },
  desc: {
    marginTop: 18,
    marginBottom: 16,
    color: "#444",
    fontSize: 16,
    lineHeight: 1.5,
  },
  animatedButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    color: "#1a1a1a",
    border: "2px solid #ff9800",
    borderRadius: 10,
    padding: "13px 28px",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(255, 152, 0, 0.13)",
    transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
    cursor: "pointer",
    marginTop: 10,
    letterSpacing: 0.5,
  },
};

export default RegistrationPopup;