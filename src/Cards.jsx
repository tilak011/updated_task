import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function Cards() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [files, setFiles] = useState([]);
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [keywords, setKeywords] = useState('');
  const [budget, setBudget] = useState('');
  const [notes, setNotes] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles(fileList);
  };

  const handleServiceTypeChange = (event) => {
    setSelectedServiceType(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data (files, documentType, keywords) to your backend for storage
    console.log('Files:', files);
    console.log('Document Type:', documentType);
    console.log('Keywords:', keywords);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Service Type:', selectedServiceType);
    console.log('Priority:', selectedPriority);
    console.log('Budget:', budget);
    console.log('Notes:', notes);
  };
  return (
    <div className="buttoncss">
      <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className='cardscss'>
          <label htmlFor="fileInput"><strong>OSINT Analysis</strong></label>
          <input type="file" id="fileInput" multiple onChange={handleFileChange} />
        </div>
        <div className='cardscss'>
          <label htmlFor="dropdown"><strong>Service Type</strong></label>
          <select id="dropdown" value={selectedServiceType} onChange={handleServiceTypeChange}>
            <option value="">Select Service Type</option>
            <option value="option1">Social Media Intelligence</option>
            <option value="option2">Public Data Analysis</option>
            <option value="option3">Brand Protection</option>
            <option value="option4">Competitive Intelligence</option>
          </select>
        </div>
        <div className='cardscss'>
          <label htmlFor="keywordsInput"><strong>Target</strong></label>
          <input type="text" id="keywordsInput" value={keywords} onChange={handleKeywordsChange} placeholder="Enter target name or URL" />
        </div>
        <div className='cardscss'>
          <label htmlFor="startDate"><strong>Start Date:</strong></label>
          <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />

          <label htmlFor="endDate"><strong>End Date:</strong></label>
          <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
        </div>
        <div className='cardscss'>
          <label htmlFor="dropdown2"><strong>Priority</strong></label>
          <select id="dropdown2" value={selectedPriority} onChange={handlePriorityChange}>
            <option value="">Select Priority</option>
            <option value="option12">High</option>
            <option value="option22">Medium</option>
            <option value="option32">Low</option>
          </select>
        </div>
        <div className='cardscss'>
          <label htmlFor="budgetInput"><strong>Budget</strong></label>
          <input type="text" id="budgetInput" value={budget} onChange={handleBudgetChange} placeholder="Enter Budget" />
        </div>
        <div className='cardscss'>
          <label htmlFor="notesInput"><strong>Notes</strong></label>
          <input type="text" id="notesInput" value={notes} onChange={handleNotesChange} placeholder="Enter additional Notes" />
        </div>
        
        </div>
        <button type="submit">Submit</button>
       
      </form>
      
    </div>
  );
}

export default Cards;
