document.addEventListener("DOMContentLoaded", () => {
    // Select hamburger icon and nav menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            // Toggle active class to slide menu
            navLinks.classList.toggle("active");

            // Toggle active class for hamburger animation
            hamburger.classList.toggle("active");
        });

        // Optional: close menu when clicking a link
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                    hamburger.classList.remove("active");
                }
            });
        });
    }
});

// notifications
const notifications = document.getElementById('notifications');

// Clone notifications to create infinite loop effect
const clone = notifications.innerHTML;
notifications.innerHTML += clone;

// Pause on hover
notifications.addEventListener('mouseover', () => {
    notifications.style.animationPlayState = 'paused';
});

notifications.addEventListener('mouseout', () => {
    notifications.style.animationPlayState = 'running';
});
// Services
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  const modal = document.getElementById("service-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.querySelector(".close");

  // Service details (dynamic data)
  const serviceDetails = {
    one: {
      title: "E-Governance through Instant e-Sevai",
      desc: "Through Instant e-Sevai, citizens can easily apply for a wide range of government-issued certificates from the comfort of their home. These include essential documents such as birth and death certificates, income and community (caste) certificates, domicile and residence certificates, as well as marriage, employment, disability, solvency, first graduate, and character/conduct certificates. By streamlining the application process, providing real-time tracking, and ensuring fast delivery, Instant e-Sevai makes obtaining these certificates simple, transparent, and hassle-free for every citizen."
    },
    two: {
      title: "Company Registration through Instant e-Sevai",
      desc: "Starting a business has never been easier with Instant e-Sevai. Our Company Registration Service helps entrepreneurs and startups complete all legal formalities quickly, accurately, and efficiently. Whether you are registering a Private Limited, Limited Liability Partnership (LLP), One Person Company (OPC), or Sole Proprietorship, we guide you step by step to ensure compliance with government regulations."
    },
    three: {
      title: "Land Services & Legal Supports with IES",
      desc: "Access land records, property mutations, and encumbrance certificates online.Get reliable legal support for all property-related matters.Simplifying land and legal processes efficiently, transparently, and securely."
    },
    four: {
      title: "Business Services with Instant E-Sevai",
      desc: "Instant e-Sevai offers a complete suite of online business services to simplify your entrepreneurial journey. You can register your business quickly, obtain all necessary licenses and permits, and access government approvals without the hassle of visiting offices. Our platform helps you stay compliant with regulations while managing documentation and filings efficiently. By streamlining every aspect of business operations, Instant e-Sevai ensures that your processes are fast, secure, and completely transparent."
    }
  };

  // Scroll reveal effect
  const revealOnScroll = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial check

  // Open modal on card click
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const serviceKey = card.getAttribute("data-service");
      modalTitle.textContent = serviceDetails[serviceKey].title;
      modalDesc.textContent = serviceDetails[serviceKey].desc;
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
// media
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".social-card");

  // Scroll reveal animation
  const revealOnScroll = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Optional: Click animation for buttons
  const buttons = document.querySelectorAll(".social-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.98)";
      setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
  });
});
// quality-card
const cards = document.querySelectorAll('.quality-card');

    function showCards() {
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', showCards);
    window.addEventListener('load', showCards);
// ====== Configure your services here ======
const services = [
  { title: "6.PAN & GST & Tax Filing", href: "IES-ITD.html", category: "e-Governance" },
  { title: "5.Aadhaar Download & Updates", href: "IES-aadhaar.html", category: "e-Governance" },
  { title: "3.Company Registrations", href: "IES-Company.html", category: "Business", tag: "LLP Pvt" },
  { title: "7.Passport Application & E-Visa", href: "-IES-passport.html", category: "Citizen" },
  { title: "1.TN Certificate", href: "IES-certificates.html", category: "Certificates", tag: "Community Native etc.. " },
  { title: "9.RTO RC & License Services", href: "IES-RTO.html", category: "Transport" },
  { title: "8.Ration Card & Voter ID Services", href: "IES-card.html", category: "Citizen" },
  { title: "2.Land Related Services & Legal Supports", href: "voter-id.html", category: "Citizen" },
  { title: "4.Fssai , Business Services", href: "income-tax-filing.html", category: "Business" }
];

// ====== Elements ======
const listEl = document.getElementById("serviceList");
const searchEl = document.getElementById("serviceSearch");
const filterEl = document.getElementById("categoryFilter");
const countEl = document.getElementById("resultCount");
const sortBtn = document.getElementById("sortToggle");

// ====== State ======
let sortAsc = true;
let query = "";
let category = "all";

// Build category options
const categories = Array.from(new Set(services.map(s => s.category))).sort();
for (const c of categories) {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  filterEl.appendChild(opt);
}

// Helpers
const norm = s => s.toLowerCase().trim();

function render() {
  const q = norm(query);
  let view = services.filter(s =>
    (category === "all" || s.category === category) &&
    (!q || norm(s.title).includes(q))
  );
  view.sort((a, b) => sortAsc
    ? a.title.localeCompare(b.title)
    : b.title.localeCompare(a.title)
  );

  listEl.innerHTML = "";
  view.forEach(s => {
    const li = document.createElement("li");
    li.className = "service-item";
    li.innerHTML = `
      <a class="service-link" href="${s.href}" aria-label="${s.title}">
        <span class="service-title">${s.title}</span>
        <span class="service-right">
          <span class="badge cat" title="Category">${s.category}</span>
          ${s.tag ? `<span class="badge" title="Tag">${s.tag}</span>` : ""}
          <span class="chev" aria-hidden="true">›</span>
        </span>
      </a>
    `;
    // Make whole row clickable
    li.addEventListener("click", e => {
      const a = li.querySelector("a.service-link");
      if (e.target.tagName !== "A") a.click();
    });
    listEl.appendChild(li);
  });

  countEl.textContent = view.length;
}

// Events
searchEl.addEventListener("input", e => { query = e.target.value; render(); });
filterEl.addEventListener("change", e => { category = e.target.value; render(); });
sortBtn.addEventListener("click", () => {
  sortAsc = !sortAsc;
  sortBtn.setAttribute("aria-pressed", String(!JSON.parse(sortBtn.getAttribute("aria-pressed") || "false")));
  sortBtn.textContent = sortAsc ? "A–Z" : "Z–A";
  render();
});

// Restore search from URL (?q=) or localStorage
const params = new URLSearchParams(location.search);
const saved = localStorage.getItem("serviceSearch") || "";
const initialQ = params.get("q") ?? saved;
if (initialQ) { searchEl.value = initialQ; query = initialQ; }
// Persist search
searchEl.addEventListener("input", () => localStorage.setItem("serviceSearch", searchEl.value));

render();
// contact //
// Copy to clipboard functionality
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-copy");
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "✅ Copied!";
      setTimeout(() => {
        btn.textContent = "📋 Copy " + (text.includes("@") ? "Email" : "Number");
      }, 2000);
    });
  });
});
