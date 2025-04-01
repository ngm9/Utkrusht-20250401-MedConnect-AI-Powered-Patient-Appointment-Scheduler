# MedConnect: AI-Powered Patient Appointment Scheduler

## Project Overview
MedConnect is an AI-powered appointment scheduling system for healthcare that helps patients find the right specialist based on their symptoms and medical history. This proof-of-concept demonstrates the core functionality of the system.

## Features
- User authentication and profile management
- AI-powered symptom analysis and specialty recommendation
- Doctor availability calendar and appointment scheduling
- Real-time appointment slot checking
- Responsive UI for desktop and mobile devices

## Technical Requirements

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy ORM
- JWT for authentication
- Integration with LLM API (e.g., OpenAI)

### Frontend
- Next.js/React
- State management solution of your choice
- Responsive design

## Getting Started
1. Create a free tier account for an LLM API service (like OpenAI)
2. Set up your environment variables
3. Install dependencies for both backend and frontend
4. Run the development servers

## Project Structure
The project is divided into two main parts:
1. Backend API (FastAPI)
2. Frontend Application (Next.js/React)

## Expected Outcomes
- Functional user authentication system
- Working symptom analyzer with LLM integration
- Doctor availability and appointment scheduling system
- Responsive and intuitive user interface
- Comprehensive API documentation
- Unit tests for critical functionality

## Constraints
- Use FastAPI for the backend and Next.js/React for the frontend
- Implement proper authentication with JWT tokens
- Use SQLAlchemy as the ORM for database interactions
- Implement proper error handling with custom exception classes
- Use a free tier of an LLM API service for the symptom analyzer
- The application must be responsive and work on both desktop and mobile browsers
- All API endpoints must be properly documented
- Use environment variables for configuration and sensitive information
- Implement proper validation for all user inputs using Pydantic models
- Follow best practices for React component organization and state management
- The system should handle concurrent appointment requests properly

## Submission
Please provide:
1. Source code for both backend and frontend
2. Documentation on how to set up and run the application
3. A brief explanation of your design decisions and architecture
4. A video demonstration of the working application
