import { useState } from 'react';

// 1. Estado inicial definido fora do componente para reutilização
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: 'Selecione um', // O valor da <option> padrão
  message: '',
  terms: false,
};

export default function ContactMe() {
  // 2. Estado inicializado com a constante
  const [formData, setFormData] = useState(initialState);

  // 3. Manipulador genérico para atualizar o estado
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 4. Manipulador de submissão
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o reload da página

    if (!formData.terms) {
      alert("Você deve aceitar os termos.");
      return;
    }

    // Log para depuração. Você pode remover isso em produção.
    console.log("Dados a enviar:", formData);

    try {
      
      const response = await fetch('URL_DO_SEU_BACKEND_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        // 5. Correção: Reseta o formulário usando a constante
        setFormData(initialState);
      } else {
        alert('Falha ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao submeter o formulário:', error);
      alert('Erro de rede. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Me Contate</h2>
        <p className="text-lg">
          Estou disponível para novas oportunidades. Entre em contato.
        </p>
      </div>
      
      {/* 6. Formulário agora intercepta a submissão */}
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Primeiro Nome</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"     // Corresponde ao estado
              id="first-name"
              required
              value={formData.firstName} // Controlado pelo estado
              onChange={handleChange}    // Atualiza o estado
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Ultimo Nome</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"      // Corresponde ao estado
              id="last-name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"       // Corresponde ao estado
              id="email"
              required
              value={formData.email} // Controlado pelo estado
              onChange={handleChange}  // Atualiza o estado
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Telefone</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone"       // Corresponde ao estado
              id="phone-number"
              required
              value={formData.phone} // Controlado pelo estado
              onChange={handleChange}  // Atualiza o estado
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select 
            id="choose-topic" 
            className="contact--input text-md"
            name="topic"       // Corresponde ao estado
            value={formData.topic} // Controlado pelo estado
            onChange={handleChange}  // Atualiza o estado
          >
            <option>Selecione um</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensagem</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"     // Corresponde ao estado
            rows="8"
            placeholder="Escreva sua mensagem..."
            value={formData.message} // Controlado pelo estado
            onChange={handleChange}  // Atualiza o estado
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input 
            type="checkbox" 
            required 
            name="terms"       // Corresponde ao estado
            id="checkbox"
            checked={formData.terms} // Controlado pelo estado (usa 'checked')
            onChange={handleChange}    // Atualiza o estado
          />
          <span className="text-sm">Eu aceito os termos</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}