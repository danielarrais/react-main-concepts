# Composition vs Inheritance

Neste projeto não há exemplos práticos por conta da simplidade do tema.

Basicamente devemos seguir esses principios:

* Não precisamos de herança;
* Podemos usar composição em vez de herança, incluindo componentes um dentro do outro;
* Caso precisemos de especializar componentes podemos criar um coponenete genérico que recebe as propriedades que vai moldar seu comportamento.

```JS
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

Nesse exemplo por exemplo criamos nós criamos um dalogo genérico que recebe algumas propriedades que são padrões de todos os dialogos. Depois criamos um componente especifico que representa dialogo de boas vindas e que faz uso do diaolo generico. 