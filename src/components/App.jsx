import { Routes, Route } from "react-router-dom";
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { Error } from './Error/Error'
// import { Toaster } from 'react-hot-toast';
// import { useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { BallTriangle } from 'react-loader-spinner';
import Registration from "pages/Registration";
import LoginPage from "pages/LoginPage";
import Contacts from "pages/Contacts";
import NotFound from "pages/NotFound";
import SharedLayout from "./SharedLayout/SharedLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshCurrentUser } from "redux/auth/operations";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])
  
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
         <Route path="/register" element={<Registration/>} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/contacts" element={<Contacts/>} />
         <Route path="*" element={<NotFound/>} />
         </Route>
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
