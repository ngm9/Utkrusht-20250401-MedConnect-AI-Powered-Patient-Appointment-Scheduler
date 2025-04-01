import { useState } from 'react';

export default function SymptomAnalyzer({ onSpecialtiesRecommended }) {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Implement API call to backend symptom analyzer
    // TODO: Handle loading state and errors
    // TODO: Call onSpecialtiesRecommended with the results
  };

  return (
    <div>
      <h2>Describe Your Symptoms</h2>
      <form onSubmit={handleSubmit}>
        {/* TODO: Implement form UI */}
      </form>
    </div>
  );
}
