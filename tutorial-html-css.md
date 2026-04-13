<h1 align="center">WebDesign</h1>

## Foco da disciplina

Essa disciplina ensina como criar páginas web, focando em **HTML** (estrutura) e **CSS** (aparência), com uma breve introdução ao **JavaScript**.

---

## Objetivo

O objetivo é capacitar o aluno a criar páginas web simples, organizando o conteúdo e aplicando estilos para melhorar a aparência e a usabilidade.

---

## Pré-requisitos

Não é necessário conhecimento prévio em programação, pois a disciplina é introdutória.

É recomendável ter noções básicas de uso de computador, utilizar um editor de código como o Visual Studio Code (VS Code), e usar Git e GitHub para organizar e salvar os projetos.

---

## HTML

HTML é uma linguagem de marcação usada para **estruturar o conteúdo de uma página web**.

Ele não é uma linguagem de programação, pois não executa lógica — apenas organiza os elementos da página.

O HTML funciona através de **tags**, que indicam o tipo de conteúdo. Essas tags normalmente possuem abertura e fechamento:

```html
<p>Isso é um parágrafo</p>
```

### Exemplos de tags:

* `<h1>` → título
* `<p>` → parágrafo
* `<a>` → link

Além da organização visual, o HTML também é importante para **acessibilidade**, pois ajuda diferentes usuários (inclusive com deficiência) a entender o conteúdo da página.

### Lista de todas as tags HTML

Nestes links, você pode encontrar uma lista completa de todas as tags HTML, juntamente com suas descrições e exemplos de uso: [MDN Web Docs - Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element) ou [W3Schools - HTML Tags](https://www.w3schools.com/TAGS/default.asp).

---

## Semântica no HTML

Semântica é usar as tags HTML com o **significado correto**, e não só pela aparência.

Ela é importante principalmente para **acessibilidade**, pois permite que leitores de tela e outras tecnologias entendam melhor o conteúdo da página.

A ideia principal é:

- Algumas tags têm **significado + aparência**
- Outras têm **apenas aparência**



### Exemplos

```html
<strong>Texto importante</strong>
<b>Texto em negrito</b>
```

* `<strong>` → deixa em negrito **e** indica que o texto é importante (um leitor de tela entenderia essa parte)
* `<b>` → também deixa em negrito, mas **não indica significado** (um leitor de tela ignoraria essa parte)

---

```html
<em>Texto enfatizado</em>
<i>Texto em itálico</i>
```

* `<em>` → deixa em itálico **e** indica ênfase (um leitor de tela conseguiria entender essa parte)
* `<i>` → apenas deixa em itálico (um leitor de tela ignoraria essa parte)

---

```html
<header>Topo da página</header>
<div>Topo da página</div>
```

* `<header>` → indica que esse conteúdo é o cabeçalho da página ou de uma seção (tem significado)
* `<div>` → não tem significado, é só uma divisão genérica

---

### Resumindo

* Tags semânticas → têm **significado + visual**
* Tags visuais → têm **apenas estilo visual**

Por isso, o ideal é usar tags semânticas para dar sentido ao conteúdo, e usar CSS para controlar a aparência.

---

## Estrutura básica do HTML

Todo documento HTML segue essa base:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Título</title>
</head>
<body>
  Conteúdo da página
</body>
</html>
```

* `<!DOCTYPE html>` → Todo documento HTML deve começar com a declaração do tipo de documento <!DOCTYPE html>, que informa ao navegador que o documento é um arquivo HTML5
* `<html lang="pt-BR">` → Elemento raiz do documento HTML. O lang="pt-BR" define o idioma da página como português do Brasil, ajudando acessibilidade e mecanismos de busca.
* `<head>` → É a parte do site onde ficam os metadados, ou seja, informações sobre a página. Isso inclui o título da aba, configurações, estilos (CSS) e scripts. Essas informações não aparecem dentro do site, mas são usadas pelo navegador para exibir e configurar a página corretamente.
* `<meta charset="UTF-8">` → Define a codificação de caracteres do documento, garantindo que acentos, símbolos e caracteres especiais sejam exibidos corretamente.
* `<title>` → Define o título da página, que aparece na aba do navegador.
* `<body>` → É a parte do site onde fica todo o conteúdo visível da página, ou seja, tudo que o usuário realmente vê e interage, como textos, imagens, botões, links e etc.

---

## Atributos HTML

**Atributos são informações extras que você coloca dentro de uma tag HTML para dizer como ela deve se comportar.**

Eles sempre ficam na **tag de abertura**.

---

### Como funciona

```html
<tag atributo="valor">
```

* **atributo** → o nome da configuração
* **valor** → o que você quer definir

---

### Exemplo 1: link

```html
<a href="https://google.com">Clique aqui</a>
```

* `href` é o atributo
* ele diz **para onde o link vai**

 Sem o atributo, o link não sabe pra onde ir.

---

### Exemplo 2: imagem

```html
<img src="foto.jpg" alt="Uma foto minha">
```

* `src` → caminho da imagem (de onde ela vem)
* `alt` → texto que aparece se a imagem falhar

---

### Exemplo 3: classe (para CSS)

```html
<p class="destaque">Texto</p>
```

* `class` → serve para “marcar” o elemento
* depois o CSS usa isso pra estilizar

---

### Exemplo 4: id

```html
<h1 id="titulo-principal">Olá</h1>
```

* `id` → nome único daquele elemento
* usado quando você quer identificar **só aquele item específico**

---

### Ideia principal

Os atributos servem para:

* dar **informações extras**
* mudar o **comportamento**
* conectar com **CSS ou JavaScript**
* melhorar a **acessibilidade**
* Atributos são “configurações” das tags.

### Lista de todos os atributos HTML

Aqui está um link com todos os atributos HTML: 

---

## CSS

CSS é uma linguagem usada para definir a **aparência da página**.

Com ele é possível controlar:

* cores
* fontes
* tamanhos
* espaçamento
* layout

Sem CSS, a página usa o estilo padrão do navegador.

---

### Estrutura de uma regra CSS

Toda regra CSS segue esta estrutura:

```
seletor {
propriedade: valor;
} 
```

Cada parte tem uma função:

---

### Seletor

define quais elementos da página serão estilizados.

Exemplos:

* `p` → todos os parágrafos
* `div` → todas as divs
* `#id` → um elemento específico

---

### Propriedade
A **propriedade** define o que será alterado no elemento.

Exemplos:

* cor do texto
* tamanho da fonte
* cor de fundo
* espaçamento

---

### Valor
O **valor** define como a propriedade será aplicada.

Exemplos:

* vermelho
* 20px
* azul
* 100%

---

### Exemplo completo

```css id="k2m9qf"
p {
  color: red;
}
```

Nesse caso:

* `p` seleciona todos os parágrafos
* `color` define a cor do texto
* `red` define a cor vermelha

Resultado: todos os parágrafos ficam com texto vermelho.

---

## Tipos de seletores CSS

### Seletor de tipo

CSS:

```css
p {
  color: red;
}
```

HTML:

```html
<p>texto 1</p>
<p>texto 2</p>
```

👉 resultado: os DOIS ficam vermelhos porque `p` pega **todos os parágrafos**

---

### Seletor de classe

CSS:

```css
.titulo {
  color: blue;
}
```

HTML:

```html
<p class="titulo">texto 1</p>
<h1 class="titulo">texto 2</h1>
<p>texto normal</p>
```

👉 resultado: só os que têm `class="titulo"` mudam

---

### Seletor de ID

CSS:

```css
#nome {
  color: green;
}
```

HTML:

```html
<h1 id="nome">site</h1>
<p>texto normal</p>
```

* Só esse elemento muda ✔
* ID é único ⚠️

---

### Seletor de atributo

CSS:

```css
a[href="#"] {
  color: red;
}
```

HTML:

```html
<a href="#">link 1</a>
<a href="https://google.com">link 2</a>
```

👉 só o primeiro link é afetado porque ele tem `href="#"`

---

### Pseudo-classe

CSS:

```css
p:first-child {
  color: orange;
}
```

HTML:

```html
<div>
  <p>primeiro</p>
  <p>segundo</p>
</div>
```

👉 só o primeiro `p` muda porque ele é o primeiro filho

---

### Descendente (`div p`)

CSS:

```css
div p {
  color: red;
}
```

HTML:

```html
<div>
  <p>pega</p>

  <section>
    <p>pega também</p>
  </section>
</div>
```

👉 pega TODOS os p dentro da div

---

### Filho direto (`div > p`)

CSS:

```css
div > p {
  color: blue;
}
```

HTML:

```html
<div>
  <p>pega</p>

  <section>
    <p>não pega</p>
  </section>
</div>
```

👉 só o primeiro p dentro da div muda

---

### Irmão adjacente (`h1 + p`)

CSS:

```css
h1 + p {
  color: purple;
}
```

HTML:

```html
<h1>Título</h1>
<p>pega</p>
<p>não pega</p>
```

👉 só o primeiro p depois do h1 muda

---

### Irmão geral (`h1 ~ p`)

CSS:

```css
h1 ~ p {
  color: gray;
}
```

HTML:

```html
<h1>Título</h1>
<p>pega</p>
<p>pega também</p>
```

👉 TODOS os p depois do h1 mudam **desde que estejam no mesmo nível**

---

### Resumo

* `p` → todos os p
* `.classe` → quem tem aquela classe
* `#id` → elemento único
* `[atributo]` → filtra por atributo
* `:pseudo-classe` → estado/posição
* `div p` → qualquer nível dentro
* `div > p` → direto dentro
* `h1 + p` → primeiro depois
* `h1 ~ p` → todos depois

---

## Importância do HTML e CSS

* HTML → estrutura do conteúdo
* CSS → aparência visual

Ambos são essenciais para criar páginas web funcionais e organizadas.
