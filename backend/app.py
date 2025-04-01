from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MedConnect API", description="AI-Powered Patient Appointment Scheduler API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to MedConnect API"}

# TODO: Add routers for authentication, users, doctors, appointments, and symptom analyzer
# TODO: Configure database connection
# TODO: Set up JWT authentication
# TODO: Implement error handling
