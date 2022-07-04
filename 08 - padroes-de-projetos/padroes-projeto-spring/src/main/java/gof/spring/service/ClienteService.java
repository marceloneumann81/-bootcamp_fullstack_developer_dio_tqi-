package gof.spring.service;

import gof.spring.model.Cliente;


/**
 * Interface que define o padrao <b>Strategy</b> no domínio de cliente.
 * Com isso, se necessário, podemos ter múltiplas implementações dessa
 * mesma interface
 * 
 * @author marcelo
 *
 */


public interface ClienteService {
	
	Iterable<Cliente> buscarTodos();
	
	Cliente buscarPorId(Long id);
	
	void inserir(Cliente cliente);
	
	void atualizar(Long id, Cliente cliente);
	
	void deletar(Long id);

}
