export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">Sobre Mim</h1>
          <p className="hero--section-description">
             Desenvolvedor Backend (Java/Spring) no Gedai. 
           Resolvo o desafio de acesso a dados governamsentais 
           (CEP, CNPJ, Sicar) construindo um gateway de microsserviços. 
           
          </p>
          <p className="hero--section-description">
            Esse sistema gerencia as camadas de segurança e auditoria necessárias,
           fornecendo acesso simplificado. Para isso, utilizo Docker para a 
           containerização dos serviços, Git para o 
           controle rigoroso de versão e bancos de dados para a persistência dos logs de auditoria.
          </p>
        </div>
      </div>
    </section>
  );
}
