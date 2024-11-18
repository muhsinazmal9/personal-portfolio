import { Header, Footer } from "../components";
import PropTypes from 'prop-types';
import { PageTitle } from "../components/PageTitle";

export default function Layout({ children, title }) {
   return (
      <>
         <PageTitle title={title} />

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
  title: PropTypes.string
};