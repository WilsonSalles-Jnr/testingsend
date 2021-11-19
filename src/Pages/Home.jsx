import React from 'react';
import '../Styles/home.css'

class Home extends React.Component {
  render() { 
    return (
      <main>
        <aside>
          <img
          src="https://avatars.githubusercontent.com/u/64506476?v=4"
          alt="wilson salles junior"
          className="profilePic"
        />
        <h2>Oi, eu sou o Wilson</h2>
        </aside>
        <section>
          <h2>Um pouco sobre mim:</h2>
          <hr />
          <h3>Quem sou eu?</h3>
          <p>Sou Wilson Salles Junior, tenho 26 anos, moro em Bauru/SP, atualmente faço curso de programação na <span>Trybe</span>, foi uma longa jornada para começar a seguir meu sonho de ser um programador.</p>
          <h3>Início do sonho</h3>
          <p>Meu sonho se deu início quando eu tinha 15 anos, eu gostava muito de jogar, e com um pouco de curiosidade, decidi buscar como os jogos eram feitos, foi então que descobri o <strong>C#</strong>, depois de muitos tutoriais, finalmente vi meu resultado na tela, fiquei maravilhado com as possibilidades de fazer algo realmente grande, mas seria necessário muito estudo, e por não ter condições de fazer um curso voltado para programação, bem como não tinha conhecimento sobre o mercado de programação, deixei de lado este meu sonho e fui me aperfeiçoar na área comercial, que é uma área que eu sabia que iria conseguir um emprego para me manter e ter um progresso na minha vida financeira.</p>
          <h3>Uma grande oportunidade</h3>
          <p>Certo dia, um amigo me contou sobre a <span>Trybe</span>, disse que era um curso de programação e que havia um modelo de negócio que poderia me ajudar bastante, o modelo de sucesso compartilhado, busquei conhecer melhor e vi que era o ideal para mim, meu sonho de programador acordou naquele momento, decidi entrar e me dedicar, faço o curso com muito bom gosto e estou aprendendo cada dia mais, e cada módulo que estudo, me sinto cada vez mais apto para trabalhar com programação.</p>
          <h3>Dia a Dia</h3>
          <p>Para não acumular contas, faço entregas utilizando aplicativos, entre uma entrega ou outra, dou uma estudada no conteúdo do curso, isso faz eu aproveitar melhor o tempo que os aplicativos não tocam, após almoçar, vou direto para o curso, com foco total, é o momento que mais me revigora depois de uma manhã bem corrida.</p>
          <h3>O que busco</h3>
          <p>Atualmente, busco uma oportunidade para que eu possa trabalhar como programador, também, busco finalizar o curso da <span>Trybe</span>, pois sei que tem muitas coisas para eu aprender lá ainda, meu foco é aprender e me desenvolver.</p>
          <hr />
          <h2>Estou preparado para ser contratado!</h2>
        </section>
      </main>
    );
  }
}
 
export default Home;