import { Routes, Route } from "react-router-dom";
// import { useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { Error } from './Error/Error'
// import { Toaster } from 'react-hot-toast';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { BallTriangle } from 'react-loader-spinner';
import Registration from "pages/Registration";
import LoginPage from "pages/LoginPage";
import Contacts from "pages/Contacts";
import NotFound from "pages/NotFound";

export function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}







// export function App() {
//   const { items, isLoading, error } = useSelector(state => state.contacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   // console.log(error)
//   // console.log(items.length > 0)
//   // console.log(isLoading)

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && (
//         <BallTriangle
//           height={100}
//           width={100}
//           radius={5}
//           color="#4fa94d"
//           ariaLabel="ball-triangle-loading"
//           wrapperClass={{}}
//           wrapperStyle=""
//           visible={true}
//         />
//       )}
//       {error && <Error/>}
//       {!error && items.length > 0 && <ContactsList />}
//       <Toaster />
//     </div>
//   );
// }
