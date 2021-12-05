import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import Cliente from '../core/Cliente';
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
	const repo: ClienteRepositorio = new ColecaoCliente();

	const { exibirFormulario, exibirTabela, tabelaVisivel } = useTabelaOuForm();

	const [clientes, setClientes] = useState<Cliente[]>([]);
	const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

	useEffect(obterTodos, []);

	function obterTodos() {
		repo.obterTodos().then(clientes => {
			setClientes(clientes);
			exibirTabela();
		});
	}

	function selecionarCliente(cliente: Cliente) {
		setCliente(cliente);
		exibirFormulario();
	}

	function novoCliente() {
		setCliente(Cliente.vazio());
		exibirFormulario();
	}

	async function excluirCliente(cliente: Cliente) {
		await repo.excluir(cliente);
		obterTodos();
	}

	async function salvarCliente(cliente: Cliente) {
		await repo.salvar(cliente);
		obterTodos();
	}

	return {
		tabelaVisivel,
		cliente,
		clientes,
		novoCliente,
		salvarCliente,
		excluirCliente,
		selecionarCliente,
		obterTodos,
		exibirTabela,
	};
}
