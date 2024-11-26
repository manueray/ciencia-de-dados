const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json';

async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        //console.log(dados)

        const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
        const pessoasQuePraticamEsportesRegularmente = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
        const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
        const totalPessoasQueAssistemEsportes = (dados.total_pessoas_que_assistem_esportes /1e9)

    
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Já parou para pensar que somos mais de <span>${pessoasMundo}</span> bilhões de pessoas no mundo? <br> Com tantos esportes e novas maneiras de se movimentar, o tempo médio semanal praticando esportes é de <span>${horas}</span> Embora o número total de pessoas que praticam regularmente seja de cerca de <span>${pessoasQuePraticamEsportesRegularmente}</span> bilhões de pessoas. <br>Eles só perdem para os praticantes
        da "apreciação do esporte", os quais somam quase <span>${totalPessoasQueAssistemEsportes}</span>, que acreditam que podem queimar calorias apenas torcendo
        pelo time. <br>Como se vibrar na frente da TV contasse como treino, afinal, quem precisa de academia quando se tem o sofá
        como melhor amigo? `
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo);
    }
    
    visualizarInformacoesGlobais()


   