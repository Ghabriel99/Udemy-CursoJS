function criaCalculadora() {
    return {
        //Atributos
        display: document.querySelector('.display'),

        //Métodos
        inicia() {
            this.cliqueBotoes(),
            this.pressionaEnter('enter')
        },

        // realiza a conta seleciona no display com a função eval do JS.
        realizaConta() {
            let conta = this.display.value;
            //eval
            try {
                conta = eval(conta);
                
                if(!conta) {
                    alert('Conta inválida!')
                    return;
                }
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida!')
            }

        },

        btnParaDisplay(valor) {
            this.display.value += valor;  //mostra o número selecionado na tela display
        },

        // ao pressionar enter chama o método de realizar a conta
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        // limpa o display para uma string vazia
        clearDisplay() {
            this.display.value = ' '; 
        },

        // apaga apenas um número
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        // eventos de click da calculadora
        cliqueBotoes() { 
            document.addEventListener('click', (e) => { //evento de clique com arrow func 'e' no target geral
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)  //manda o inner text do botão 
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay() // checando e chamando o método para limpar o display
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm() // checando e chamando o método para limpar somente um
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            });
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia()