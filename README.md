
            # MedConnect: AI-Powered Patient Appointment Scheduler

            ## Time to complete: 48h

            ## Scenario
            MedConnect is a healthcare startup that wants to revolutionize how patients schedule appointments with doctors. They've approached you to build a proof-of-concept for an AI-powered appointment scheduling system that helps patients find the right specialist based on their symptoms and medical history.

The system needs a FastAPI backend that handles user authentication, appointment scheduling logic, and integration with a simple LLM-based symptom analyzer. The frontend should be built with React/Next.js to provide an intuitive interface for patients to describe their symptoms, view recommended specialists, check doctor availability, and book appointments.

The symptom analyzer should use a simple LLM integration to process patient-described symptoms and suggest appropriate medical specialties (e.g., cardiology for chest pain, dermatology for skin issues). The system should maintain a database of doctors, their specialties, and their availability schedules.

As this is a proof-of-concept, you'll be working with simulated doctor data and a simplified LLM integration. The focus is on creating a functional, secure, and responsive application that demonstrates the core capabilities MedConnect needs for their vision.

            ## Outcomes
            ['Implement a FastAPI backend with proper route organization using APIRouter', 'Create a Next.js/React frontend with responsive design for both desktop and mobile views', 'Implement secure user authentication and authorization using JWT tokens', 'Develop a symptom analyzer service that integrates with an LLM API (like OpenAI) to suggest medical specialties based on patient descriptions', 'Create a database schema and implement ORM models for users, doctors, specialties, and appointments', 'Build a doctor availability calendar system with conflict prevention', 'Implement real-time appointment slot checking using async operations', 'Create an intuitive user flow from symptom description to appointment confirmation', 'Implement proper error handling and user feedback throughout the application', 'Write unit tests for critical backend functionality', 'Document the API using OpenAPI/Swagger']

            ## Constraints
            ['Use FastAPI for the backend and Next.js/React for the frontend', 'Implement proper authentication with JWT tokens and secure password storage', 'Use SQLAlchemy as the ORM for database interactions', 'Implement proper error handling with custom exception classes', 'Use a free tier of an LLM API service (like OpenAI) for the symptom analyzer', 'The application must be responsive and work on both desktop and mobile browsers', "All API endpoints must be properly documented using FastAPI's built-in documentation features", 'Use environment variables for configuration and sensitive information', 'Implement proper validation for all user inputs using Pydantic models', 'Follow best practices for React component organization and state management', 'The system should handle concurrent appointment requests properly to prevent double-booking']
            