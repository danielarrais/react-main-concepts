# Thinking in React

## Step 1: Break The UI Into A Component Hierarchy

Se tivermos uma pre-visualização do que queremos contruir podemos utilizá-la para identificar de forma simples quais componentes deveremos contruir. Podemos pegar a interface e fazer quadrados em torno de cada uma das parte para facilitar a visualização. Usando esse esquema podemos encontrar facilmente os componentes e onde eles deveram ser chamados.

## Step 2: Build A Static Version in React

Após ter a lista dos componetentes a o encadeamento deles, é hora de criar suas versões estatica. Nessa etapa é importante deevitar o uso de estados, estes serão definidos psteriormente com mais cautela, pois o estado ele é usado para a interação.

Os componentes podem ser contruídos de cima para baixo e vice versa. No fim do processo teremos uma biblioteca de compoentes que podemos utilizar para obter o resultado desejado.

## Step 3: Identify The Minimal (but complete) Representation Of UI State

Para dar interatividade a interface precisamos manipular o estado dos componentes. Mas antes de manipular precisamos definí-los e para isso podemos seguir alguns critérios:

* É passado de um pai através de adereços? Se assim for, provavelmente não é estado;
* Ele permanece inalterado ao longo do tempo? Se assim for, provavelmente não é estado;
* Você pode computá-lo com base em qualquer outro estado ou adereços em seu componente? Se assim for, não é estado.

## Step 4: Identify Where Your State Should Live
React é sobre o fluxo de dados unidirecional (do pai para os filhos) de dados. Após definirmos os estados temos que definir que irá possuir estado. Podemos seguir essas dicas da equipe do React:

* Identifique cada componente que renderiza algo baseado nesse estado.
* Encontre um componente proprietário comum (um único componente acima de todos os componentes que precisam do estado na hierarquia).
* Ou o proprietário comum ou outro componente superior na hierarquia deve possuir o estado.
* Se você não consegue encontrar um componente onde faz sentido possuir o estado, crie um novo componente apenas para segurar o estado e adicione-o em algum lugar na hierarquia acima do componente proprietário comum.

## Step 5: Add Inverse Data Flow

Se necessário for subir dados para os componentes superiores é só fazer o que foi estudado no projeto **05-state-and-lifecycle**.