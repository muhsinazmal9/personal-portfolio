import { Layout } from "../layouts";
import { useParams } from "react-router-dom";

export default function Project() {
    const params = useParams();
    return (
        <Layout title={'Project'}>
            <h1>Project {params.id}</h1>
        </Layout>
    );
}