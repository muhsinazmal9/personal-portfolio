import { Header, Footer } from "../components";
import PropTypes from 'prop-types';
import { PageTitle } from "../components/PageTitle";

export default function Layout({ children, title }) {
   return (
      <>
         <PageTitle title={title} />

         <Header />
         {children}
         <Footer />
      </>
   );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};