import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ExampleComponent from './components/ExampleComponent';
import AppointmentSystem from './components/AppointmentSystem';
import DoctorList from './components/DoctorList';
import DoctorDetails from './components/DoctorDetails';


const App = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null); // Provide type annotation

  const handleDoctorClick = (doctorId: number) => { // Provide type annotation
    setSelectedDoctorId(doctorId);
  };
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [doctorListOpen, setDoctorListOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const handleSignInOpen = () =>  {
    setSignInOpen(true);
  };

  const handleSignInClose = () => {
    setSignInOpen(false);
  };

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };

  const handleAppointmentOpen = () => {
    setAppointmentOpen(true);
  };

  const handleAppointmentClose = () => {
    setAppointmentOpen(false);
  };

  return (
    <div>
      <NavBar />
      <SignInForm open={signInOpen} onClose={handleSignInClose} />
      <SignUpForm open={signUpOpen} onClose={handleSignUpClose} />
      <HeroSection />
      <h1>Medical App</h1>
      {selectedDoctorId && <DoctorDetails doctorId={selectedDoctorId} />}
      <DoctorList category="Cardiology" onItemClick={handleDoctorClick} />
      <DoctorList category="Dermatology" onItemClick={handleDoctorClick} />
      {/* Add more categories as needed */}
      {selectedDoctorId && <DoctorDetails doctorId={selectedDoctorId} />}
      <ServicesSection />
      <div>

      <AppointmentSystem open={appointmentOpen} onClose={handleAppointmentClose} />
      <button onClick={handleAppointmentOpen}>Book Appointment</button>
      </div>
    
      <Footer />
      <Layout>
        <ExampleComponent title="Welcome to Preskibo" content="Your medical app." />
      </Layout>
    </div>
  );
};

export default App;
