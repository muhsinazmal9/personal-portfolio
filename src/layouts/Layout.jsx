import PropTypes from 'prop-types';
import { PageTitle } from "../components/PageTitle";
import { Header } from "../layouts";
import { Footer } from "../layouts";

const Layout = ({ children, title }) => {
   return (
      <>
         <PageTitle title={title} />

         <Header />
         {children}
         <Footer />
      </>
   );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};