async function carregarImagens() {
  const imagens = document.querySelectorAll('.imagem-bolo');

  for (let i = 0; i < imagens.length; i++) {
    const imagem = imagens[i];
    const src = imagem.dataset.src;

    await new Promise(resolve => {
      const carregar = () => {
        imagem.removeEventListener('load', carregar);
        resolve();
      };
      imagem.addEventListener('load', carregar);
      imagem.src = src;
    });
  }
}

carregarImagens();