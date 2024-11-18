import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
export function PageTitle({ title }) {
    return (
        <Helmet>
            <title>{`Muhsin Azmal${title ? ` - ${title}` : ''}`}</title>
         </Helmet>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
}

