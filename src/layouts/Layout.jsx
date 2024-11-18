import { Header, Footer } from "../components";
import PropTypes from 'prop-types';

export default function Layout({ children }) {
   return (
      <>
         <div className="flex flex-col gap-4 md:gap-8">
            <Header />
            {children}
            <Footer />
         </div>
      </>
   );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};