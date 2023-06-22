import { Routes, Route } from 'react-router-dom';
import Registration from 'pages/Registration';
import LoginPage from 'pages/LoginPage';
import Contacts from 'pages/Contacts';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (<>
  <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Toaster />
    </>
    
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
