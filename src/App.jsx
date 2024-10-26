import React from "react";
import Card from "./Card";

// Import images
import image1 from "./Web.jpg";
import image2 from "./cloudC.jpg";
import image3 from "./Effective-Task.jpg";
import image4 from "./fullstackdev.avif";
import image5 from "./ArtImage.jpg";
import image6 from "./Remote.png";
import image7 from "./AI.jfif";
import image8 from "./Cyber.jfif";

function App() {
    const cardData = [
        {
            title: "Building Scalable Web Applications",
            description: "Explore principles needed to create scalable web applications, including database optimization and load balancing.",
            image: image1
        },
        {
            title: "Introduction to Cloud Computing",
            description: "Discover cloud computing basics, covering IaaS, PaaS, SaaS, and how cloud solutions benefit businesses.",
            image: image2
        },
        {
            title: "Effective Task Management Techniques",
            description: "Learn methods to manage tasks, prioritize work, and meet deadlines with enhanced productivity.",
            image: image3
        },
        {
            title: "Essentials of Full Stack Development",
            description: "Comprehensive overview of frontend and backend development, including popular frameworks and tools.",
            image: image4
        },
        {
            title: "Mastering the Art of Presentation Design",
            description: "Create impactful presentations with design principles for clarity and audience engagement.",
            image: image5
        },
        {
            title: "Remote Team Collaboration Best Practices",
            description: "Enhance remote team collaboration with virtual tools, clear goals, and team engagement strategies.",
            image: image6
        },
        {
            title: "Exploring Artificial Intelligence Applications",
            description: "Dive into AI applications in industries, covering machine learning, NLP, and ethical considerations.",
            image: image7
        },
        {
            title: "Cybersecurity Basics for Everyday Users",
            description: "Understand essential cybersecurity practices to stay safe online, including password management.",
            image: image8
        }
    ];

    return (
        <div>
            <h1>Cards with Different Tasks on Technological Revolution</h1>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
