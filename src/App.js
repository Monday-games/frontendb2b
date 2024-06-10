import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OperatorDashboard from "./pages/OperatorDashboard";
import AccountLogin from "./pages/AccountLogin";
import OperatorGiveResult from "./pages/OperatorGiveResult";
import OperatorstartInnings from "./pages/OperatorstartInnings";
import AccountSignup from "./pages/AccountSignup";
import OperatormarketOn from "./pages/OperatormarketOn";
import OperatorballRunning from "./pages/OperatorballRunning";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/accountlogin":
        title = "";
        metaDescription = "";
        break;
      case "/operatorgive-result":
        title = "";
        metaDescription = "";
        break;
      case "/operatorstart-innings":
        title = "";
        metaDescription = "";
        break;
      case "/accountsignup":
        title = "";
        metaDescription = "";
        break;
      case "/operatormarket-on":
        title = "";
        metaDescription = "";
        break;
      case "/operatorball-running":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OperatorDashboard />} />
      <Route path="/accountlogin" element={<AccountLogin />} />
      <Route path="/operatorgive-result" element={<OperatorGiveResult />} />
      <Route path="/operatorstart-innings" element={<OperatorstartInnings />} />
      <Route path="/accountsignup" element={<AccountSignup />} />
      <Route path="/operatormarket-on" element={<OperatormarketOn />} />
      <Route path="/operatorball-running" element={<OperatorballRunning />} />
    </Routes>
  );
}
export default App;
