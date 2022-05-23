const Home = () => {
  return (
    <>
      <section id="objetivo" className="container">
          <div id="descricao-objetivo" className="row">
              <h3>Objetivo</h3>
              <p className="text-justify">
                  Espero ter a oportunidade de assumir a posição de bioinformata como também de desenvolvedor de 
                  aplicações.
              </p>
          </div>
      </section>
      <section id="background" className="container">
          <div id="graduacao" className="row">
              <h3>Graduação</h3>
              <p className="text-justify">
                  Eu comecei minha jornada profissional em 2015 quando ingressei no curso de Biomedicina na Universidade
                  Federal Fluminense. Durante 4 anos, adquiri inúmeros conhecimentos essenciais para minha formação como
                  também ganhei experiências práticas. Inicialmente, trabalhei com cultura de células derivadas de 
                  neurofibroma e posteriormente com monocitoses na rotina do laboratório de hematologia do HU Antônio 
                  Pedro. Por fim, finalizei minha graduação defendendo o TCC em hematologia em 2018, obtendo o título de
                  bacharel em Biomedicina com habilitação em Análises Clínicas.
              </p>
          </div>
          <div id="mestrado" className="row">
              <h3>Mestrado</h3>
              <p className="text-justify">
                  Ao final da minha graduação, decidi optar por seguir a minha vontade de aprender mais sobre tecnologia,
                  então acabei encontrando a bioinformática como uma forma de unir o que eu sabia com o que eu queria 
                  aprender. Em 2019, iniciei um "estágio" no laboratório de bioinformática da Universidade Federal do 
                  Rio de Janeiro para me preparar para a prova de mestrado. Durante esse período adquiri conhecimentos
                  a respeito de Linux, programação e também bioinformática que foram essenciais para eu ser aprovado no
                  mestrado em Biologia Computacional e Sistemas no Instituto Oswaldo Cruz. Ao longo de 2 anos desenvolvi
                  meu projeto no genoma de <em>Rhodnius prolixus</em>, um vetor da doença de Chagas, onde o foco principal
                  era a predição gênica da montagem Hi-C como também a conciliação com dados anteriores. No início de 
                  2022 concluí o meu mestrado e parte do meu trabalho se encontra disponível na 
                  <a href="http://www.bioinfo.iq.ufrj.br/genomes" target="_blank" style={{color: 'white'}}>internet,</a> 
                  porém optei por não continuar a minha carreira acadêmica e buscar uma experiência no mercado de trabalho.
              </p>
          </div>
          <div id="formacao-complementar" className="row">
              <h3>Formação Complementar</h3>
              <p className="text-justify">
                  Inicialmente programar era apenas uma etapa do meu mestrado para me ajudar a extrair certas informações dos
                  meus dados. Entretanto, com o passar do tempo, codar deixou de ser apenas uma etapa e se tornou quase como
                  um hobby. Então decidi por buscar cursos que pudessem aprimorar minhas capacidades de lógica como também de
                  programação. Meus estudos começaram em Perl, linguagem padrão do meu laboratório, porém foi no Python que 
                  pude me aprimorar e ganhar confiança para escrever scripts que contribuíssem com o meu projeto. Depois disso,
                  eu nunca mais parei de estudar programação, o que possibilitou que eu fosse aprovado em um processo seletivo para
                  me tornar um desenvolvedor Web Full Stack no final do ano de 2021. Desde então estou aprendendo sobre HTML, CSS, 
                  JavaScript e React para me tornar um profissional mais capacitado dentro da área de tecnologia.
              </p>
          </div>            
      </section>
    </>
  )
}

export default Home