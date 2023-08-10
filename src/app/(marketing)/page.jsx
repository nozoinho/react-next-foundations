import TitlePage from "@/components/pagesComponents/TitlePage";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <TitlePage title="Home" />
            {/* <a href="/blog">Blog</a> al dar click en el enlace (ancla) hace que toda la aplicación vuelva a cargar y genera peticion al servidor para que devuelva la pagina solicitada, impactando en el rendimiento, aparece el spinner de carga en la parte superir de la página al lado izquierdo del nombre de la pagina */}

            {/* con el Link de Next ya no ocurre esto y la peticion no va al servidor, se maneja desde el cliente */}
            <Link href="/blog">Blog</Link>
        </>
    );
};

export default Home;
