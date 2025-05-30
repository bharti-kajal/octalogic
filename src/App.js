import BookingForm from "./components/BookingForm";
import './style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BookingForm />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          fontSize: '14px',
          width: 'auto',
          maxWidth: '500px',
          borderRadius: '8px',
        }}
      />
    </>
  );
}

export default App;