import Layout from '../components/Layout';

export function getStaticProps() {
	return {
		props: {
			numero: Math.random(),
		},
	};
} // se rodar build ele faz apenas uma vez o random e sempre retorna o mesmo valor

export default function Estatico(props) {
	return (
		<Layout titulo="Conteúdo estástico">
			<div>{props.numero}</div>
		</Layout>
	);
}
