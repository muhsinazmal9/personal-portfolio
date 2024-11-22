import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
export function PageTitle({ title }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{`Muhsin Azmal${title ? ` - ${title}` : ''}`}</title>
             </Helmet>
        </HelmetProvider>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
}

