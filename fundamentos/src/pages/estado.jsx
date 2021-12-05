import { useState } from 'react';
import Layout from '../components/Layout';

export default function Estado() {
	const [numero, setNumero] = useState(0); // react hooks

	function incrementar() {
		setNumero(numero + 1);
	}

	return (
		<Layout titulo="Componente com Estado">
			<div>{numero}</div>
			<button onClick={incrementar}>incrementar</button>
		</Layout>
	);
}
