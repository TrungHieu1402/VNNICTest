import Header from "./Header";
import Footer from "./Footer";
import "~/i18n.js";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="Content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
