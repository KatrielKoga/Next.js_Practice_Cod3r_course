import Navegador from '../components/Navegador';

export default function Inicio() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				height: '100vh',
			}}
		>
			<Navegador texto="Estiloso" destino="estiloso" />
			<Navegador texto="Exemplo" destino="exemplo" cor="#9400d3" />
			<Navegador texto="Jsx" destino="jsx" cor="crimson" />
			<Navegador texto="Navegação #01" destino="navegacao" cor="green" />
			<Navegador texto="Navegação #02" destino="cliente/sp-02/123" cor="blue" />
			<Navegador texto="Componente com estado" destino="estado" cor="#a45b71" />
			<Navegador
				texto="Integração com API #01"
				destino="integracao_1"
				cor="#42a9a9"
			/>
			<Navegador texto="Conteúdo Estático" destino="estatico" cor="#fa054a" />
		</div>
	);
}
