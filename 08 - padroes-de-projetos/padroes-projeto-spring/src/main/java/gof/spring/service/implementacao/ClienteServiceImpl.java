package gof.spring.service.implementacao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gof.spring.model.Cliente;
import gof.spring.model.ClienteRepository;
import gof.spring.model.Endereco;
import gof.spring.model.EnderecoRepository;
import gof.spring.service.ClienteService;
import gof.spring.service.ViaCepService;

@Service
public class ClienteServiceImpl implements ClienteService {
	
	//TODO Singleton: Injetar os componentes do Spring com @Autowired.
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private ViaCepService viaCepService;
	
	//TODO Strategy: Implementar os métodos definidos na interface.
	//TODO Facade: Abstrair integrações com subsistemas, provendo uma interface simples.
	
	

	@Override
	public Iterable<Cliente> buscarTodos() {
		return clienteRepository.findAll();
	}

	@Override
	public Cliente buscarPorId(Long id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);		
		return cliente.get();
	}

	@Override
	public void inserir(Cliente cliente) {		
		salvarClienteComCep(cliente);
		
	}

	@Override
	public void atualizar(Long id, Cliente cliente) {
		Optional<Cliente> clienteBd = clienteRepository.findById(id);
		if (clienteBd.isPresent()) {
			salvarClienteComCep(cliente);			
		}
		
	}

	@Override
	public void deletar(Long id) {
		// FIXME Deletar Cliente por ID.
		clienteRepository.deleteById(id);
	}	
	
	private void salvarClienteComCep(Cliente cliente) {
		
		// FIXME Verificar se o Endereco do Cliente já existe (pelo CEP).
		String cep = cliente.getEndereco().getCep(); 
		Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
			// FIXME Caso não exista, integrar com o ViaCep e persistir o retorno.
			Endereco novoEndereco = viaCepService.consultarCep(cep);
			enderecoRepository.save(novoEndereco);
			return novoEndereco;
		});
		cliente.setEndereco(endereco);
		// FIXME Inserir Cliente, vinculando o Endereço (novo ou existente).
		clienteRepository.save(cliente);
	}

}
