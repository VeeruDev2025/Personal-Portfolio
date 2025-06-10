import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Veeresh is a fast learner and problem-solver. He impressed me with his attention to detail and frontend skills during our time at NxtWave.",
    name: "John Doe",
    role: "Mentor at NxtWave",
    avatar:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1688641671/user2_a5dmob.png",
  },
  {
    id: 2,
    quote:
      "Working with Veeresh on team projects was a great experience. His coding abilities and collaborative approach made complex features easier to implement.",
    name: "Jane Smith",
    role: "Project Lead",
    avatar:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1688641671/user4_rnmvnx.png",
  },
  {
    id: 3,
    quote:
      "Veeresh's dedication to learning new technologies and applying them effectively stands out. He has a bright future in full-stack development.",
    name: "Raj Kumar",
    role: "Senior Developer",
    avatar:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1688641671/user1_rylazk.png",
  },
];

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const Testimonials = () => {
  return (
    <section className="testimonialsContainer">
      <div className="sectionHeader">
        <h2>Testimonials</h2>
        <p>What people say about working with me</p>
      </div>

      <div className="testimonialsWrapper">
        <div className="testimonialsTrack">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <div className="quoteIcon">
                <svg fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="quote">{testimonial.quote}</p>
              <div className="testimonialFooter">
                <img
                  className="avatar"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <p className="name">{testimonial.name}</p>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
