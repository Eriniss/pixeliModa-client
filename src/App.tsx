import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { NavigationBar } from './components';
import { PrivateRoute } from './components/util/PrivateRoute';

const App = (): JSX.Element => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <BlogPage />
            </PrivateRoute>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
