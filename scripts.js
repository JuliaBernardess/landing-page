let sobre = document.querySelector('#about')

// fUNÇÃO ASSINCRONA
async function getApiGithub(){
    try{
         const dadosPerfil = await fetch('https://api.github.com/users/JuliaBernardess')
         const perfil = await dadosPerfil.json()

         let teste = "teste" + perfil

         let conteudo = `
         <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
         <article class="section_content">
             <h1>Who am I?</h1>
             <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
                 inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
                 deleniti modi sit laudantium totam!
             </p>

             <div class="section_github flex">
                 <a class="btn" href="${perfil.html_url}">Github</a>
                 <p>${perfil.followers} Seguidores</p>
                 <p>${perfil.public_repos} Repositórios</p>
             </div>
         </article>
     `
     sobre.innerHTML += conteudo


        // console.log(perfil.name) para visualizar na ferramenta do desenvolvedor 
     // caso de erro caí no Try catch

    } catch (error) {
      console.log(error)
    }
}
 function changeTheme(){
   document.body.classList.toggle('dark-theme') 
 }

getApiGithub()